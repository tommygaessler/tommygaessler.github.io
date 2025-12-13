import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Press } from './press/press';
import { Posts } from './posts/posts';
import { Projects } from './projects/projects';
import { Talks } from './talks/talks';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'press', component: Press },
    { path: 'posts', component: Posts },
    { path: 'projects', component: Projects },
    { path: 'talks', component: Talks },
    { path: '**', redirectTo: '' }
];