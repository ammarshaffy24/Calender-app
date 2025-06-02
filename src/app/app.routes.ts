import { Routes } from '@angular/router';
import { App } from './app';
import { Feb } from './components/feb/feb';
import { March } from './components/march/march';
import { April } from './components/april/april';
import { May } from './components/may/may';
import { June } from './components/june/june';
import { July } from './components/july/july';
import { August } from './components/august/august';
import { September } from './components/september/september';
import { October } from './components/october/october';
import { November } from './components/november/november';
import { December } from './components/december/december';
import { Jan } from './components/jan/jan';

export const routes: Routes = [{
    path:'January',
    component: Jan
},
{   path: '',
    pathMatch: 'full',
    component: Jan

},
{
    path:'Febuary',
    component: Feb
},
{
   path:'March',
   
    component: March 
},
{
    path:'April',
    
    component: April
},
{
    path:'May',
    
    component: May
},
{
    path:'June',
    
    component: June
},
{
    path:'July',
    
    component: July
},
{
    path:'August',
    
    component: August
},
{
    path:'September',
    
    component: September
},
{
    path:'October',
    
    component: October
},
{
    path:'November',
    
    component: November
},
{
    path:'December',
    
    component: December
}

];


