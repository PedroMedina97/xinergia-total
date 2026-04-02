import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { RouterModule } from '@angular/router';
import { ROUTES } from './ROUTES';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
import { Faq } from './pages/faq/faq';
import { Plans } from './pages/plans/plans';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Dental } from './shared/dental/dental';
import { Specialties } from './pages/specialties/specialties';
import { Medical } from './shared/medical/medical';

@NgModule({
  declarations: [App, Navbar, Footer, Faq, Plans, About, Contact, Dental, Specialties, Medical],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
  ],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
