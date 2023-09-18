import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4000/remoteEntry.js',
            exposedModule: './ChartsModule'
          })
            .then(m => {
              return m.ChartsModule;
            })
      },
      {
        path: 'data',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:3000/remoteEntry.js',
            exposedModule: './DataTableModule'
          })
            .then(m => {
              return m.DataTableModule;
            })
      }
    ]
  },
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutingModule { }
