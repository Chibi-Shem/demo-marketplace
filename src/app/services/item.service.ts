import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor() {}

  ITEMS = [
    {
      id: 1,
      image: './assets/img/favicon.png',
      title: 'NFT Title 1',
      seller: 'SELLER',
      price: 123,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget accumsan velit, dapibus bibendum purus. Quisque dapibus consectetur aliquet. Mauris finibus sapien risus, eget interdum enim commodo in. Vestibulum volutpat pretium massa.',
    },
    {
      id: 2,
      image: './assets/img/favicon.png',
      title: 'NFT Title 2',
      seller: 'SELLER',
      price: 123,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget accumsan velit, dapibus bibendum purus. Quisque dapibus consectetur aliquet. Mauris finibus sapien risus, eget interdum enim commodo in. Vestibulum volutpat pretium massa.',
    },
    {
      id: 3,
      image: './assets/img/favicon.png',
      title: 'NFT Title 3',
      seller: 'SELLER',
      price: 123,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget accumsan velit, dapibus bibendum purus. Quisque dapibus consectetur aliquet. Mauris finibus sapien risus, eget interdum enim commodo in. Vestibulum volutpat pretium massa.',
    },
    {
      id: 4,
      image: './assets/img/favicon.png',
      title: 'NFT Title 4',
      seller: 'SELLER',
      price: 123,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget accumsan velit, dapibus bibendum purus. Quisque dapibus consectetur aliquet. Mauris finibus sapien risus, eget interdum enim commodo in. Vestibulum volutpat pretium massa.',
    },
    {
      id: 5,
      image: './assets/img/favicon.png',
      title: 'NFT Title 5',
      seller: 'SELLER',
      price: 123,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget accumsan velit, dapibus bibendum purus. Quisque dapibus consectetur aliquet. Mauris finibus sapien risus, eget interdum enim commodo in. Vestibulum volutpat pretium massa.',
    },
    {
      id: 6,
      image: './assets/img/favicon.png',
      title: 'NFT Title 6',
      seller: 'SELLER',
      price: 123,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget accumsan velit, dapibus bibendum purus. Quisque dapibus consectetur aliquet. Mauris finibus sapien risus, eget interdum enim commodo in. Vestibulum volutpat pretium massa.',
    },
  ];

  getItems(): Item[] {
    return this.ITEMS;
  }

  getItem(id: number): Item {
    return this.ITEMS[id - 1];
  }

  createItem(item: any): void {
    item.id = this.ITEMS.length + 1;
    item.image = './assets/img/favicon.png';
    this.ITEMS.push(item);
  }

  updateItem(item: any): void {
    this.ITEMS[item.id - 1] = item;
  }

  updateSold(id: number): void {
    this.ITEMS[id - 1].price = 0;
  }
}
