import { Component } from '@angular/core';
import { Button } from "../button/buttonleft";
import { Buttonright } from "../buttonright/buttonright";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-feb',
  imports: [Button, Buttonright, RouterOutlet],
  template: `
  <div class="flex justify-center pr-4 mt-[-2rem]">
  <img src="assets/feb.png" alt="Fenuary 2025" class="w-3/4 h-auto rounded-md shadow-sm" />
</div>

  
  `,
  styles: ``
})
export class Feb {

}
