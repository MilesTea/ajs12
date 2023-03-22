import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }
    
    priceAll(): number {
        return this._items.reduce<number>((sum, current) => sum + current.price, 0)
    }

    priceAllWithDiscount(discount: number): number {
        return this.priceAll() * ((100 - discount)/100)
    }

    deleteItem(id: number): void {
        this._items.forEach((item, index) => {if(item.id == id) {this._items.splice(index, 1);return}})
    }
}