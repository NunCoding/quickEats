export interface CartItem {
    id: string
    restaurantId: number
    restaurantName: string
    name: string
    price: number
    quantity: number
    image: string
    description?: string
    customizations?: string[]
  }
  
  export interface Cart {
    items: CartItem[]
    total: number
    itemCount: number
    restaurantId?: number
    restaurantName?: string
  }
  
  export interface MenuItem {
    id: string
    name: string
    description: string
    price: number
    image: string
    category: string
    popular?: boolean
    vegetarian?: boolean
    spicy?: boolean
  }
  