import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
// Animations ?
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Fileupload
import { FileUploadModule } from "ng2-file-upload";
// APP
import { AppComponent } from "./app.component";
// Auth
import { RequireAuthGuard } from "./guards/require-auth.guard";
import { RequireAnonGuard } from "./guards/require-anon.guard";

import { PageAuthComponent } from "./pages/page-auth/page-auth.component";

import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";

import { PageLoginComponent } from "./pages/page-login/page-login.component";
import { PageSignupComponent } from "./pages/page-signup/page-signup.component";
// Flat
import { FlatItemComponent } from "./components/flat-item/flat-item.component";

import { PageFlatComponent } from "./pages/page-flat/page-flat.component";
import { PageAddFlatComponent } from "./pages/page-add-flat/page-add-flat.component";
import { PageFlatIdComponent } from "./pages/page-flat-id/page-flat-id.component";
// User
import { PageUserIdComponent } from "./pages/page-user-id/page-user-id.component";
import { PageProfileEditComponent } from "./pages/page-profile-edit/page-profile-edit.component";
import { PageProfileComponent } from "./pages/page-profile/page-profile.component";
// Services
import { AuthService } from "./services/auth.service";
import { FlatsService } from "./services/flats.service";
import { UsersService } from "./services/users.service";
import { FlatFlatmatesComponent } from './components/flat-flatmates/flat-flatmates.component';

const routes: Routes = [
  { path: "", redirectTo: "flat", pathMatch: "full" },
  {
    path: "flat",
    canActivate: [RequireAuthGuard],
    component: PageFlatComponent
  },
  {
    path: "flat/:id",
    canActivate: [RequireAuthGuard],
    component: PageFlatIdComponent
  },
  {
    path: "add-flat",
    canActivate: [RequireAuthGuard],
    component: PageAddFlatComponent
  },
  {
    path: "edit-profile",
    canActivate: [RequireAuthGuard],
    component: PageProfileEditComponent
  },
  {
    path: "profile",
    canActivate: [RequireAuthGuard],
    component: PageProfileComponent
  },
  {
    path: "auth/login",
    canActivate: [RequireAnonGuard],
    component: PageLoginComponent
  },
  {
    path: "auth/signup",
    canActivate: [RequireAnonGuard],
    component: PageSignupComponent
  },
  {
    path: "user/:id",
    canActivate: [RequireAuthGuard],
    component: PageUserIdComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FlatItemComponent,
    PageFlatComponent,
    PageProfileEditComponent,
    PageAddFlatComponent,
    PageProfileComponent,
    PageAuthComponent,
    PageFlatIdComponent,
    SignupComponent,
    PageUserIdComponent,
    LoginComponent,
    PageLoginComponent,
    PageSignupComponent,
    FlatFlatmatesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FileUploadModule
  ],
  providers: [
    FlatsService,
    UsersService,
    AuthService,
    RequireAuthGuard,
    RequireAnonGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
