export const search =  (id: number, data:any): any =>{
    return data.find((product:any) => product.id === id)
  }