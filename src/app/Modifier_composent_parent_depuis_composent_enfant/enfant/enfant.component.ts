import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {


  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Input()
  infos: string;

  constructor() { }

  ngOnInit() {
  }

  onEdit(){
    this.infos = "touché";
    this.edit.emit(this.infos);
  }

}
