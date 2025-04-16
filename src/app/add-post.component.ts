import { Component } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  post = {
    title: '',
    content: ''
  };

  submitPost() {
    console.log('Posted:', this.post);
    alert('Post added! (But not saved yet since API is offline)');
    this.post = { title: '', content: '' }; // reset form
  }
}
