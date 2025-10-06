import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';  // ✅ add this for routerLink

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule], // ✅ include RouterModule so routerLink works
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // ✅ fixed typo (styleUrls instead of styleUrl)
})
export class App {
  protected readonly title = signal('my-angular-app');
}
