export interface NavigationItem {
    name: string;
    iconName: string;
    route: string;
    badge?: Badge;
}

interface Badge {
    name: string;
    count?: number;
    iconName?: string;
}
