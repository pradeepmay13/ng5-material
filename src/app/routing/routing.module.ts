import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from '../tabs/tabs.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { NewComponentComponent } from '../new-component/new-component.component';


const routes:Routes=[
	{ path: '', redirectTo: 'tabs',pathMatch: 'full' },
	{ path: 'tabs', component: TabsComponent },
  { path: 'NewComponent', component: NewComponentComponent },
	{ path: '**', redirectTo: '/' },
	{ path:'**', component: PagenotfoundComponent }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
  	RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
export const routingComponent=[ 
	TabsComponent,
  NewComponentComponent, 
	PagenotfoundComponent
]
