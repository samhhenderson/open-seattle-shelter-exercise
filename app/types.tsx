export interface Donation {
  name: string,
  type: 'money' | 'clothing' | 'furniture',
  quantity: number,
  date: string
}

export interface Distribution {
  type: string,
  quantity: number,
  date: string
}

export interface Inventory {
  clothing: number,
  furniture: number,
  money: number
}