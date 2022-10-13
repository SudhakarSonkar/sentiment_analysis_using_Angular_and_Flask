import { Component, Input, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient, HttpEventType } from '@angular/common/http';
import { AppService } from '../services/shared.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  title = 'General';
  text: any;
  output: any;

  ReadMore: boolean = true;
  visible: boolean = false;


  @Input()
  requiredFileType: string | undefined;

  fileName = '';
  
  constructor(private sharedService: AppService, private http: HttpClient) { }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      let headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      formData.append("files", file, this.fileName);
      this.http.post("http://127.0.0.1:5000/sentiment", formData, { headers }).subscribe((d) => {
        console.log(d)
      })
      this.sharedService.doSentimentAnalysis(file).subscribe(
        res => {
          console.log('data: ', res);
          this.output = { ...res };
          this.visible = true;
        },
      )
    }
  }

  ngOnInit(): void {
  }

}
