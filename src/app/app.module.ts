import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FlatItemComponent } from "./components/flat-item/flat-item.component";
import { PageFlatComponent } from "./pages/page-flat/page-flat.component";
import { PageProfileEditComponent } from "./pages/page-profile-edit/page-profile-edit.component";
import { PageAddFlatComponent } from "./pages/page-add-flat/page-add-flat.component";
import { PageProfileComponent } from "./pages/page-profile/page-profile.component";
import { PageAuthComponent } from "./pages/page-auth/page-auth.component";
import { PageFlatIdComponent } from "./pages/page-flat-id/page-flat-id.component";

import { FlatsService } from "./services/flats.service";
import { SignupComponent } from "./auth/signup/signup.component";
import { PageUserIdComponent } from "./pages/page-user-id/page-user-id.component";
import { UsersService } from "./services/users.service";
// file upload in add flat
import { FileUploadModule } from "ng2-file-upload";

const routes: Routes = [
  { path: "", redirectTo: "flat", pathMatch: "full" },
  { path: "flat", component: PageFlatComponent },
  { path: "flat/:id", component: PageFlatIdComponent },
  { path: "add-flat", component: PageAddFlatComponent },
  { path: "edit-profile", component: PageProfileEditComponent },
  { path: "profile", component: PageProfileComponent },
  { path: "user/:id", component: PageUserIdComponent }
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
    PageUserIdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FileUploadModule
  ],
  providers: [FlatsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
