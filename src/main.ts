import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HelloWorldComponent } from './app/hello-world/hello-world.component';
import { ProfileComponent } from './app/profile/profile.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'hello-world', component: HelloWorldComponent },
      { path: 'profile', component: ProfileComponent },
    ]),
  ],
}).catch((err) => console.error(err));
