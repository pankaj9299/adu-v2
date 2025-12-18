const Steps = () => {
  return (
    <section>
      <div className="container">
        <div className="relative">
          {/* Tall vertical line */}
          <div className="absolute left-10 top-[21px] bottom-[21px] w-[2px] bg-khaki" />

          {/* Steps */}
          <div className="flex flex-col gap-6 pl-16">
            <div className="relative flex items-center">
              {/* Small connector line */}
              <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full h-[2px] w-5 bg-khaki" />

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-khaki font-semibold">
                01
              </div>
              <p className="ml-6 text-gray-700">Envision It</p>
            </div>
            <div className="text-wrap">
              <h3>Design Your ADU Your Way</h3>
              <p>
                Start by imagining how you want to use your ADU, and what you
                want it to feel like.
              </p>
              <p>
                Choose your layout, finishes, and design details to match your
                lifestyle.
              </p>
              <div className="btn-wrapper">
                <button className="border-marigold text-white tracking-[-2%] bg-marigold md:text-lg font-helvetica-neue-bold pt-2 pb-1 px-5 hover:bg-green cursor-pointer">
                  Let’s Get Started
                </button>
              </div>
            </div>

            <div className="relative flex items-center">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full h-[2px] w-5 bg-khaki" />
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-khaki font-semibold">
                02
              </div>
              <p className="ml-6 text-gray-700">Plan It</p>
            </div>

            <div className="relative flex items-center">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full h-[2px] w-5 bg-khaki" />
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-khaki font-semibold">
                03
              </div>
              <p className="ml-6 text-gray-700">Approve It</p>
            </div>

            <div className="relative flex items-center">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full h-[2px] w-5 bg-khaki" />
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-khaki font-semibold">
                04
              </div>
              <p className="ml-6 text-gray-700">Ship It</p>
            </div>

            <div className="relative flex items-center">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full h-[2px] w-5 bg-khaki" />
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white border border-khaki font-semibold">
                05
              </div>
              <p className="ml-6 text-gray-700">Enjoy It</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
