import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
    LOGO_ITEM,
    LOGOUT_ITEM,
    NAVIGATION_ITEMS,
} from '@layouts/components/sidebar/helpers/sidebar-data';
import { NavigationItem } from '@layouts/components/sidebar/interfaces/navigation-item.interface';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
    public navigationItems: NavigationItem[] = [LOGO_ITEM, ...NAVIGATION_ITEMS, LOGOUT_ITEM];
}
