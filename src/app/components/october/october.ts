import { Component } from '@angular/core';
import { Buttonright } from "../buttonright/buttonright";
import { Button } from "../button/buttonleft";

@Component({
  selector: 'app-october',
  imports: [Buttonright, Button],
  template: `
  <div class="flex justify-center pr-4 mt-[-2rem]">
  <img src="assets/october.png" alt="October 2025" class="w-3/4 h-auto rounded-md shadow-sm" />
</div>
  `,
  styles: ``
})
export class October {

}
