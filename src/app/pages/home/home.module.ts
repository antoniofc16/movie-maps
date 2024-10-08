import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from '../../commons/layouts/main-layout/main-layout.component';
import { LoaderService } from '../../core/services/commons/api/loader.service';

const routes: Routes = [
	{
		path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./movies/movies.component').then((m) => m.MoviesComponent)
      },
      {
        path: 'movies',
        loadComponent: () => import('./movies/movies.component').then((m) => m.MoviesComponent)
      }
    ]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MainLayoutComponent
  ],
	exports: [],
	declarations: [],
	providers: []
})
export class HomeModule { }
