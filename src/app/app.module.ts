import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitsearchFormComponent } from './gitsearch-form/gitsearch-form/gitsearch-form.component';
import { NavComponent } from './nav/nav/nav.component';
import { NotfoundComponent } from './notfound/notfound/notfound.component';
import { RepoComponent } from './repo/repo/repo.component';
import { SearchGitComponent } from './search-git/search-git/search-git.component';
import { HighlightDirective } from './highlight.directive';
import { TimeAgoPipe } from './time-ago.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GitsearchFormComponent,
    NavComponent,
    NotfoundComponent,
    RepoComponent,
    SearchGitComponent,
    HighlightDirective,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
