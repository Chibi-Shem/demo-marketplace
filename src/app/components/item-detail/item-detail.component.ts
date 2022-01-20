import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
  item: any;
  @Output() toggleEditItem = new EventEmitter<number>();

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getItem(Number(this.route.snapshot.paramMap.get('id')));
  }

  getItem(id: number) {
    this.item = this.itemService.getItem(id);
  }

  editItem() {
    this.toggleEditItem.emit(this.item.id);
  }
}
