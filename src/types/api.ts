export interface IProductPrice {
  amount: number
  currency: string
}

export interface IProduct {
  id: number
  teacher_id: number
  subject_id: number
  class_type_id: number
  description: string
  price: IProductPrice
}

export interface ISubject {
  id: number
  name: string
}

export interface ITeacher {
  id: number
  name: string
}

export interface IClassType {
  id: number
  name: string
  color: string
}
