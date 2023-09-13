import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
    declarations: [MainComponent, SidebarComponent, HeaderComponent],
    imports: [CommonModule, LayoutsRoutingModule, SharedModule],
})
export class LayoutsModule {}
