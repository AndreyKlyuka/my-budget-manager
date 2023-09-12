import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '@shared/shared.module';
import { NavigationItemComponent } from './components/sidebar/components/navigation-item/navigation-item.component';
import { NavigationListComponent } from './components/sidebar/components/navigation-list/navigation-list.component';

@NgModule({
    declarations: [
        MainComponent,
        SidebarComponent,
        HeaderComponent,
        NavigationItemComponent,
        NavigationListComponent,
    ],
    imports: [CommonModule, LayoutsRoutingModule, SharedModule],
})
export class LayoutsModule {}
