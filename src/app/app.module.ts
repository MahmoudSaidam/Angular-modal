
import { FilesModule } from './files/files.module';
import { FooterComponent } from './Home/layout/footer/footer.component';
import { HeaderComponent } from './Home/layout/header/header.component';
import { HomeComponent } from './Home/home/home.component';
import { UsersService } from './components/admin/users.service';
import { users } from './components/admin/users';
import { UserModule } from './components/admin/user.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilesService } from './files/files.service';
import { NotfoundComponent } from './components/notfound/notfound.component';




@NgModule({
  declarations: [
    AppComponent,
 HomeComponent,
 HeaderComponent,
 FooterComponent,
 NotfoundComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FilesModule,
  ],
  providers: [users,UsersService,FilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
