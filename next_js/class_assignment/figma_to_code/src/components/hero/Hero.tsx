import Image from "next/image"


const Hero = () => {
    return (
        <div className="py-20">

            <div className="grid grid-cols-1 md:grid-cols-[70%_auto]">
                <div className="text-center md:text-left mb-5 md:mb-0">
                    <h1 className="mb-3 text-[48px] leading-[61px] font-black tracking-[2px]">Hi, I am Sharjeel,
                        <br />
                        Creative Technologist</h1>
                    <div className="mb-3 font-normal">
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet </p>
                        <p>
                            sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
                        </p>
                        <p>consequat sunt nostrud amet.</p>
                    </div>
                    <button className="px-6 py-3 rounded-md text-white bg-red-500 shadow-lg font-bold">Download Resume</button>

                </div>
                <div className="flex justify-center items-center">
                    <Image width={200} height={200} src="/images/work/work1.png" alt="" className="size-48 rounded-full" />
                </div>

            </div>
        </div>
    )
}

export default Hero
