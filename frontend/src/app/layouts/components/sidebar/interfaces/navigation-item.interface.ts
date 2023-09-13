export interface NavigationItem {
    name: string;
    route: string;
    iconName?: string;
    badge?: Badge;
}

interface Badge {
    name: string;
    count?: number;
    iconName?: string;
}
