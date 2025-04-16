import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/add-post', pathMatch: 'full' },
  { path: 'add-post', component: AddPostComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];
