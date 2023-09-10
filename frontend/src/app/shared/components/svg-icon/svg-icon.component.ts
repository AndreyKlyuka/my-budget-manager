import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'app-svg-icon',
    templateUrl: './svg-icon.component.html',
    styleUrls: ['./svg-icon.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconComponent {
    @Input() name!: string;
    @Input() size!: string;
    @Input() color!: string;
    @Input() width?: string;
    @Input() height?: string;

    public getPath(): string {
        return 'assets/images/sprite.svg#' + this.name;
    }
}
