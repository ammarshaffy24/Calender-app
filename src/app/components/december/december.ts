import { Component } from '@angular/core';
import { Button } from "../button/buttonleft";
import { Buttonright } from "../buttonright/buttonright";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-december',
  imports: [Button, Buttonright, RouterOutlet],
  template: `
  
<div class="flex justify-center pr-4 mt-[-2rem]">
  <img src="assets/december.png" alt="December 2025" class="w-3/4 h-auto rounded-md shadow-sm" />
</div>


<router-outlet/>
  `,
  styles: ``
})
export class December {

}
