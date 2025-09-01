import { useRouter } from "next/router";

const DetailProduct = () => {
const {query} = useRouter();
  return <h1>ini halaman Detail Product : {query.id}</h1>;
}

export default DetailProduct;