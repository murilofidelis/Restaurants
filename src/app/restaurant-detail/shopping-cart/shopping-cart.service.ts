import { MenuItem } from './../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';
export class ShoppingCartService {

    items: CartItem[] =[]

    limpar() {
        this.items = []
        }

    adicionarItens(item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        if (foundItem) {
            foundItem.quantidade = foundItem.quantidade + 1
        } else {
            this.items.push(new CartItem(item))
        }
    }

    removerItem(item: CartItem) {
        this.items.splice(this.items.indexOf(item), 1)
    }

    total(): number {
        return this.items
        .map(item => item.calcularValor())
        .reduce((prev, value) => prev + value, 0)
    }

}