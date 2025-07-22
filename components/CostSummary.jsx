import React from 'react';

const CostSummary = () => {
  return (
    <section className="cost-summary">
      <div className="container mx-auto">
        <div className="intro">
          <h2 className="text-secondary-gold text-6xl mb-3">Project Cost Summary</h2>
          <h3 className="text-secondary-green text-3xl inline-block w-1/2 mb-10">Base + Floor Plan</h3>
          <div className="title flex gap-6 items-center">
            <h3 
              className="font-normal text-center flex flex-col bg-darkRed rounded-r-[5px] overflow-hidden py-2 px-2 text-white"
              style={{ clipPath: 'polygon(10% 0%, 99% 0%, 99% 100%, 0% 100%, 0% 30%)' }}
            >
              Side-by-Side Container
            </h3>
            <h3 className="font-normal">Floor Plan 4</h3>
            <span className="w-[436px] border-b border-secondary-dark-gray mt-[14px]"></span>
            <p>$xxx,xxx</p>
          </div>
        </div>

        <div className="exterior-info mt-15">
          <h3 className="text-secondary-green text-3xl inline-block w-1/2 mb-10">Exterior</h3>
          <div className="discription">
            <div className="column flex flex-col divide-y divide-transparent">
              {/* Exterior Color Row */}
              <div className="flex justify-between border-b border-secondary-dark-gray">
                <div className="left flex gap-4">
                  <div className="first w-[173px] text-center">
                    <p className="font-normal bg-yellow py-2">Exterior Color</p>
                  </div>
                  <div className="second">
                    <p className="font-normal py-2">Dover White</p>
                  </div>
                </div>
                <div className="right">
                  <div className="third">
                    <p className="font-normal py-2">$</p>
                  </div>
                </div>
              </div>

              {/* Windows Row */}
              <div className="flex justify-between border-b border-secondary-dark-gray">
                <div className="left flex gap-4">
                  <div className="first w-[173px] text-center">
                    <p className="font-normal bg-yellow py-2">Windows</p>
                  </div>
                  <div className="second">
                    <p className="font-normal py-2">Brown</p>
                  </div>
                </div>
                <div className="right">
                  <div className="third">
                    <p className="font-normal py-2">$</p>
                  </div>
                </div>
              </div>

              {/* Patio Add-On Row */}
              <div className="flex justify-between border-b border-secondary-dark-gray">
                <div className="left flex gap-4">
                  <div className="first w-[173px] text-center">
                    <p className="font-normal bg-yellow py-2">Add-On</p>
                  </div>
                  <div className="second">
                    <p className="font-normal py-2">Patio</p>
                  </div>
                </div>
                <div className="right">
                  <div className="third">
                    <p className="font-normal py-2">$</p>
                  </div>
                </div>
              </div>

              {/* Roof Add-On Row */}
              <div className="flex justify-between border-b border-secondary-dark-gray">
                <div className="left flex gap-4">
                  <div className="first w-[173px] text-center">
                    <p className="font-normal bg-yellow py-2">Add-On</p>
                  </div>
                  <div className="second">
                    <p className="font-normal py-2">Roof</p>
                  </div>
                </div>
                <div className="right">
                  <div className="third">
                    <p className="font-normal py-2">$</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="final-result mt-10">
            <div className="flex justify-end">
              <div className="flex w-1/2 justify-between border-b border-secondary-dark-gray items-center">
                <div className="text-right">
                  <h3 className="font-bold text-lightYellow py-2">Current Total</h3>
                </div>
                <div>
                  <p className="font-bold py-2">$xxx,xxx</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostSummary;