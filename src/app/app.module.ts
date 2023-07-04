import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent, PostsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxEditorModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
