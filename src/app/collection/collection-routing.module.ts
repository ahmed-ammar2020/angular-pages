import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { CompaniesComponent } from './companies/companies.component';
import { LinksComponent } from './links/links.component';
import { BioComponent } from './bio/bio.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionHomeComponent,
    children: [
      {
        path: '',
        component: BioComponent,
      },
      {
        path: 'links',
        component: LinksComponent,
      },
      {
        path: 'companies',
        component: CompaniesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionRoutingModule {}
