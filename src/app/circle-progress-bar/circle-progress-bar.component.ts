import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle-progress-bar',
  templateUrl: './circle-progress-bar.component.html',
  styleUrls: ['./circle-progress-bar.component.scss']
})
export class CircleProgressBarComponent implements OnInit {
  @Input() percent: any = 22;
  circleProgress: any;
  @Input() width!: number;
  @Input() height!: number;
  @Input() lowColor!: string;
  @Input() middleColor!: string;
  @Input() highColor!: string;
  @Input() fontSize!: number;
  color!: string;
  ngOnInit(): void {
    this.circleProgress = 360 / 100 * this.percent;
    if (this.percent < 33.3) {
      this.color = this.lowColor;
    } else if (this.percent < 66.7) {
      this.color = this.middleColor;
    } else {
      this.color = this.highColor;
    }
  }
}
