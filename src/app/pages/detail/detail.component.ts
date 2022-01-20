import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  item: any;
  isEditMode: boolean = false;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {}

  toggleEditItem(id: number) {
    this.isEditMode = !this.isEditMode;
    this.item = this.itemService.getItem(id);
  }
}
