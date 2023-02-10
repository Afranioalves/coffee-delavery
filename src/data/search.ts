import Coffee from "./_products";

export function search (id: number): any {
  return Coffee.find(product => (
    product.id === id
  ))
}