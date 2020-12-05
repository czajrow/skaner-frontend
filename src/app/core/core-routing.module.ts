import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('@/pages/home-page/home-page.module').then(m => m.HomePageModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('@/pages/settings-page/settings-page.module').then(m => m.SettingsPageModule),
  },
  {
    path: 'scanning',
    loadChildren: () => import('@/pages/scanning-page/scanning-page.module').then(m => m.ScanningPageModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
