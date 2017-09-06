import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { StartChattingComponent } from './start-chatting/start-chatting.component';
import { GalleryComponent } from './gallery/gallery.component';



export const routes: Routes = [
    { path: 'About' , component: AboutComponent},
    {path: 'Gallery', component: GalleryComponent},
    {path: 'StartChatting', component: StartChattingComponent},
    { path: '' , component: AboutComponent}
    
];
