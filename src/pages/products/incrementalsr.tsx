import { ProductTypes } from "../../types/product.types";
import ProductView from "../views/Product/Main";

const IncrementalSR = (props: {products: ProductTypes[]}) => {
	const {products} = props;
	return <ProductView products={products} />;
}

export default IncrementalSR;

export async function getStaticProps() {
	// const res = await fetch('http://localhost:3000/api/product');
	const res = await fetch(process.env.NEXT_PUBLIC_API_PRODUCTS_URL || 'http://localhost:3000/api/product');
	const response = await res.json();

	return {
		props: {
			products: response.data
		},
		// revalidate: 10,
	}
}