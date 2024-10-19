
import getAllProducts from "@/utils/product";
import Link from "next/link";

export default async function Todo() {
    const products = await getAllProducts();
    // console.log(products);

    return (
        <div>
            <h3>todo list</h3>
            <div>
                {
                    products.map(product => (
                        <div key={product.id}>
                            <h2>{product.id} ::  {product.title}</h2>
                            <p>{product.description}</p>
                            <Link href={`/todo/${product.id}`} >readmore </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
