import { Component, OnInit } from '@angular/core';
import { MonPipe } from '../monPipe.pipe';

@Component({
  selector: 'app-mon-component',
  templateUrl: './mon-component.component.html',
  styleUrls: ['./mon-component.component.css'],
  providers: [MonPipe]
})
export class MonComponentComponent implements OnInit {

  public maTaille;

  constructor(private monPipe: MonPipe) { }

  ngOnInit() {

    this.maTaille = this.monPipe.transform(15000,"GO");

  }

}
