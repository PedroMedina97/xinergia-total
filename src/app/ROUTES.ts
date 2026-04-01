import { Routes } from "@angular/router";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Contact } from "./pages/contact/contact";
import { Plans } from "./pages/plans/plans";

export const ROUTES: Routes = [
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: 'plans', component: Plans },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
]; 