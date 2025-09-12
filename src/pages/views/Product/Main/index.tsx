/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import styles from "./Product.module.scss";
type ProductTypes = { id: string, name: string, price: number, category: string, image: string };


const ProductView = ({ products }: { products: ProductTypes[] }) => {
	return (
		<>
			<h1 className={styles.product__title}>Daftar Produk</h1>
			<div className={styles.product}>

				

				{products.length === 0 ? <div className={styles.product__item__skeleton} >
					<div className={styles.product__item__skeleton__img} />
					<div className={styles.product__item__skeleton__name} />
					<div className={styles.product__item__skeleton__category} />
					<div className={styles.product__item__skeleton__price} />
				</div> : products.map((product: ProductTypes) => (
					<div className={styles.product__item} key={product.id}>
						<img src={product.image} alt={product.name} className={styles.product__item__image} width="100%" height="100%"/>
						<div >
							<h3 className={styles.product__item__name}>{product.name}</h3>
						<p className={styles.product__item__price}>{product.price.toLocaleString("id-ID", {
							style: "currency",
							currency: "IDR",
						})}</p>
						<p className={styles.product__item__category}>{product.category}</p>
						</div>
					</div>
				))}

				{/* {products.map((product: ProductTypes) => (
					<div className={styles.product__item} key={product.id}>
						<img src={product.image} alt={product.name} className={styles.product__item__image} width="100%" height="100%"/>
						<div >
							<h3 className={styles.product__item__name}>{product.name}</h3>
						<p className={styles.product__item__price}>{product.price.toLocaleString("id-ID", {
							style: "currency",
							currency: "IDR",
						})}</p>
						<p className={styles.product__item__category}>{product.category}</p>
						</div>
					</div>
				))} */}
			</div>

		</>
	)
}

export default ProductView;