import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { RatingComponent } from './rating.component';
import { ProductComponent } from './product.component';
import { TruncatePipe } from './truncate.pipe';
import { JumbotronComponent } from './bs-jumbotron.component';
import { UserFormComponent } from './user-form.component';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { HomeComponent } from './home.component';
import { GitHubComponent } from './github.component';
import { NotFoundComponent } from './notfound.component';
import { GitHubUserComponent } from './githubuser.component';
import { routing } from './app.routing';
import { AuthGuard } from './auth-guard.service';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    RatingComponent,
    ProductComponent,
    TruncatePipe,
    JumbotronComponent,
    UserFormComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    GitHubComponent,
    GitHubUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [LoginService, AuthGuard, PreventUnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
