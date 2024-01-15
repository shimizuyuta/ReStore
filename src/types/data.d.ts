//商品のカテゴリ
export const Category = 'shoes' | 'clothes' | 'book'
//商品の状態
export const Condition = 'new' | 'used'
//商品
export const Product = {
  id: number,
  category: Category,
  title: string,
  description: string,
  imageUrl: string,
  blurDataUrl: string,
  price: number,
  condition: Condition,
  owner: User,
}
//ユーザー
export const User = {
  id: number,
  username: string,
  displayName: string,
  email: string,
  profileImage: string,
  description: string,
}
//API Context
export const ApiContext = {
  apiRootUrl: string,
}
