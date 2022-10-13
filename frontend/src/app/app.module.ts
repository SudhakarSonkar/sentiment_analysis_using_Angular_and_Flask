import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavVerticalComponent } from './nav-vertical/nav-vertical.component';
import { HeadComponent } from './head/head.component';
import { GeneralComponent } from './general/general.component';
import { UploadComponent } from './upload/upload.component';
import { LinkComponent } from './link/link.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavVerticalComponent,
    HeadComponent,
    GeneralComponent,
    UploadComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
