import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule} from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { RoutingModule } from './routing/routing.module';
import { routingComponent } from './routing/routing.module';


import { AppComponent } from './app.component';
import { DataServiceService } from './services/data-service.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponent
  ],
  imports: [
    BrowserModule,
	  BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
