import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { ListComponent } from '@shared/components/list/list.component';
import { ListItemComponent } from '@shared/components/list-item/list-item.component';

@NgModule({
    declarations: [SvgIconComponent, ListComponent, ListItemComponent],
    imports: [CommonModule],
    exports: [SvgIconComponent, ListComponent, ListItemComponent],
})
export class SharedModule {}
