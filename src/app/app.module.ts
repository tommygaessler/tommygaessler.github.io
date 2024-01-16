import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { Ng2TweetModule } from 'ng2-tweet/lib/index';
import { ShareButtonsModule } from 'ngx-sharebuttons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

import { routing } from './app.router';
import { PressComponent } from './press/press.component';
import { TalksComponent } from './talks/talks.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent,
    PressComponent,
    TalksComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    YoutubePlayerModule,
    Ng2TweetModule,
    ShareButtonsModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
