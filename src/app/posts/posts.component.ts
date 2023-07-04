import { PostsService } from '../posts.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Editor, Toolbar } from 'ngx-editor';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  newPost!: FormGroup;
  editor!: Editor;
  toolbar!: Toolbar;

  constructor(
    private postsService: PostsService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.postsService.getAllPosts().subscribe((data: any[]) => {
      this.posts = data;
    });
    this.editor = new Editor();
    this.toolbar = [
      ['bold', 'italic'],
      ['underline', 'strike'],
      ['code', 'blockquote'],
      ['ordered_list', 'bullet_list'],
      [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
      ['link', 'image'],
      ['text_color', 'background_color'],
      ['align_left', 'align_center', 'align_right', 'align_justify'],
      ['horizontal_rule', 'format_clear'],
    ];
    this.newPost = this.formBuilder.group({
      username: [''],
      message: [''],
    });
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  createPost(): void {
    let post = this.newPost.value;

    this.postsService.createPost(post).subscribe(() => {
      this.newPost.reset({ username: '', message: '' });
      this.updatePosts();
    });
  }

  private updatePosts(): void {
    this.postsService.getAllPosts().subscribe((data: any[]) => {
      this.posts = data;
    });
  }

  getRandomPosition(): number {
    const min = 0;
    const max = 300;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  updatePostPositions(): void {
    const postElements = document.getElementsByClassName('post-it');
    for (let i = 0; i < postElements.length; i++) {
      const element = postElements[i] as HTMLElement;
      element.style.top = this.getRandomPosition() + 'px';
      element.style.left = this.getRandomPosition() + 'px';
    }
  }
}
