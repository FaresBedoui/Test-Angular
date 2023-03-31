import { Component, OnInit } from '@angular/core';
import { ArticleService, Article } from 'src/app/Services/article.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit{
  public ArticleSer: any;
  filterValue: string = '';
  constructor(
    public datePipe: DatePipe,
    private ArticleService: ArticleService){}

  ngOnInit(): void {
      this.ArticleSer = JSON.parse(localStorage.getItem('articles')!) || [];
  }
  onDelete(index:any) {
    if (confirm("Are you sure you want to delete this article?")){
      this.ArticleService.deleteArticle(index);
      alert('Article Successfully Deleted');
    }
    this.ngOnInit()
  }

}
