import { Item } from './../../interfaces/item';
import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  @Input() title: string = '';
  items: Item[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.items = this.itemService.getItems();
  }
}
