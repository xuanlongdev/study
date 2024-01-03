import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  name = 'Angular';

  user = {
    name: 'Long',
    age: 14,
  }

  handler() {
    console.log(1);
  }
}
