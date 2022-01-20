import { ItemService } from 'src/app/services/item.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss'],
})
export class ItemFormComponent implements OnInit {
  @Input() item: Item = {
    id: 0,
    image: '',
    title: '',
    seller: '',
    price: 0,
    description: '',
  };
  @Input() mode: string = 'create';
  @Output() toggleEditItem = new EventEmitter<number>();
  itemImage: string = 'assets/img/favicon.png';

  itemForm = this.formBuilder.group({
    id: '',
    image: '',
    title: '',
    seller: '',
    price: '',
    description: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.setFormValues();
  }

  setFormValues() {
    this.itemForm.patchValue({
      id: this.item.id,
      image: this.item.image,
      title: this.item.title,
      seller: this.item.seller,
      price: this.item.price,
      description: this.item.description,
    });
  }

  onSubmit(): void {
    if (this.mode == 'edit') {
      this.itemService.updateItem(this.itemForm.value);
      this.toggleEditItem.emit(this.item.id);
    } else {
      this.itemService.createItem(this.itemForm.value);
    }
    this.itemForm.reset();
  }

  cancelEdit() {
    this.toggleEditItem.emit(this.item.id);
  }
}
