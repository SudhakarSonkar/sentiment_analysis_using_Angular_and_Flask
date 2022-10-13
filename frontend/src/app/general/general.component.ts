import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient, HttpEventType } from '@angular/common/http';
import { AppService } from '../services/shared.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})

export class GeneralComponent implements OnInit {
  title = 'General';
  text: any;
  output: any;
  visible: boolean = false;

  constructor(private sharedService: AppService, private http: HttpClient) { }

  getResult() {
    console.log(this.text);
    let ourElement = { text: this.text };
    this.sharedService.doSentimentAnalysis(ourElement).subscribe(
      res => {
        console.log('data: ', res);
        this.output = { ...res };
        this.visible = true;
      },
    )
  }

  ngOnInit(): void {
  }

}
