import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionHomeComponent } from './collection-home/collection-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { BioComponent } from './bio/bio.component';
import { CompaniesComponent } from './companies/companies.component';
import { LinksComponent } from './links/links.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [CollectionHomeComponent, TableComponent, BioComponent, CompaniesComponent, LinksComponent, TabsComponent],
  imports: [CommonModule, CollectionRoutingModule, SharedModule],
  exports: [],
})
export class CollectionModule {}
