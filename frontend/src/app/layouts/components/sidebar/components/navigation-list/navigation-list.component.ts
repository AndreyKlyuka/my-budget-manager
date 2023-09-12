import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NavigationItem } from '../../interfaces/navigation-item.interface';

@Component({
    selector: 'app-navigation-list',
    templateUrl: './navigation-list.component.html',
    styleUrls: ['./navigation-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationListComponent {
    @Input() public items: NavigationItem[] = [];
}
