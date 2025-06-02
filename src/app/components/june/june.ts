import { Component } from '@angular/core';
import { Button } from "../button/buttonleft";
import { Buttonright } from "../buttonright/buttonright";

@Component({
  selector: 'app-june',
  imports: [Button, Buttonright],
  template: `
  <div class="flex justify-center pr-4 mt-[-2rem]">
  <img src="assets/june.png" alt="June 2025" class="w-3/4 h-auto rounded-md shadow-sm" />
</div>
  `,
  styles: ``
})
export class June {

}
