import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HomeComponent } from './features/home/home.component';
import { SpellCheckComponent } from './features/spell-check/spell-check.component';
import { SummarizationComponent } from './features/summarization/summarization.component';
import { KeywordsComponent } from './features/keywords/keywords.component';
import { CleanTextComponent } from './features/clean-text/clean-text.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './shared/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    SpellCheckComponent,
    SummarizationComponent,
    KeywordsComponent,
    CleanTextComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
