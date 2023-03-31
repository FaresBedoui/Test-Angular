import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPostComponent } from './Components/list-post/list-post.component';
import { AddPostComponent } from './Components/add-post/add-post.component';
import { UpdatePostComponent } from './Components/update-post/update-post.component';
import { OnePostComponent } from './Components/one-post/one-post.component';
import { ErrorComponent } from './Components/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: '/list-post', pathMatch: 'full' },
  { path: 'list-post', component: ListPostComponent },
  { path: 'add-post', component: AddPostComponent },
  { path: 'list-post/update/:i', component: UpdatePostComponent },
  { path: 'list-post/:i', component: OnePostComponent },
  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
