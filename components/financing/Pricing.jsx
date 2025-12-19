const Pricing = () => {
  return (
    <section className="pricing-wrapper py-20">
      <div className="container md:p-0">
        <div className="intro">
          <h2 className="text-dark-green text-center text-4xl font-helvetica-neue-bold tracking-[-0.02em] mb-30">
            We’ve partnered with financing providers who understand ADUs— <br />
            <span className="text-marigold">
              no confusing loan jargon or hoops to jump through.
            </span>
          </h2>
        </div>
        <div className="pricing-table mt-10">
          <div className="grid grid-cols-3 gap-0">
            <div className="self-center">
              <h2 className="font-arial font-normal leading-[80px] text-85 text-dark-green">
                Financing <br />
                Options
              </h2>
              <p className="mt-10 text-dark-green text-2xl font-helvetica-neue-bold tracking-[-0.02em]">
                Simple, transparent options
                <br /> designed to fit your budget.
              </p>
            </div>
            <div className="bg-dark-green py-7">
              <h3 className="text-white text-3xl font-helvetica-neue-bold tracking-[-0.02em] px-5 mb-2">
                Fixed Rate
              </h3>
              <hr className="max-w-3xs border-marigold border-2" />
              <div className="px-5 text-white">
                <p className="my-5">
                  Peace of mind of a fixed rate, often at a lower rate than a
                  HELOC. Typically for faster projects.
                </p>
                <p className="text-xl font-helvetica-neue-bold tracking-[-0.02em]">
                  Loan Amounts of <br />
                  $100,000 - $500,000
                </p>
                <p className="text-sm">
                  No need to refinance your existing mortgage.
                </p>
              </div>
              <div className="table-wrapper mt-5">
                <div className="grid grid-cols-2 gap-5 text-white bg-white/10 px-7 py-5">
                  <h3 className="text-base font-arial">Rate</h3>
                  <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
                    Fixed Rate
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-5 text-white px-7 py-5">
                  <h3 className="text-base font-arial">Terms</h3>
                  <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
                    Up to 30 years
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-5 text-white bg-white/10 px-7 py-5">
                  <h3 className="text-base font-arial">Borrowing Power</h3>
                  <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
                    Up to 85% loan-to-value
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-5 text-white px-7 py-5">
                  <h3 className="text-base font-arial">Disbursement</h3>
                  <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
                    Full loan amount distributed at closing
                  </h3>
                </div>
              </div>
            </div>
            <div className="py-7">
              <h3 className="text-dark-green text-3xl font-helvetica-neue-bold tracking-[-0.02em] px-5 mb-2">
                HELOC
              </h3>
              <hr className="max-w-3xs border-marigold border-2" />
              <div className="px-5 text-dark-green">
                <p className="my-5">
                  Flexibility of drawing what you need, when you need it, and
                  only pay on what you use.
                </p>
                <p className="text-xl font-helvetica-neue-bold tracking-[-0.02em]">
                  Loan Amounts of <br />
                  $100,000 - $500,000
                </p>
                <p className="text-sm">
                  No need to refinance your existing mortgage.
                </p>
              </div>
              <div className="table-wrapper mt-5">
                <div className="grid grid-cols-2 gap-5 text-dark-green bg-white/10 px-7 py-5">
                  <h3 className="text-base font-arial">Rate</h3>
                  <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
                    Variable or Fixed Rate
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-5 text-dark-green px-7 py-5">
                  <h3 className="text-base font-arial">Terms</h3>
                  <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
                    3-5 year draw phase up to 30 years repayment
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-5 text-dark-green bg-white/10 px-7 py-5">
                  <h3 className="text-base font-arial">Borrowing Power</h3>
                  <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
                    Up to 90% loan-to-value
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-5 text-dark-green px-7 py-5">
                  <h3 className="text-base font-arial">Disbursement</h3>
                  <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
                    Line of credit with checkbook to spend funds
                  </h3>
                </div>
              </div>
            </div>
            <div className="bg-maroon py-7">
              <h3 className="text-white text-3xl font-helvetica-neue-bold tracking-[-0.02em] px-5 mb-2">
                Renovation Loan
              </h3>
              <hr className="max-w-3xs border-marigold border-2" />
              <div className="px-5 text-white">
                <p className="my-5">
                  Whether purchasing a property or refinancing, you can add the
                  construction budget into your loan.
                </p>
                <p className="text-xl font-helvetica-neue-bold tracking-[-0.02em]">
                  Loan Amounts of <br />
                  $150,000 - $3,000,000
                </p>
              </div>
              <div className="table-wrapper mt-5">
                <div className="grid grid-cols-2 gap-5 text-white bg-white/10 px-7 py-5">
                  <h3 className="text-base font-arial">Rate</h3>
                  <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
                    Adjustable or Fixed Rate
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-5 text-white px-7 py-5">
                  <h3 className="text-base font-arial">Terms</h3>
                  <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
                    Up to 30 years
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-5 text-white bg-white/10 px-7 py-5">
                  <h3 className="text-base font-arial">Borrowing Power</h3>
                  <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
                    Up to 110% of FUTURE loan-to-value
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-5 text-white px-7 py-5">
                  <h3 className="text-base font-arial">Disbursement</h3>
                  <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
                    Draws provided as needed during construction
                  </h3>
                </div>
              </div>
            </div>
            <div className="bg-khaki py-7">
              <h3 className="text-dark-green text-3xl font-helvetica-neue-bold tracking-[-0.02em] px-5 mb-2">
                Construction Loan
              </h3>
              <hr className="max-w-3xs border-marigold border-2" />
              <div className="px-5 text-dark-green">
                <p className="my-5">
                  Whether purchasing or refinancing a lot, you can finance
                  construction as part of your mortgage.
                </p>
                <p className="text-xl font-helvetica-neue-bold tracking-[-0.02em]">
                  Loan Amounts of <br />
                  $150,000 - $3,000,000
                </p>
              </div>
              <div className="table-wrapper mt-5">
                <div className="grid grid-cols-2 gap-5 text-dark-green bg-white/10 px-7 py-5">
                  <h3 className="text-base font-arial">Rate</h3>
                  <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
                    Fixed Rate, Interest-only
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-5 text-dark-green px-7 py-5">
                  <h3 className="text-base font-arial">Terms</h3>
                  <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
                    30 year term, 3-year refinance
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-5 text-dark-green bg-white/10 px-7 py-5">
                  <h3 className="text-base font-arial">Borrowing Power</h3>
                  <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
                    Up to 80% of FUTURE loan-to-value
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-5 text-dark-green px-7 py-5">
                  <h3 className="text-base font-arial">Disbursement</h3>
                  <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
                    Draws provided as needed during construction
                  </h3>
                </div>
              </div>
            </div>
            <div className="bg-dark-teal py-7">
              <h3 className="text-white text-3xl font-helvetica-neue-bold tracking-[-0.02em] px-5 mb-2">
                ReLOC
              </h3>
              <hr className="max-w-3xs border-marigold border-2" />
              <div className="px-5 text-white">
                <p className="my-5">
                  If you’re 62 or older, this loan can cover the cost of
                  construction with no monthly payment – and no need to
                  refinance.
                </p>
                <p className="text-xl font-helvetica-neue-bold tracking-[-0.02em]">
                  Loan Amounts of <br />
                  $150,000 - $3,000,000
                </p>
              </div>
              <div className="table-wrapper mt-5">
                <div className="grid grid-cols-2 gap-5 text-white bg-white/10 px-7 py-5">
                  <h3 className="text-base font-arial">Rate</h3>
                  <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
                    Fixed Rate
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-5 text-white px-7 py-5">
                  <h3 className="text-base font-arial">Terms</h3>
                  <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
                    30 year term, no pre-payment penalty
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-5 text-white bg-white/10 px-7 py-5">
                  <h3 className="text-base font-arial">Borrowing Power</h3>
                  <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
                    Depends on home equity and age of applicants
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-5 text-white px-7 py-5">
                  <h3 className="text-base font-arial">Disbursement</h3>
                  <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
                    Line of credit with checkbook to spend funds
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-wrapper px-10 pt-10 grid grid-cols-10 gap-5 items-center">
          <div className="text-dark-green col-span-7">
            <h4 className="font-arial text-4xl font-bold tracking-[-0.02em]">
              Not sure which is best for you?
            </h4>
            <p className="text-xl font-arial font-normal mt-3">
              Let our financing experts walk you through your options, answer
              your questions, and help you find a plan that fits your budget and
              timeline.
            </p>
          </div>
          <div className="col-span-3">
            <button className="border-lightYellow text-white tracking-[-0.05em] bg-lightYellow md:text-lg font-helvetica-neue-bold rounded-md pt-2 pb-1 px-5 hover:bg-green cursor-pointer">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
