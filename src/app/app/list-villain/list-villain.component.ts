import { Component, OnInit } from '@angular/core';
import {Villain} from '../entities/villain';
import {listVillain} from '../data/villains';

@Component({
  selector: 'app-list-villain',
  templateUrl: './list-villain.component.html',
  styleUrls: ['./list-villain.component.css']
})
export class ListVillainComponent implements OnInit {

  listVillain: Villain[];
  selectedVillain: Villain;
  constructor() {
    this.listVillain = listVillain;
  }

  onSelect(villain: Villain): void{
    this.selectedVillain = villain;
  }


  ngOnInit() {
  }

}
