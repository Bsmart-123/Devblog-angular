import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // For template-driven forms

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import your custom components here
import { AddPostComponent } from './pages/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Needed to make forms work
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
