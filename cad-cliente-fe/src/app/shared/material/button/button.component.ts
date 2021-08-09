import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() title!: string
  @Input() icon!: string
  @Input() classList!: string
  @Input() color!: string
  @Input() type!: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.classList)
  }

}
