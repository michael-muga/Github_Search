import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoComponent } from './repo/repo/repo.component';
import { SearchGitComponent } from './search-git/search-git/search-git.component';

const routes: Routes = [
  {
    path:"Home", component: SearchGitComponent
  },
  {
    path:"repo", component: RepoComponent,
  },
  //  { path:'**', component:NotfoundComponent},
  { path: '', redirectTo:"/Home", pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
