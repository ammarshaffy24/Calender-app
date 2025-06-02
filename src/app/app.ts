// app.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, // Keep only one of these for your main content
    RouterLink,   // Keep this for button navigation
  ],
  template: `
    <div class="relative min-h-screen bg-gray-100">
      <div class="flex justify-center pt-10">
        <h1 class="text-xl font-semibold text-gray-800">
          Welcome to the {{ title }}!
        </h1>
      </div>

      <div class="grid grid-cols-6 gap-2 py-4 px-2 max-w-screen-xl mx-auto">
    <button routerLink="/January" class="px-6 py-2 bg-blue-600 text-white rounded-none hover:bg-blue-700 transition w-full">January</button>
    <button routerLink="/Febuary" class="px-6 py-2 bg-blue-600 text-white rounded-none hover:bg-blue-700 transition w-full">Febuary</button>
    <button routerLink="/March" class="px-6 py-2 bg-blue-600 text-white rounded-none hover:bg-blue-700 transition w-full">March</button>
    <button routerLink="/April" class="px-6 py-2 bg-blue-600 text-white rounded-none hover:bg-blue-700 transition w-full">April</button>
    <button routerLink="/May" class="px-6 py-2 bg-blue-600 text-white rounded-none hover:bg-blue-700 transition w-full">May</button>
    <button routerLink="/June" class="px-6 py-2 bg-blue-600 text-white rounded-none hover:bg-blue-700 transition w-full">June</button>
    <button routerLink="/July" class="px-6 py-2 bg-blue-600 text-white rounded-none hover:bg-blue-700 transition w-full">July</button>
    <button routerLink="/August" class="px-6 py-2 bg-blue-600 text-white rounded-none hover:bg-blue-700 transition w-full">August</button>
    <button routerLink="/September" class="px-6 py-2 bg-blue-600 text-white rounded-none hover:bg-blue-700 transition w-full">September</button>
    <button routerLink="/October" class="px-6 py-2 bg-blue-600 text-white rounded-none hover:bg-blue-700 transition w-full">October</button>
    <button routerLink="/November" class="px-6 py-2 bg-blue-600 text-white rounded-none hover:bg-blue-700 transition w-full">November</button>
    <button routerLink="/December" class="px-6 py-2 bg-blue-600 text-white rounded-none hover:bg-blue-700 transition w-full">December</button>
</div>

        <div>
          <img src="assets/tgc.png" alt="logo" class="w-48 h-24 object-contain absolute top-0 left-0 -mt-2 ml-4" routerLink=""/>
</div>

      <div class="container mx-auto px-4 py-8 bg-white shadow-md rounded-lg mt-4">
        <router-outlet/> </div>
      
    </div>
  `,
  styles: []
})
export class App {
  protected title = 'Calendar App';
}