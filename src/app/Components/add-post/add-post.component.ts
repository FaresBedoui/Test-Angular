import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/Services/article.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  articleForm: FormGroup;
  articleTitle = '';
  articleContent = '';
  articleCategory = '';

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.articleForm.invalid) {
      return;
    }

    const title = this.articleForm.value.title;
    const content = this.articleForm.value.content;
    const category = this.articleForm.value.category;
    const date = new Date(); 

    const article = { title, content, category, date };
    this.articleService.addArticle(article);

    alert('Post Successfully Added');
    this.router.navigate(['../list-post']);
  }
}
