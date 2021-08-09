import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() type: string = 'text';
  @Input() field!: string;
  @Input() label!: string;
  @Input() form!: FormGroup;
  @Input() placeholder!: string;
  @Input() classList!: string;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log(this.form.get(this.field))
    this.ref.detectChanges();
    console.log(this.form.get(this.field))

  }

}
