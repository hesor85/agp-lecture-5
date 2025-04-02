import { Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { FlexComponent } from './flex/flex.component';
import { TailwindComponent } from './tailwind/tailwind.component';

export const routes: Routes = [
    { path: 'grid', component: GridComponent},
    { path: 'flex', component: FlexComponent},
    { path: 'tailwind', component: TailwindComponent},
];
