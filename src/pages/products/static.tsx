import { ProductTypes } from "../../types/product.types";
import ProductView from "../views/Product/Main";

const ProductPage = (props: {products: ProductTypes[]}) => {
	const {products} = props;
	return <ProductView products={products} />;
}

export default ProductPage;

export async function getStaticProps() {
	// const res = await fetch('http://localhost:3000/api/product');
	const res = await fetch(process.env.NEXT_PUBLIC_API_PRODUCTS_URL || 'http://localhost:3000/api/product');
	const response = await res.json();

	return {
		props: {
			products: response.data
		}	
	}
}