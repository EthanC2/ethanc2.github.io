import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NotesComponent } from './notes/notes.component';
import { ProjectsComponent } from './projects/projects.component';
import { PostIndexComponent } from './post-index/post-index.component';
import { LinkableTitleDirective } from './shared/linkable-title/linkable-title.directive';
import { PostsComponent } from './post-index/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FooterComponent,

    AboutMeComponent,
    NotesComponent,
    PageNotFoundComponent,
    ProjectsComponent,
    LinkableTitleDirective,
    PostsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full', data: {title: 'TRust the Compiler'}},
      { path: 'about-me', component: AboutMeComponent, data: {title: 'About Me'}},
      { path: 'notes', component: NotesComponent, data: {title: 'Programming Notes'} },
      { path: 'posts', component: PostIndexComponent, data: {title: 'Blog Posts'} },
      { path: 'posts/:post', component: PostsComponent, data: {title: 'Blog Posts'} },
      { path: 'projects', component: ProjectsComponent, data: {title: 'Project Showcase'} },
      { path: '**', component: PageNotFoundComponent, data: {title: 'Page Not Found'} },
    ])
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
