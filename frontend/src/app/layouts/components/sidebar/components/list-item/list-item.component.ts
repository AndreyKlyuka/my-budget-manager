import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NavigationItem } from '../../interfaces/navigation-item.interface';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {
    @Input() item!: NavigationItem;
}
