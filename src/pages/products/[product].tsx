import fetcher from "@/lib/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import styles from "./product_detail.module.css";

const DetailProduct = () => {
const {query} = useRouter();
console.log(query.product);
  const { data, error, isLoading } = useSWR(`/api/product/${query.product}`, fetcher);
// console.log(query);
// console.log(event);
  // console.log(data);

  // console.log(data.data)
  return (
    <> 
    <div  className={styles.product__item} key={data?.data.id}>
						<img src={data?.data.image} alt={data?.data.name} className={styles.product__item__image} width="20%" height="100%"/>
						<div >
							<h3 className={styles.product__item__name}>{data?.data.name}</h3>
						<p className={styles.product__item__price}>{data?.data.price.toLocaleString("id-ID", {
							style: "currency",
							currency: "IDR",
						})}</p>
						<p className={styles.product__item__category}>{data?.data.category}</p>
						</div>
					</div>
    </>
  );
}

export default DetailProduct;