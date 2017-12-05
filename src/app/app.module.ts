import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { FlatItemComponent } from './components/flat-item/flat-item.component';
import { PageFlatComponent } from './pages/page-flat/page-flat.component';
import { PageProfileEditComponent } from './pages/page-profile-edit/page-profile-edit.component';
import { PageAddFlatComponent } from './pages/page-add-flat/page-add-flat.component';
import { PageProfileComponent } from './pages/page-profile/page-profile.component';
import { PageAuthComponent } from './pages/page-auth/page-auth.component';
import { PageFlatIdComponent } from './pages/page-flat-id/page-flat-id.component';

import { FlatsService } from './services/flats.service';


const routes: Routes = [
  { path: '', redirectTo: 'flat', pathMatch: 'full' },
  { path: 'flat',  component: PageFlatComponent },
  { path: 'flat/:id',  component: PageFlatIdComponent },
  { path: 'add-flat',  component: PageAddFlatComponent },
  { path: 'edit-profile',  component: PageProfileEditComponent },
  { path: 'my-profile',  component: PageProfileComponent },

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

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FlatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
