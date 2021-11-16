import { useState, useEffect } from "react";

const Store = () => {
  const [products,setProducts]=useState([]);
  useEffect(() => {
    fetchCosmetics();
  }, []);
  const fetchCosmetics = async () => {
    const data = await fetch("https://fortnite-api.com/v2/cosmetics/br/");
    const resp = await data.json();
    setProducts(resp.data);
    console.log(resp.data)
  };
  return (
    <div>
    {products.map((product)=>{
      return(
        <div>
          <img src={product.images.icon} />
        <h1>{product.name}</h1>
        </div>
      )
    })}
    </div>
  );
  }
export default Store;
