import { LazyLoadImage } from "react-lazy-load-image-component";

const Banner = () => {
    return (
        <section className="relative h-[600px]">
            <div className="container p-0">
                <div className="flex flex-row-reverse">
                    <div className="basis-1/2">
                        <div className="pl-15 mt-40">
                            <h1 className="font-arial font-normal leading-[80px] text-85 text-green tracking-[-0.05em]">How it Works</h1>
                            <p className="text-3xl text-marigold font-helvetica-neue-bold tracking-[-0.02em]">The Build Process</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 left-0">
                <LazyLoadImage
                                src="/image/how-works/banner.png"
                                alt={"Hero image"}
                                className={`h-full mx-auto`}
                                wrapperClassName="h-full w-full text-center"
                                effect="opacity"
                                threshold={100}
                              />
            </div>
        </section>
    );
}

export default Banner;