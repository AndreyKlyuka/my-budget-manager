import { NavigationItem } from './interfaces/navigation-item.interface';
import { SidebarRouts } from './enums/sidebar-routs.enum';
import { capitalizeFirstLetter } from './helpers/capitalize-first-letter.helper';

export const NAVIGATION_ITEMS: NavigationItem[] = [
    {
        name: capitalizeFirstLetter(SidebarRouts.DASHBOARD),
        route: `/${SidebarRouts.DASHBOARD}`,
        iconName: SidebarRouts.DASHBOARD,
    },
    {
        name: capitalizeFirstLetter(SidebarRouts.SETTING),
        route: `/${SidebarRouts.SETTING}`,
        iconName: SidebarRouts.SETTING,
    },
];

export const LOGOUT_ITEM: NavigationItem = {
    name: capitalizeFirstLetter(SidebarRouts.LOGOUT),
    route: `/${SidebarRouts.LOGOUT}`,
    iconName: SidebarRouts.LOGOUT,
};
