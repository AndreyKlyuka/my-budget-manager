import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { ListItem } from '@shared/interfaces/list-item.interface';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent<T> implements OnChanges {
    @Input() public data!: T[];
    @Input() public dataHandler!: (data: T) => ListItem;

    public items!: ListItem[];

    public ngOnChanges(): void {
        this.initPrepareItems(this.data);
    }

    private initPrepareItems(data: T[]): void {
        this.items = data.map(dataElement => this.dataHandler(dataElement));
    }
}
