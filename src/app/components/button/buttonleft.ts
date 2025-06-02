import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button class="text-lg px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 shadow-sm hover:shadow transition duration-200">
      {{ click() }}
      
      <button>
  `,
  styles: ``
})
export class Button {
  click=input('');

}
