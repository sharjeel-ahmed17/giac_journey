// import {} from 'lucide-react'

import Image from "next/image"

const Work = () => {
    return (
        <div className="py-20 w-[80%]">
            <h2 className="text-[22px] ladding-[32.31px] font-medium mb-3">Featured works</h2>
            <div className="grid gird-col-1 md:grid-cols-[30%_auto]">
                <WorkCard />
                <WorkCard />
                <WorkCard />
                <WorkCard />
            </div>
        </div>
    )
}

export default Work


function WorkCard() {
    return (
        <>

            <div className="mb-8">
                <Image src="/images/work/work1.png" alt="left image" width={200} height={200} /></div>
            <div>
                <h3 className="font-bold text-[30px] leading-[44.06px] capitalize mb-3">designning dashboards</h3>
                <p className="mb-3 capitalize"><span className="bg-red-500 px-4 py-2 text-white rounded-full mr-10 text-[18px] ladding-[26.44]">2020</span> <span className="text-[20px]"> dashboard</span> </p>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
        </>
    )
}