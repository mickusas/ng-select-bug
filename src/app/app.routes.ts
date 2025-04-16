import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./selection/selection.component').then(
        (m) => m.SelectionComponent
      ),
  },
];
