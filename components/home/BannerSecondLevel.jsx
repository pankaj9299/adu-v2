import { LazyLoadImage } from "react-lazy-load-image-component";

const BannerSecondLevel = () => {
    return(
        <section className="banner">
            <div className="container">
                <div className="main-wrappper  flex flex-col md:flex-row w-full items-center gap-5">
                    <div className="content-wrap  basis-1/2 md:w-full ">
                        <h1 className="md:text-[87px] font-normal text-dark-green my-7">Light Into Endless Possibilities</h1>
                        <h2 className="text-[40px] font-normal inline-block  text-marigold mb-10 font-helvetica-neue-bold">Redefining the Equilibrium of Housing</h2>
                        <p className="text-lg text-green font-Arial">More customization than ordinary prefab, more efficiency than traditional stick-build construction.</p>
                        <div className="button-wrap mt-7 ">
                           <button className="border-dark-teal text-white tracking-[-5%] bg-dark-teal md:text-lg font-helvetica-neue-bold  pt-2 pb-1 px-5 hover:bg-green cursor-pointer">Get in Touch</button> 
                        </div>
                        <div className="img-wrapper relative basis-1/2 md:w-full  ">
                           <LazyLoadImage
                             src="/image/homepage/Group 96.png"
                             alt={"arrow"}
                             className={``}
                             wrapperClassName=" mt-20"
                             effect="opacity"
                           />
                        </div>
                    </div>
                    <div className="img-wrapper relative basis-1/2 md:w-full  ">
                      <LazyLoadImage
                        src="/image/homepage/ADU_06 cutout 1.png"
                        alt={"banner"}
                        className={``}
                        wrapperClassName=""
                        effect="opacity"
                      />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BannerSecondLevel