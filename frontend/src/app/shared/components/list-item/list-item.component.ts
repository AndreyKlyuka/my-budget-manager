import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ListItem } from '@shared/interfaces/list-item.interface';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {
    @Input() item!: ListItem;
}
