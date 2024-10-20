import getAllProducts from "@/utils/product"
import Image from "next/image";
import Link from "next/link"

export default async function Products() {
    const allproducts = await getAllProducts();
    const products = allproducts.products;
    // console.log(products[0].title);
    const productElement = products.map((product) => (
        <ProductCard key={product.id} product={product} />
    ))
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {productElement}
                </div>
            </div>
        </section>
    )
}

function ProductCard({ product }) {
    return (
        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={product.thumbnail}
                    alt="blog"
                    width={200}
                    height={200}
                />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        {product.category}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {product.title}
                    </h1>
                    <p className="leading-relaxed mb-3">
                        {product.description}
                    </p>
                    <div className="flex items-center flex-wrap ">
                        <Link href={`/products/${product.id}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            Learn More
                            <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14" />
                                <path d="M12 5l7 7-7 7" />
                            </svg>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}