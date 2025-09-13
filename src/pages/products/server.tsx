import { ProductTypes } from "../../types/product.types";

import ProductView from "../views/Product/Main";

const ProductPage = (props: {products: ProductTypes[]}) => {
	const { products } = props;
	  return (
		<ProductView products={products} />
	  )
}

// fungsi dijalankan setiap request di SSR
export async function getServerSideProps() {
	  // Fetch data from external API
	  const res = await fetch('http://localhost:3000/api/product');
	  const response = await res.json();
	// console.log(response)
	  return {
		props: { products: response.data }, // will be passed to the page component as props
	  }
}

export default ProductPage;