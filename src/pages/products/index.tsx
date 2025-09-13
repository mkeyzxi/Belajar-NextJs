// import Head from "next/head";
// import { useRouter } from "next/router";
// import { useState, useEffect } from "react";


// const Products = () => {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [isLogin, setIsLogin] = useState(false);
//   const { push } = useRouter();
//   useEffect(() => {
//     if (!isLogin) {
//       push("/auth/login");
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])
//   return 
//    (<>
//    <Head> 
//     <title>Products</title>

//      </Head>
//   <h1>ini halaman products</h1>;
//    </>)
// }

// export default Products;



// modified fetch api in api/product.ts
// import Head from "next/head";
// gunain fecth biasa
// import { useState, useEffect } from "react";
// import ProductView from "../views/Product/Main";

// type ProductTypes = { id: string, name: string, price: number, category: string, image: string };

// const Products = () => {
//   const [products, setProducts] = useState<ProductTypes[]>([]);

//   useEffect(() => {
//     const fecthProducts = async () => {
//       try {
//         const response = await fetch("/api/product");
//         const { data } = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fecthProducts();


//   }, [])
//   return (
//     <ProductView products={products} />
//   );

// }

// export default Products;

// gunain swr
import ProductView from "../views/Product/Main";
import useSWR from 'swr';
import fetcher from "../../lib/swr/fetcher";

const Products = () => {
  const { data, error, isLoading } = useSWR("/api/product", fetcher);

  return (
    <> 
    {error && <div>Failed to load</div>}

    <ProductView products={isLoading ? [] : data.data } /></>
  );
};

export default Products;
