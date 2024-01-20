import { useEffect, useState } from "react";
import { getAllProduct } from "../../api/getAllProduct";
import { addProduct } from "../../api/addProduct";

export type Product = {
  id: number,
  name: string,
  quantity: number,
  price: number,
}

export type addProductRequest = {
  name: string,
  quantity: number,
  price: number,
}
function Product() {

  const [allProduc, setAllProduct] = useState<Product[]>([]);
  const [name, setName] = useState<string>()
  const [price, setPrice] = useState<number>()
  const [quantity, setQuantity] = useState<number>()

  const getAllProduct = async () => {
    try {
      const products= await getAllProduct();
      // setAllProduct(products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addProduct = async () =>{
    const newProduct = {
      name: name,
      price: price,
      quantity: quantity
    }
    await addProduct(newProduct)
  }


  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div>
      {allProduc.map((product) => (
        <div key={product.id}>
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.quantity}</div>
          <div>{product.price}</div>
        </div>
      ))}
      <form onSubmit={addProduct}>
        <span>Add product</span>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
        <input type="text" value={price} onChange={(e)=> setPrice(e.target.value)}/>
        <input type="text" value={quantity} onChange={(e)=> setQuantity(e.target.value)}/>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Product;
