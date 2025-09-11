import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Products = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return 
   (<>
   <Head> 
    <title>Products</title>

     </Head>
  <h1>ini halaman products</h1>;
   </>)
}

export default Products;