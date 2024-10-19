
import { posts } from "@/data/blogData"
import Link from "next/link"
export default function Blog() {

    const postData = posts.slice(0, 5).map((post) => (
        <BlogpostCard key={post.id} post={post} />
    ))
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
                    Latest Blog Posts
                </h1>
                <div className="flex flex-wrap -m-4">
                    {postData}
                </div>
            </div>
        </section>
    )
}


// function BlogPost({ post }) {
//     return (

//         <>
//             <BlogpostCard post={post} />

//         </>




//     )
// }

function BlogpostCard({ post }) {
    return (

        <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">

                <div className="p-6">

                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {post.title}
                    </h1>
                    <p className="leading-relaxed mb-3">
                        {post.body}
                    </p>
                    <div className="flex items-center flex-wrap ">
                        <Link href={`/blog/${post.id}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            Learn More

                        </Link>


                    </div>
                </div>
            </div>
        </div>

    )
}