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
        let finalPrice: number = 0
        this._items.forEach(item => {finalPrice += item.price})
        return finalPrice
    }

    priceAllWithDiscount(discount: number): number {
        let finalPrice: number = 0
        this._items.forEach(item => {finalPrice += item.price})
        return finalPrice * ((100 - discount)/100)
    }

    deleteItem(id: number): void {
        this._items.forEach((item, index) => {if(item.id == id) {this._items.splice(index, 1);return}})
    }
}