// const Pricing = () => {
// return (
//   <section className="pricing-wrapper py-20">
//     <div className="container md:p-0">
//       <div className="intro">
//         <h2 className="text-dark-green text-center text-4xl font-helvetica-neue-bold tracking-[-0.02em] mb-30">
//           We’ve partnered with financing providers who understand ADUs— <br />
//           <span className="text-marigold">
//             no confusing loan jargon or hoops to jump through.
//           </span>
//         </h2>
//       </div>
//       <div className="pricing-table mt-10">
//         <div className="grid grid-cols-3 gap-0">
//           <div className="self-center">
//             <h2 className="font-arial font-normal leading-[80px] text-85 text-dark-green">
//               Financing <br />
//               Options
//             </h2>
//             <p className="mt-10 text-dark-green text-2xl font-helvetica-neue-bold tracking-[-0.02em]">
//               Simple, transparent options
//               <br /> designed to fit your budget.
//             </p>
//           </div>
//           <div className="bg-dark-green py-7">
//             <h3 className="text-white text-3xl font-helvetica-neue-bold tracking-[-0.02em] px-5 mb-2">
//               Fixed Rate
//             </h3>
//             <hr className="max-w-3xs border-marigold border-2" />
//             <div className="px-5 text-white">
//               <p className="my-5">
//                 Peace of mind of a fixed rate, often at a lower rate than a
//                 HELOC. Typically for faster projects.
//               </p>
//               <p className="text-xl font-helvetica-neue-bold tracking-[-0.02em]">
//                 Loan Amounts of <br />
//                 $100,000 - $500,000
//               </p>
//               <p className="text-sm">
//                 No need to refinance your existing mortgage.
//               </p>
//             </div>
//             <div className="table-wrapper mt-5">
//               <div className="grid grid-cols-2 gap-5 text-white bg-white/10 px-7 py-5">
//                 <h3 className="text-base font-arial">Rate</h3>
//                 <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
//                   Fixed Rate
//                 </h3>
//               </div>
//               <div className="grid grid-cols-2 gap-5 text-white px-7 py-5">
//                 <h3 className="text-base font-arial">Terms</h3>
//                 <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
//                   Up to 30 years
//                 </h3>
//               </div>
//               <div className="grid grid-cols-2 gap-5 text-white bg-white/10 px-7 py-5">
//                 <h3 className="text-base font-arial">Borrowing Power</h3>
//                 <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
//                   Up to 85% loan-to-value
//                 </h3>
//               </div>
//               <div className="grid grid-cols-2 gap-5 text-white px-7 py-5">
//                 <h3 className="text-base font-arial">Disbursement</h3>
//                 <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
//                   Full loan amount distributed at closing
//                 </h3>
//               </div>
//             </div>
//           </div>
//           <div className="py-7">
//             <h3 className="text-dark-green text-3xl font-helvetica-neue-bold tracking-[-0.02em] px-5 mb-2">
//               HELOC
//             </h3>
//             <hr className="max-w-3xs border-marigold border-2" />
//             <div className="px-5 text-dark-green">
//               <p className="my-5">
//                 Flexibility of drawing what you need, when you need it, and
//                 only pay on what you use.
//               </p>
//               <p className="text-xl font-helvetica-neue-bold tracking-[-0.02em]">
//                 Loan Amounts of <br />
//                 $100,000 - $500,000
//               </p>
//               <p className="text-sm">
//                 No need to refinance your existing mortgage.
//               </p>
//             </div>
//             <div className="table-wrapper mt-5">
//               <div className="grid grid-cols-2 gap-5 text-dark-green bg-white/10 px-7 py-5">
//                 <h3 className="text-base font-arial">Rate</h3>
//                 <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
//                   Variable or Fixed Rate
//                 </h3>
//               </div>
//               <div className="grid grid-cols-2 gap-5 text-dark-green px-7 py-5">
//                 <h3 className="text-base font-arial">Terms</h3>
//                 <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
//                   3-5 year draw phase up to 30 years repayment
//                 </h3>
//               </div>
//               <div className="grid grid-cols-2 gap-5 text-dark-green bg-white/10 px-7 py-5">
//                 <h3 className="text-base font-arial">Borrowing Power</h3>
//                 <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
//                   Up to 90% loan-to-value
//                 </h3>
//               </div>
//               <div className="grid grid-cols-2 gap-5 text-dark-green px-7 py-5">
//                 <h3 className="text-base font-arial">Disbursement</h3>
//                 <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
//                   Line of credit with checkbook to spend funds
//                 </h3>
//               </div>
//             </div>
//           </div>
//           <div className="bg-maroon py-7">
//             <h3 className="text-white text-3xl font-helvetica-neue-bold tracking-[-0.02em] px-5 mb-2">
//               Renovation Loan
//             </h3>
//             <hr className="max-w-3xs border-marigold border-2" />
//             <div className="px-5 text-white">
//               <p className="my-5">
//                 Whether purchasing a property or refinancing, you can add the
//                 construction budget into your loan.
//               </p>
//               <p className="text-xl font-helvetica-neue-bold tracking-[-0.02em]">
//                 Loan Amounts of <br />
//                 $150,000 - $3,000,000
//               </p>
//             </div>
//             <div className="table-wrapper mt-5">
//               <div className="grid grid-cols-2 gap-5 text-white bg-white/10 px-7 py-5">
//                 <h3 className="text-base font-arial">Rate</h3>
//                 <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
//                   Adjustable or Fixed Rate
//                 </h3>
//               </div>
//               <div className="grid grid-cols-2 gap-5 text-white px-7 py-5">
//                 <h3 className="text-base font-arial">Terms</h3>
//                 <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
//                   Up to 30 years
//                 </h3>
//               </div>
//               <div className="grid grid-cols-2 gap-5 text-white bg-white/10 px-7 py-5">
//                 <h3 className="text-base font-arial">Borrowing Power</h3>
//                 <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
//                   Up to 110% of FUTURE loan-to-value
//                 </h3>
//               </div>
//               <div className="grid grid-cols-2 gap-5 text-white px-7 py-5">
//                 <h3 className="text-base font-arial">Disbursement</h3>
//                 <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
//                   Draws provided as needed during construction
//                 </h3>
//               </div>
//             </div>
//           </div>
//           <div className="bg-khaki py-7">
//             <h3 className="text-dark-green text-3xl font-helvetica-neue-bold tracking-[-0.02em] px-5 mb-2">
//               Construction Loan
//             </h3>
//             <hr className="max-w-3xs border-marigold border-2" />
//             <div className="px-5 text-dark-green">
//               <p className="my-5">
//                 Whether purchasing or refinancing a lot, you can finance
//                 construction as part of your mortgage.
//               </p>
//               <p className="text-xl font-helvetica-neue-bold tracking-[-0.02em]">
//                 Loan Amounts of <br />
//                 $150,000 - $3,000,000
//               </p>
//             </div>
//             <div className="table-wrapper mt-5">
//               <div className="grid grid-cols-2 gap-5 text-dark-green bg-white/10 px-7 py-5">
//                 <h3 className="text-base font-arial">Rate</h3>
//                 <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
//                   Fixed Rate, Interest-only
//                 </h3>
//               </div>
//               <div className="grid grid-cols-2 gap-5 text-dark-green px-7 py-5">
//                 <h3 className="text-base font-arial">Terms</h3>
//                 <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
//                   30 year term, 3-year refinance
//                 </h3>
//               </div>
//               <div className="grid grid-cols-2 gap-5 text-dark-green bg-white/10 px-7 py-5">
//                 <h3 className="text-base font-arial">Borrowing Power</h3>
//                 <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
//                   Up to 80% of FUTURE loan-to-value
//                 </h3>
//               </div>
//               <div className="grid grid-cols-2 gap-5 text-dark-green px-7 py-5">
//                 <h3 className="text-base font-arial">Disbursement</h3>
//                 <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
//                   Draws provided as needed during construction
//                 </h3>
//               </div>
//             </div>
//           </div>
//           <div className="bg-dark-teal py-7">
//             <h3 className="text-white text-3xl font-helvetica-neue-bold tracking-[-0.02em] px-5 mb-2">
//               ReLOC
//             </h3>
//             <hr className="max-w-3xs border-marigold border-2" />
//             <div className="px-5 text-white">
//               <p className="my-5">
//                 If you’re 62 or older, this loan can cover the cost of
//                 construction with no monthly payment – and no need to
//                 refinance.
//               </p>
//               <p className="text-xl font-helvetica-neue-bold tracking-[-0.02em]">
//                 Loan Amounts of <br />
//                 $150,000 - $3,000,000
//               </p>
//             </div>
//             <div className="table-wrapper mt-5">
//               <div className="grid grid-cols-2 gap-5 text-white bg-white/10 px-7 py-5">
//                 <h3 className="text-base font-arial">Rate</h3>
//                 <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
//                   Fixed Rate
//                 </h3>
//               </div>
//               <div className="grid grid-cols-2 gap-5 text-white px-7 py-5">
//                 <h3 className="text-base font-arial">Terms</h3>
//                 <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
//                   30 year term, no pre-payment penalty
//                 </h3>
//               </div>
//               <div className="grid grid-cols-2 gap-5 text-white bg-white/10 px-7 py-5">
//                 <h3 className="text-base font-arial">Borrowing Power</h3>
//                 <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
//                   Depends on home equity and age of applicants
//                 </h3>
//               </div>
//               <div className="grid grid-cols-2 gap-5 text-white px-7 py-5">
//                 <h3 className="text-base font-arial">Disbursement</h3>
//                 <h3 className="text-base font-arial font-bold tracking-[-0.02em]">
//                   Line of credit with checkbook to spend funds
//                 </h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="cta-wrapper px-10 pt-10 grid grid-cols-10 gap-5 items-center">
//         <div className="text-dark-green col-span-7">
//           <h4 className="font-arial text-4xl font-bold tracking-[-0.02em]">
//             Not sure which is best for you?
//           </h4>
//           <p className="text-xl font-arial font-normal mt-3">
//             Let our financing experts walk you through your options, answer
//             your questions, and help you find a plan that fits your budget and
//             timeline.
//           </p>
//         </div>
//         <div className="col-span-3">
//           <button className="border-lightYellow text-white tracking-[-0.05em] bg-lightYellow md:text-lg font-helvetica-neue-bold rounded-md pt-2 pb-1 px-5 hover:bg-green cursor-pointer">
//             Schedule a Call
//           </button>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// };

// export default Pricing;

import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section className="pricing-wrapper py-12 md:py-20">
      <div className="container px-4 md:px-0 md:p-0">
        <div className="intro">
          <h2 className="text-dark-green text-center text-2xl md:text-4xl font-helvetica-neue-bold tracking-[-0.02em] mb-10 md:mb-30">
            We’ve partnered with financing providers who understand ADUs—{" "}
            <br className="hidden md:block" />
            <span className="text-marigold">
              no confusing loan jargon or hoops to jump through.
            </span>
          </h2>
        </div>

        <div className="pricing-table mt-8 md:mt-10">
          {/* 1 col mobile, 3 col lg+ */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0">
            {/* Left intro cell */}
            <div className="self-center lg:pr-10">
              <h2 className="font-arial font-normal leading-tight md:leading-[80px] text-4xl md:text-6xl xl:text-[85px] text-dark-green">
                Financing <br />
                Options
              </h2>
              <p className="mt-4 md:mt-10 text-dark-green text-lg md:text-2xl font-helvetica-neue-bold tracking-[-0.02em]">
                Simple, transparent options
                <br /> designed to fit your budget.
              </p>
            </div>

            {/* CARD 1 */}
            <div className="bg-dark-green py-7 rounded-xl lg:rounded-none overflow-hidden">
              <h3 className="text-white text-2xl md:text-3xl font-helvetica-neue-bold tracking-[-0.02em] px-5 mb-2">
                Fixed Rate
              </h3>
              <hr className="max-w-3xs border-marigold border-2" />
              <div className="px-5 text-white">
                <p className="my-5 text-sm md:text-base">
                  Peace of mind of a fixed rate, often at a lower rate than a
                  HELOC. Typically for faster projects.
                </p>
                <p className="text-lg md:text-xl font-helvetica-neue-bold tracking-[-0.02em]">
                  Loan Amounts of <br />
                  $100,000 - $500,000
                </p>
                <p className="text-xs md:text-sm">
                  No need to refinance your existing mortgage.
                </p>
              </div>
              <div className="table-wrapper mt-5">
                <div className="grid grid-cols-2 gap-3 md:gap-5 text-white bg-white/10 px-5 md:px-7 py-4 md:py-5">
                  <h3 className="text-sm md:text-base font-arial">Rate</h3>
                  <h3 className="text-sm md:text-base font-arial font-bold tracking-[-0.02em]">
                    Fixed Rate
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-5 text-white px-5 md:px-7 py-4 md:py-5">
                  <h3 className="text-sm md:text-base font-arial">Terms</h3>
                  <h3 className="text-sm md:text-base font-arial font-bold tracking-[-0.02em]">
                    Up to 30 years
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-5 text-white bg-white/10 px-5 md:px-7 py-4 md:py-5">
                  <h3 className="text-sm md:text-base font-arial">
                    Borrowing Power
                  </h3>
                  <h3 className="text-sm md:text-base font-arial font-bold tracking-[-0.02em]">
                    Up to 85% loan-to-value
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-5 text-white px-5 md:px-7 py-4 md:py-5">
                  <h3 className="text-sm md:text-base font-arial">
                    Disbursement
                  </h3>
                  <h3 className="text-sm md:text-base font-arial font-bold tracking-[-0.02em]">
                    Full loan amount distributed at closing
                  </h3>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="py-7 rounded-xl lg:rounded-none overflow-hidden border border-black/10 lg:border-0">
              <h3 className="text-dark-green text-2xl md:text-3xl font-helvetica-neue-bold tracking-[-0.02em] px-5 mb-2">
                HELOC
              </h3>
              <hr className="max-w-3xs border-marigold border-2" />
              <div className="px-5 text-dark-green">
                <p className="my-5 text-sm md:text-base">
                  Flexibility of drawing what you need, when you need it, and
                  only pay on what you use.
                </p>
                <p className="text-lg md:text-xl font-helvetica-neue-bold tracking-[-0.02em]">
                  Loan Amounts of <br />
                  $100,000 - $500,000
                </p>
                <p className="text-xs md:text-sm">
                  No need to refinance your existing mortgage.
                </p>
              </div>
              <div className="table-wrapper mt-5">
                <div className="grid grid-cols-2 gap-3 md:gap-5 text-dark-green bg-black/5 px-5 md:px-7 py-4 md:py-5">
                  <h3 className="text-sm md:text-base font-arial">Rate</h3>
                  <h3 className="text-sm md:text-base font-arial font-bold tracking-[-0.02em]">
                    Variable or Fixed Rate
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-5 text-dark-green px-5 md:px-7 py-4 md:py-5">
                  <h3 className="text-sm md:text-base font-arial">Terms</h3>
                  <h3 className="text-sm md:text-base font-arial font-bold tracking-[-0.02em]">
                    3-5 year draw phase up to 30 years repayment
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-5 text-dark-green bg-black/5 px-5 md:px-7 py-4 md:py-5">
                  <h3 className="text-sm md:text-base font-arial">
                    Borrowing Power
                  </h3>
                  <h3 className="text-sm md:text-base font-arial font-bold tracking-[-0.02em]">
                    Up to 90% loan-to-value
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-5 text-dark-green px-5 md:px-7 py-4 md:py-5">
                  <h3 className="text-sm md:text-base font-arial">
                    Disbursement
                  </h3>
                  <h3 className="text-sm md:text-base font-arial font-bold tracking-[-0.02em]">
                    Line of credit with checkbook to spend funds
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-maroon py-7 rounded-xl lg:rounded-none overflow-hidden">
              <h3 className="text-white text-2xl md:text-3xl font-helvetica-neue-bold tracking-[-0.02em] px-5 md:px-7 mb-2">
                Renovation Loan
              </h3>
              <hr className="max-w-3xs border-marigold border-2" />
              <div className="px-5 md:px-7 text-white">
                <p className="my-5 text-sm md:text-base">
                  Whether purchasing a property or refinancing, you can add the
                  construction budget into your loan.
                </p>
                <p className="text-lg md:text-xl font-helvetica-neue-bold tracking-[-0.02em]">
                  Loan Amounts of <br />
                  $150,000 - $3,000,000
                </p>
              </div>

              <div className="table-wrapper mt-5">
                <div className="grid grid-cols-2 gap-3 md:gap-5 text-white bg-white/10 px-5 md:px-7 py-4 md:py-5">
                  <h3 className="text-sm md:text-base font-arial">Rate</h3>
                  <h3 className="text-sm md:text-base font-arial font-bold tracking-[-0.02em]">
                    Adjustable or Fixed Rate
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-5 text-white px-5 md:px-7 py-4 md:py-5">
                  <h3 className="text-sm md:text-base font-arial">Terms</h3>
                  <h3 className="text-sm md:text-base font-arial font-bold tracking-[-0.02em]">
                    Up to 30 years
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-5 text-white bg-white/10 px-5 md:px-7 py-4 md:py-5">
                  <h3 className="text-sm md:text-base font-arial">
                    Borrowing Power
                  </h3>
                  <h3 className="text-sm md:text-base font-arial font-bold tracking-[-0.02em]">
                    Up to 110% of FUTURE loan-to-value
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-5 text-white px-5 md:px-7 py-4 md:py-5">
                  <h3 className="text-sm md:text-base font-arial">
                    Disbursement
                  </h3>
                  <h3 className="text-sm md:text-base font-arial font-bold tracking-[-0.02em]">
                    Draws provided as needed during construction
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-khaki py-7 rounded-xl lg:rounded-none overflow-hidden">
              <h3 className="text-dark-green text-2xl md:text-3xl font-helvetica-neue-bold tracking-[-0.02em] px-5 md:px-7 mb-2">
                Construction Loan
              </h3>
              <hr className="max-w-3xs border-marigold border-2" />
              <div className="px-5 md:px-7 text-dark-green">
                <p className="my-5 text-sm md:text-base">
                  Whether purchasing or refinancing a lot, you can finance
                  construction as part of your mortgage.
                </p>
                <p className="text-lg md:text-xl font-helvetica-neue-bold tracking-[-0.02em]">
                  Loan Amounts of <br />
                  $150,000 - $3,000,000
                </p>
              </div>

              <div className="table-wrapper mt-5">
                <div className="grid grid-cols-2 gap-3 md:gap-5 text-dark-green bg-white/10 px-5 md:px-7 py-4 md:py-5">
                  <h3 className="text-sm md:text-base font-arial">Rate</h3>
                  <h3 className="text-sm md:text-base font-arial font-bold tracking-[-0.02em]">
                    Fixed Rate, Interest-only
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-5 text-dark-green px-5 md:px-7 py-4 md:py-5">
                  <h3 className="text-sm md:text-base font-arial">Terms</h3>
                  <h3 className="text-sm md:text-base font-arial font-bold tracking-[-0.02em]">
                    30 year term, 3-year refinance
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-5 text-dark-green bg-white/10 px-5 md:px-7 py-4 md:py-5">
                  <h3 className="text-sm md:text-base font-arial">
                    Borrowing Power
                  </h3>
                  <h3 className="text-sm md:text-base font-arial font-bold tracking-[-0.02em]">
                    Up to 80% of FUTURE loan-to-value
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-5 text-dark-green px-5 md:px-7 py-4 md:py-5">
                  <h3 className="text-sm md:text-base font-arial">
                    Disbursement
                  </h3>
                  <h3 className="text-sm md:text-base font-arial font-bold tracking-[-0.02em]">
                    Draws provided as needed during construction
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-dark-teal py-7 rounded-xl lg:rounded-none overflow-hidden">
              <h3 className="text-white text-2xl md:text-3xl font-helvetica-neue-bold tracking-[-0.02em] px-5 md:px-7 mb-2">
                ReLOC
              </h3>
              <hr className="max-w-3xs border-marigold border-2" />
              <div className="px-5 md:px-7 text-white">
                <p className="my-5 text-sm md:text-base">
                  If you’re 62 or older, this loan can cover the cost of
                  construction with no monthly payment – and no need to
                  refinance.
                </p>
                <p className="text-lg md:text-xl font-helvetica-neue-bold tracking-[-0.02em]">
                  Loan Amounts of <br />
                  $150,000 - $3,000,000
                </p>
              </div>

              <div className="table-wrapper mt-5">
                <div className="grid grid-cols-2 gap-3 md:gap-5 text-white bg-white/10 px-5 md:px-7 py-4 md:py-5">
                  <h3 className="text-sm md:text-base font-arial">Rate</h3>
                  <h3 className="text-sm md:text-base font-arial font-bold tracking-[-0.02em]">
                    Fixed Rate
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-5 text-white px-5 md:px-7 py-4 md:py-5">
                  <h3 className="text-sm md:text-base font-arial">Terms</h3>
                  <h3 className="text-sm md:text-base font-arial font-bold tracking-[-0.02em]">
                    30 year term, no pre-payment penalty
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-5 text-white bg-white/10 px-5 md:px-7 py-4 md:py-5">
                  <h3 className="text-sm md:text-base font-arial">
                    Borrowing Power
                  </h3>
                  <h3 className="text-sm md:text-base font-arial font-bold tracking-[-0.02em]">
                    Depends on home equity and age of applicants
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-5 text-white px-5 md:px-7 py-4 md:py-5">
                  <h3 className="text-sm md:text-base font-arial">
                    Disbursement
                  </h3>
                  <h3 className="text-sm md:text-base font-arial font-bold tracking-[-0.02em]">
                    Line of credit with checkbook to spend funds
                  </h3>
                </div>
              </div>
            </div>

            {/* The remaining 3 cards:
                Apply the SAME mobile changes you see above:
                - rounded-xl lg:rounded-none overflow-hidden
                - px-5 md:px-7
                - text-2xl md:text-3xl
                - gap-3 md:gap-5
                - py-4 md:py-5
                - grid-cols-1 lg:grid-cols-3 already handles stacking
            */}
          </div>
        </div>

        {/* CTA */}
        <div className="cta-wrapper mt-10 px-4 md:px-10 pt-8 md:pt-10 grid grid-cols-1 md:grid-cols-10 gap-6 items-center">
          <div className="text-dark-green md:col-span-7">
            <h4 className="font-arial text-2xl md:text-4xl font-bold tracking-[-0.02em]">
              Not sure which is best for you?
            </h4>
            <p className="text-base md:text-xl font-arial font-normal mt-3">
              Let our financing experts walk you through your options, answer
              your questions, and help you find a plan that fits your budget and
              timeline.
            </p>
          </div>

          <div className="md:col-span-3">
            <Link
              className="w-full md:w-auto border-lightYellow text-white tracking-[-0.02em] bg-lightYellow md:text-lg font-helvetica-neue-bold rounded-md px-8 pt-[13px] pb-[10px] px-5 hover:bg-green cursor-pointer"
              to="/contact-us"
            >
              Schedule a Call
            </Link>
            {/* <button className="w-full md:w-auto border-lightYellow text-white tracking-[-0.05em] bg-lightYellow md:text-lg font-helvetica-neue-bold rounded-md pt-2 pb-1 px-5 hover:bg-green cursor-pointer">
              Schedule a Call
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
