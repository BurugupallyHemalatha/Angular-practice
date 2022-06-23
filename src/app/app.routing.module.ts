import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactComponent} from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AuComponent } from './au/au.component';
import { JntuComponent } from './jntu/jntu.component';
import { AboutComponent } from './about/about.component';
import { ApplyComponent} from './apply/apply.component'
import { ForgotComponent } from './forgot/forgot.component';
import { TableComponent } from './TableComponent/table.component';

@NgModule({
  declarations:[
  
  ],
  imports: [RouterModule.forRoot([
    {path:'register',component:RegistrationComponent},
    {path:'login',component:LoginComponent},
    {path:'contact',component:ContactComponent},
    {path:'home',component:HomeComponent},
    {path:'au',component:AuComponent},
    {path:'jntu',component:JntuComponent},
    {path:'about',component:AboutComponent},
     {path:'apply',component:ApplyComponent},
     {path:'forgot',component:ForgotComponent},
     {path:'table',component:TableComponent}
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
