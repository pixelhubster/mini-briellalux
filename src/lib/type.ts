
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

export type {IProduct, IShipping};