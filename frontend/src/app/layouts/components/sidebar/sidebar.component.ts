import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationItem } from './interfaces/navigation-item.interface';
import { LOGOUT_ITEM, NAVIGATION_ITEMS } from './sidebar-data';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
    public navigationItems: NavigationItem[] = NAVIGATION_ITEMS;
    public logoutItem: NavigationItem = LOGOUT_ITEM;
}
