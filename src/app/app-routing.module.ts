import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cars1componentComponent } from './components/cars1component/cars1component.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/cars1',
    pathMatch: 'full'
  },
  {
    path: 'cars1',
    component: Cars1componentComponent
  }
    ];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
