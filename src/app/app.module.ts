import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const appRoutes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent,
    data: { title: 'Login here' } 
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    MovieListComponent,
    FooterComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes, 
      { enableTracing: true } // <-- Debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
