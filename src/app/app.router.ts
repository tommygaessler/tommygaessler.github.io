import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { PressComponent } from './press/press.component';
import { TalksComponent } from './talks/talks.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'press',
    component: PressComponent,
  },
  {
    path: 'talks',
    component: TalksComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
