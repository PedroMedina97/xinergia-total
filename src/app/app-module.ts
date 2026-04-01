import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { RouterModule } from '@angular/router';
import { ROUTES } from './ROUTES';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
import { Faq } from './pages/faq/faq';

@NgModule({
  declarations: [App, Navbar, Footer, Faq],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(ROUTES, { useHash: true })],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
