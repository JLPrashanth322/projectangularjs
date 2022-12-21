import { Component, NgModule, ViewChildren } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeComponent } from './code/code.component';

const routes: Routes = [{ path: 'report', loadChildren: () => import('./report/report.module').then(m => m.ReportModule) }, { path: 'report', loadChildren: () => import('./report/report.module').then(m => m.ReportModule) }];

// {path : '' ; redirectTo : '/app' ; pathmatch:'full'}
// {path : " code"; loadchild : '/code/code.module#codeModule'}
// {path : "product" ; CodeComponent ; CodeComponent}


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
