import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { RatingComponent } from './rating.component';
import { ProductComponent } from './product.component';
import { TruncatePipe } from './truncate.pipe';
import { JumbotronComponent } from './bs-jumbotron.component';
import { UserFormComponent } from './user-form.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';

import { routing } from './app.routing';
import { GitHubRouting } from './github/github.routing';

import { GitHubModule } from './github/github.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    RatingComponent,
    ProductComponent,
    TruncatePipe,
    JumbotronComponent,
    UserFormComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoginModule,
    GitHubModule,
    GitHubRouting,
    routing
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
