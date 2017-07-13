class Order {
    constructor(
        public endereco: string,
        public numero: number,
        public complemento: string,
        public opcaoPagamentoSelecionada: string,
        public orderItems: OrderItem[] = []
    ) { }
}

class OrderItem {
    constructor(public qunatity: number, public menuId: string) { }
}

export { Order, OrderItem }
