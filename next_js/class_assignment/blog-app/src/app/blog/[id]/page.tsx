import { posts } from "@/data/blogData"
import Link from "next/link";


export default function BlogDetails({ params }: { params: { id: string } }) {


    const currentId: any = params.id;
    const currentPost = posts[currentId - 1];
    console.log(currentPost);

    return (
        <div>
            {/* <h1>blog title : {currentPost.title}</h1> */}
            {/* <p>{currentPost.userId}</p> */}
            {/* <p>{currentPost.body}</p> */}

            {/* <Link href='/blog'>go back</Link> */}


            <PostDetailsCard currentPost={currentPost} />

        </div>
    )
}
function PostDetailsCard({ currentPost }) {
    return (
        <div className="flex flex-col text-center w-full mb-20 mt-4">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                {currentPost.title}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                {currentPost.body}
            </p>
            <Link href='/blog'>go back</Link>
        </div>
    )
}