import { Component } from '@angular/core';

@Component({
  selector: 'app-class-style-binding',
  templateUrl: './class-style-binding.component.html',
  styleUrl: './class-style-binding.component.css'
})
export class ClassStyleBindingComponent {
  isDanger = false;
  isWarning = false;
  classes = "box red-border yellow-bg";
}
