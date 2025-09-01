import { useRouter } from "next/router";

const ShopPage = () => {
	const { query } = useRouter();

	return (
		<div>
			{Array.isArray(query.slug) ? (
				query.slug.map((element, index) => (
					<div key={index}>
						Slug part {index + 1}: {element}
					</div>
				))
			) : (
				<div>Ini halaman /shop tanpa slug</div>
			)}
		</div>
	);
};

export default ShopPage;
