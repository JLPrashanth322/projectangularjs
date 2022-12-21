import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiService } from './ui.service';
import { CodeComponent } from './code/code.component';
 import{HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CodeComponent,
    
  
    // ReportComponent
    
    // codeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
    
  
  
  ],
  providers: [UiService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
export class codeModule { }

