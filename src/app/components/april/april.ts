import { Component } from '@angular/core';
import { Buttonright } from "../buttonright/buttonright";
import { Button } from "../button/buttonleft";

@Component({
  selector: 'app-april',
  imports: [Buttonright, Button],
  template: `
  <div class="flex justify-center pr-4 mt-[-2rem]">
  <img src="assets/april1.png" alt="April 2025" class="w-3/4 h-auto rounded-md shadow-sm" />
</div>
  `,
  styles: ``
})
export class April {

}
