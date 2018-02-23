import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
	MatButtonModule, 
	MatToolbarModule, 
	MatInputModule, 
	MatProgressSpinnerModule, 
	MatCardModule, 
	MatIconModule, 
	MatMenuModule,
	MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [
  	MatButtonModule, 
  	MatToolbarModule, 
  	MatInputModule, 
  	MatProgressSpinnerModule, 
  	MatCardModule, 
  	MatIconModule, 
  	MatMenuModule, 
  	MatSidenavModule
  ],
  exports: [
  	MatButtonModule, 
  	MatToolbarModule, 
  	MatInputModule, 
  	MatProgressSpinnerModule, 
  	MatCardModule, 
  	MatIconModule, 
  	MatMenuModule, 
  	MatSidenavModule
  ],
})
export class MaterialModule { }