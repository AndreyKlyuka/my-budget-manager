import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationItem } from './interfaces/navigation-item.interface';
import { SIDEBAR_NAVIGATION_DATA } from './sidebar-data';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
    public navigationItems: NavigationItem[] = SIDEBAR_NAVIGATION_DATA;
}
