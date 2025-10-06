import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.html',
  styleUrls: ['./info.css']
})

export class Info {
  name: string = 'Mohamed Elguendy';
  age: number = 22; 
  location: string = 'Egypt';
  hobbies: string[] = ['Guitar ', 'Gym ', 'MMA ', 'Coding '];

  constructor() {}
}
