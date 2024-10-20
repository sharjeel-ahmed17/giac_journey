

const Post = () => {
    return (
        <div className="p-6 bg-[#F4E2E2]">
            <div>
                <div className="flex justify-between mx-5 text-[22px] text-[#F98585] ladding-[32.31px] font-medium">
                    <p className="text-black">Recent Posts</p>
                    <p >View all</p>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap">

                    <div className=" p-8 bg-white m-5">
                        <h2 className="mb-3 font-bold text-[26px] leading-[38px] tracking-[2%] ">Making a design system from scratch</h2>
                        <p className="mb-3 font-normal text-[18px] ladding-[38px] tracking-[2%] text-slate-500">12 Feb 2020 | Design , Pattern</p>
                        <div className="font-normal leading-[23.5px]">

                            <p>Amet minim mollit non deserunt ullamco est sit aliqua</p>
                            <p> dolor do amet sint. Velit officia consequat duis enim </p>
                            <p>velit mollit. Exercitation veniam consequat sunt</p>
                            <p>Lorem, ipsum.</p>
                        </div>
                    </div>
                    <div className=" p-8 bg-white m-5">
                        <h2 className="mb-3 font-bold text-[26px] leading-[38px] tracking-[2%] ">Making a design system from scratch</h2>
                        <p className="mb-3 font-normal text-[18px] ladding-[38px] tracking-[2%] text-slate-500">12 Feb 2020 | Design , Pattern</p>
                        <div className="font-normal leading-[23.5px]">

                            <p>Amet minim mollit non deserunt ullamco est sit aliqua</p>
                            <p> dolor do amet sint. Velit officia consequat duis enim </p>
                            <p>velit mollit. Exercitation veniam consequat sunt</p>
                            <p>Lorem, ipsum.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Post
