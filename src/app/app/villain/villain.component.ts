import {Component, Input, OnInit} from '@angular/core';
import {Villain} from '../entities/villain';
import {ActivatedRoute} from '@angular/router';
import {VillainService} from '../services/villain.service';

@Component({
  selector: 'app-villain',
  templateUrl: './villain.component.html',
  styleUrls: ['./villain.component.css']
})
export class VillainComponent implements OnInit {
  @Input() villain: Villain;

  constructor(private route: ActivatedRoute, private villainService: VillainService) {

  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.villainService.getVillainById(id).subscribe(x => this.villain = x);
  }

}
