import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/component/home/home.component';
import { AboutComponent } from 'src/app/component/about/about.component';
import { ResumeComponent } from 'src/app/component/resume/resume.component';
import { PortfolioComponent } from 'src/app/component/portfolio/portfolio.component';
import { ContactComponent } from 'src/app/component/contact/contact.component';


const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"resume",
    component:ResumeComponent
  },
  {
    path:"portfolio",
    component:PortfolioComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
