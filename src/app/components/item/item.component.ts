import { ItemService } from 'src/app/services/item.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item: any;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {}

  updateSold(id: number) {
    this.itemService.updateSold(id);
  }
}
