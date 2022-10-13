import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/shared.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  title = 'General';
  link: any;
  output: any;
  visible: boolean = false;

  constructor(private sharedService: AppService, private http: HttpClient) { }

  getResult() {
    console.log(this.link);
    let ourElement = { link: this.link };
    this.sharedService.doSentimentAnalysisOnUrl(ourElement).subscribe(
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
