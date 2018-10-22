import {Component, OnInit} from '@angular/core';
import {Villain} from '../entities/villain';
import {listVillain} from '../data/villains';
import {VillainService} from '../services/villain.service';

@Component({
  selector: 'app-list-villain',
  templateUrl: './list-villain.component.html',
  styleUrls: ['./list-villain.component.css']
})
export class ListVillainComponent implements OnInit {

  listVillain: Villain[];
  selectedVillain: Villain;

  constructor(private villainService: VillainService) {
  }

  onSelect(id: number): void {
    this.villainService.getVillainById(id).subscribe(x => this.selectedVillain = x);
  }


  ngOnInit() {
    this.villainService.getListVillain().subscribe(
      x => {
        this.listVillain = x;
      },
      error1 => {
        console.log(error1);
      }
    );

  }

}
