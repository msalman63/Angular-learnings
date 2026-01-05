import { Routes } from '@angular/router';
import { Welcome } from './welcome/welcome';
import { Counter } from './counter/counter';

export const routes: Routes = [
    { path : '' , component : Welcome },
    { path : 'counter' , component : Counter}
];
