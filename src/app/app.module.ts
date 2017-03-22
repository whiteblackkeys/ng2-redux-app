import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {StoreModule} from "@ngrx/store"; 
import { NewOperationComponent } from './new-operation.component';
import { OperationsListComponent } from './operations-list.component';
import { operationsReducer } from "app/common/operations";

@NgModule({
  declarations: [
    AppComponent,
    NewOperationComponent,
    OperationsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ operations: operationsReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
