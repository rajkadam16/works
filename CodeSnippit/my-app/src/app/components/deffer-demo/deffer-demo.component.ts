import { Component } from '@angular/core';
import { HeavyCompoComponent } from '../heavy-compo/heavy-compo.component';

@Component({
  selector: 'app-deffer-demo',
  standalone: true,
  imports: [HeavyCompoComponent],
  templateUrl: './deffer-demo.component.html',
  styleUrl: './deffer-demo.component.css'
})
export class DefferDemoComponent {

}
