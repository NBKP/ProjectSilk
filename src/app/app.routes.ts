import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Catalogue } from './catalogue/catalogue';
import { Models } from './models/models';



export const routes: Routes = [
{ path: '', redirectTo: 'catalogue', pathMatch: 'full' },
{ path: 'catalogue', component: Catalogue },
{ path: 'models/:id', component: Models }
];


@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}