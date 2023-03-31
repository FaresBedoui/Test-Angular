import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router , ParamMap} from '@angular/router';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent implements OnInit {
  public ActualId:any;
  ListeArticles = JSON.parse(localStorage.getItem('articles')!) || [];
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let ID = parseInt (params.get('i')!);
      this.ActualId=ID
    });
    
  }
  goPrevious(){
    // alert (this.ActualId)
    let previousId = this.ActualId -1;
    if (previousId==-1){
      previousId =0
    }
    
    this.router.navigate(['../',previousId], {relativeTo:this.route})
  }

  goNext(){
    let nextId = this.ActualId +1;
    if (nextId==this.ListeArticles.length){
      nextId =this.ListeArticles.length-1
    }
    this.router.navigate(['../',nextId], {relativeTo:this.route})
  }
}
