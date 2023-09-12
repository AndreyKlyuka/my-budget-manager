import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NavigationItem } from '../../interfaces/navigation-item.interface';

@Component({
    selector: 'app-navigation-item',
    templateUrl: './navigation-item.component.html',
    styleUrls: ['./navigation-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationItemComponent {
    @Input() item!: NavigationItem;
}
