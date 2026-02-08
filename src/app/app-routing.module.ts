import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { SpellCheckComponent } from './features/spell-check/spell-check.component';
import { SummarizationComponent } from './features/summarization/summarization.component';
import { KeywordsComponent } from './features/keywords/keywords.component';
import { CleanTextComponent } from './features/clean-text/clean-text.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'spell-check', component: SpellCheckComponent },
  { path: 'summarization', component: SummarizationComponent },
  { path: 'keywords', component: KeywordsComponent },
  { path: 'clean-text', component: CleanTextComponent }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
