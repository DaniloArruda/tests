import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @ViewChild('progressBar', { static: false }) progressBar: ElementRef;

  @Input() block: string;
  @Input() min = 0;
  @Input() max = 100;
  @Input() value: number;
  @Input() mode = ProgressBarMode.Percentage;
  @Input() type = ProgressBarType.Info;

  progressWidth: number;

  ngOnInit(): void {
    setTimeout(() => {
      this.progressWidth = (this.percent / 100) * this.progressBar.nativeElement.clientWidth;
    });
  }

  get percent() {
    return (this.value / this.max) * 100;
  }

  get isPercentageMode() {
    return this.mode ==  ProgressBarMode.Percentage;
  }

  get isQuantitativeMode() {
    return this.mode ==  ProgressBarMode.Quantitative;
  }
}

enum ProgressBarMode {
  Quantitative = "quantitative",
  Percentage = "percentage"
}

enum ProgressBarType {
  Success = "success",
  Info = "info",
  Warning = "warning",
  Unsafe = "unsafe",
}
