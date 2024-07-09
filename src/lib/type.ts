
type IProduct = {
    _id: string,
    name: string,
    description: string,
    price: number,
    images: string[],
    shipping: string,
    quantity: number,
    category: string,
}

type IShipping = {
    name: string,
    state: string,
    city: string,
    phonenumber: number,
    altphonenumber: number,
    address: string,
    altaddress: string,
    userid: string,
    _id: string
}

type IOrder = {
    userid: string,
    status: string,
    total_price: number,
    refcode: string
}

type INotification = {
    id: string,
    userid: string,
    header: string,
    info: string
}

export type { IProduct, IShipping, IOrder, INotification };