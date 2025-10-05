import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css'],
})
export class NewsFeedComponent implements OnInit {
  ngOnInit(): void {}

  newPost = { content: '', image: '' };
  posts:any = [];

  handleImageUpload(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => (this.newPost.image = reader.result as string);
      reader.readAsDataURL(file);
    }
  }

  removeImage() {
    this.newPost.image = '';
  }

  submitPost() {
    if (this.newPost.content.trim()) {
      this.posts.unshift({
        author: 'Prabhat Dubey',
        date: new Date(),
        content: this.newPost.content,
        image: this.newPost.image,
      });
      this.newPost = { content: '', image: '' };
    }
  }

  previewImage: string | null = null;

openPreview(imageUrl: string) {
  this.previewImage = imageUrl;
}

closePreview() {
  this.previewImage = null;
}

}
