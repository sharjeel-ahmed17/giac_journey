

const Hero = () => {
    return (
        <div className="py-20">

            <div className="grid grid-cols-1 md:grid-cols-[70%_auto]">
                <div>
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
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg" alt="" className="size-48 rounded-full" />
                </div>

            </div>
        </div>
    )
}

export default Hero
