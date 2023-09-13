import { ListItem } from '@shared/interfaces/list-item.interface';

export interface NavigationItem extends ListItem {
    route: string;
    badge?: Badge;
}
interface Badge {
    name: string;
    count?: number;
    iconName?: string;
}
