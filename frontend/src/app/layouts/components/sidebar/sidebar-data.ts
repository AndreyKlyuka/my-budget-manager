import { NavigationItem } from './interfaces/navigation-item.interface';
import { SidebarRouts } from './enums/sidebar-routs.enum';
import { CapitalizeFirstLetter } from './helpers/capitalize-first-letter.helper';

export const SIDEBAR_NAVIGATION_DATA: NavigationItem[] = [
    // {
    //     name: CapitalizeFirstLetter(SidebarRouts.DASHBOARD),
    //     route: `/${SidebarRouts.DASHBOARD}`,
    //     iconName: SidebarRouts.DASHBOARD,
    // },
    {
        name: CapitalizeFirstLetter(SidebarRouts.SETTING),
        route: `/${SidebarRouts.SETTING}`,
        iconName: SidebarRouts.SETTING,
    },
];
