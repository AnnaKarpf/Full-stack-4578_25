import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { DrinkTabComponent } from './drink-tab/drink-tab.component';
import { DrinkCounterService } from './shared/services/drink-counter.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    DrinkTabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DrinkCounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
