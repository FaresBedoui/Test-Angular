import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ArticleService, Article } from 'src/app/Services/article.service';
@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  public ActualId: any;
  public articleForm: FormGroup;
  public ListeArticles: Article[] = JSON.parse(localStorage.getItem('articles')!) || [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private articleService: ArticleService // Ajouter ici
  ) {
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let ID = parseInt(params.get('i')!);
      this.ActualId = ID;


      const article = this.ListeArticles[this.ActualId];
      this.articleForm.setValue({
        title: article.title,
        content: article.content,
        category: article.category
      });
    });
  }

  onSubmit(): void {

    const updatedArticle: Article = {
      title: this.articleForm.value.title,
      content: this.articleForm.value.content,
      category: this.articleForm.value.category,
      date : new Date() 
    };

    this.articleService.editArticle(this.ActualId, updatedArticle);

    this.router.navigate(['/list-post']);
  }

}
