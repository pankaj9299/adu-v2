import { useState, useEffect } from "react";

const formatINR = (value) => {
  if (!Number.isFinite(value)) return "0";
  return value.toLocaleString("en-US");
};

const Calculator = () => {
  const [incomeExpenses, setIncomeExpenses] = useState({
    monthlyEmploymentIncome: 0,
    otherMonthlyIncome: 0,
    housingPaymentIfBuyingDontInclude: 0,
    carPayment: 0,
    propertyTaxesMonthly: 0,
    homeownersInsuranceMonthly: 0,
    personalLoan: 0,
    creditCardMinimumsAllCards: 0,
  });

  const [totalFinder, setTotalFinder] = useState({
    totalMonthlyIncome: 0,
    totalExpenses: 0,
    CurrentDebtToIncomeRatio: 0,
    availableDTIRemaining: 0,
    maxAmountQualified: 0,
    monthlyPaymentOnMaxAmount: 0,
  });

  const handleIncomeExpenses = (value, type) => {
    if (value === "") value = 0;

    setIncomeExpenses({
      ...incomeExpenses,
      [type]: value,
    });
  };

  useEffect(() => {
    const totalMonthlyIncome =
      parseFloat(incomeExpenses.monthlyEmploymentIncome) +
      parseFloat(incomeExpenses.otherMonthlyIncome);

    const totalExpenses =
      parseFloat(incomeExpenses.housingPaymentIfBuyingDontInclude) +
      parseFloat(incomeExpenses.carPayment) +
      parseFloat(incomeExpenses.propertyTaxesMonthly) +
      parseFloat(incomeExpenses.homeownersInsuranceMonthly) +
      parseFloat(incomeExpenses.personalLoan) +
      parseFloat(incomeExpenses.creditCardMinimumsAllCards);

    const CurrentDebtToIncomeRatio =
      totalMonthlyIncome > 0 ? totalExpenses / totalMonthlyIncome : 0;
    const availableDTIRemaining = Math.max(0, 0.5 - CurrentDebtToIncomeRatio);
    const displayDTI = (CurrentDebtToIncomeRatio * 100).toFixed(2) + "%";
    const displayAvailableDTI = (availableDTIRemaining * 100).toFixed(2) + "%";

    const maxDebtAllowed = totalMonthlyIncome * 0.5;
    const availableMonthlyPayment = Math.max(0, maxDebtAllowed - totalExpenses);
    const r = 0.065 / 12;
    const n = 30 * 12;

    const maxAmountQualified =
      availableMonthlyPayment * ((1 - Math.pow(1 + r, -n)) / r);
    const monthlyPaymentOnMaxAmount = availableMonthlyPayment;

    console.log("maxAmountQualified", maxAmountQualified);
    console.log("monthlyPaymentOnMaxAmount", monthlyPaymentOnMaxAmount);

    setTotalFinder({
      totalMonthlyIncome,
      totalExpenses,
      CurrentDebtToIncomeRatio,
      availableDTIRemaining,
      maxAmountQualified,
      monthlyPaymentOnMaxAmount,
    });
  }, [incomeExpenses]);

  // return (
  //   <>
  //     <section>
  //       <div className="container md:p-0">
  //         <div className="text-wrapper">
  //           <h2 className="font-arial font-normal leading-[80px] text-green text-85 tracking-[-0.05em]">
  //             How Much Do You Qualify For?
  //           </h2>
  //           <p className="text-2xl text-green my-10">
  //             One of the first steps to determining your budget is to find how
  //             how big of a loan you qualify for based on your debt-to-income
  //             ratio (DTI).
  //           </p>
  //           <p className="text-2xl text-green mb-5">
  //             Most loans limit your monthly debt (including a new loan) to no
  //             more than 50% of your monthly income. Calculate your income and
  //             debt and find out how much loan you qualify for.
  //           </p>
  //         </div>
  //         <div className="form-wrapper">
  //           <div className="income">
  //             <h3 className="bg-marigold text-white pt-8 pb-7 px-5 text-3xl font-helvetica-neue-bold leading-0 tracking-[-0.02em]">
  //               Income
  //             </h3>
  //             <div className="flex gap-5 mt-5 px-7">
  //               <div className="input-wrapper flex-1/3">
  //                 <label className="block text-sm sm:text-base md:text-xl text-green font-bold font-arial mb-2">
  //                   Monthly Employment Income
  //                 </label>
  //                 <input
  //                   type="number"
  //                   className="border-1 rounded-sm block w-full ps-3 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-xl rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
  //                   onChange={(e) =>
  //                     handleIncomeExpenses(
  //                       e.target.value,
  //                       "monthlyEmploymentIncome"
  //                     )
  //                   }
  //                 />
  //               </div>
  //               <div className="input-wrapper flex-1/3">
  //                 <label className="block text-sm sm:text-base md:text-xl text-green font-bold font-arial mb-2">
  //                   Other Monthly Income
  //                 </label>
  //                 <div class="relative">
  //                   <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
  //                     <img src="/image/financing/dollar.svg" alt="dollar" />
  //                   </div>
  //                   <input
  //                     type="number"
  //                     className="border-1 block rounded-sm w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-xl rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
  //                     onChange={(e) =>
  //                       handleIncomeExpenses(
  //                         e.target.value,
  //                         "otherMonthlyIncome"
  //                       )
  //                     }
  //                   />
  //                 </div>
  //               </div>
  //               <div className="input-wrapper flex-1/3">
  //                 <label className="block text-sm sm:text-base md:text-xl text-green font-bold font-arial mb-2">
  //                   Total Monthly Income
  //                 </label>
  //                 <div class="relative">
  //                   <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
  //                     <img src="/image/financing/dollar.svg" alt="dollar" />
  //                   </div>
  //                   <input
  //                     type="text"
  //                     readOnly="readOnly"
  //                     className="border-1 block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-xl rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body bg-adugrey rounded-sm"
  //                     value={
  //                       Number.isNaN(formatINR(totalFinder.totalMonthlyIncome))
  //                         ? 0
  //                         : totalFinder.totalMonthlyIncome
  //                     }
  //                   />
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="expenses mt-5">
  //             <h3 className="bg-marigold text-white pt-8 pb-7 px-5 text-3xl font-helvetica-neue-bold leading-0 tracking-[-0.02em]">
  //               Expenses
  //             </h3>
  //             <div className="flex flex-row gap-5 mt-5 px-7">
  //               <div className="basis-1/2">
  //                 <div className="input-wrapper">
  //                   <label className="block text-sm sm:text-base md:text-xl text-green font-bold font-arial mb-2">
  //                     Housing Payment (if buying, don’t include)
  //                   </label>
  //                   <div class="relative">
  //                     <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
  //                       <img src="/image/financing/dollar.svg" alt="dollar" />
  //                     </div>
  //                     <input
  //                       type="number"
  //                       className="text-xl rounded-sm border-1 block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
  //                       onChange={(e) =>
  //                         handleIncomeExpenses(
  //                           e.target.value,
  //                           "housingPaymentIfBuyingDontInclude"
  //                         )
  //                       }
  //                     />
  //                   </div>
  //                 </div>
  //                 <div className="input-wrapper my-5">
  //                   <label className="block text-sm sm:text-base md:text-xl text-green font-bold font-arial mb-2">
  //                     Property Taxes (Monthly)
  //                   </label>
  //                   <div class="relative">
  //                     <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
  //                       <img src="/image/financing/dollar.svg" alt="dollar" />
  //                     </div>
  //                     <input
  //                       type="number"
  //                       className="border-1 block rounded-sm w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-xl rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
  //                       onChange={(e) =>
  //                         handleIncomeExpenses(
  //                           e.target.value,
  //                           "propertyTaxesMonthly"
  //                         )
  //                       }
  //                     />
  //                   </div>
  //                 </div>
  //                 <div className="input-wrapper">
  //                   <label className="block text-sm sm:text-base md:text-xl text-green font-bold font-arial mb-2">
  //                     Personal Loan
  //                   </label>
  //                   <input
  //                     type="number"
  //                     className="border-1 block rounded-sm w-full ps-3 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-xl rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
  //                     onChange={(e) =>
  //                       handleIncomeExpenses(e.target.value, "personalLoan")
  //                     }
  //                   />
  //                 </div>
  //               </div>
  //               <div className="basis-1/2">
  //                 <div className="input-wrapper">
  //                   <label className="block text-sm sm:text-base md:text-xl text-green font-bold font-arial mb-2">
  //                     Car Payment
  //                   </label>
  //                   <div class="relative">
  //                     <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
  //                       <img src="/image/financing/dollar.svg" alt="dollar" />
  //                     </div>
  //                     <input
  //                       type="number"
  //                       className="border-1 block rounded-sm w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-xl rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
  //                       onChange={(e) =>
  //                         handleIncomeExpenses(e.target.value, "carPayment")
  //                       }
  //                     />
  //                   </div>
  //                 </div>
  //                 <div className="input-wrapper my-5">
  //                   <label className="block text-sm sm:text-base md:text-xl text-green font-bold font-arial mb-2">
  //                     Homeowner’s Insurance (Monthly)
  //                   </label>
  //                   <div class="relative">
  //                     <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
  //                       <img src="/image/financing/dollar.svg" alt="dollar" />
  //                     </div>
  //                     <input
  //                       type="number"
  //                       className="border-1 block rounded-sm w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-xl rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
  //                       onChange={(e) =>
  //                         handleIncomeExpenses(
  //                           e.target.value,
  //                           "homeownersInsuranceMonthly"
  //                         )
  //                       }
  //                     />
  //                   </div>
  //                 </div>
  //                 <div className="input-wrapper">
  //                   <label className="block text-sm sm:text-base md:text-xl text-green font-bold font-arial mb-2">
  //                     Credit Card Minimums (All cards)
  //                   </label>
  //                   <div class="relative">
  //                     <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
  //                       <img src="/image/financing/dollar.svg" alt="dollar" />
  //                     </div>
  //                     <input
  //                       type="number"
  //                       className="border-1 block rounded-sm w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-xl rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
  //                       onChange={(e) =>
  //                         handleIncomeExpenses(
  //                           e.target.value,
  //                           "creditCardMinimumsAllCards"
  //                         )
  //                       }
  //                     />
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="flex flex-row gap-5 mt-5 px-7">
  //               <div className="basis-1/3">
  //                 <div className="input-wrapper">
  //                   <label className="block text-sm sm:text-base md:text-xl text-green font-bold font-arial mb-2">
  //                     Total Expenses
  //                   </label>
  //                   <div class="relative">
  //                     <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
  //                       <img src="/image/financing/dollar.svg" alt="dollar" />
  //                     </div>
  //                     <input
  //                       type="text"
  //                       className="border-1 block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-xl rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body bg-adugrey rounded-sm"
  //                       readOnly="readOnly"
  //                       value={
  //                         Number.isNaN(formatINR(totalFinder.totalExpenses))
  //                           ? 0
  //                           : totalFinder.totalExpenses
  //                       }
  //                     />
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="basis-1/3">
  //                 <div className="input-wrapper">
  //                   <label className="block text-sm sm:text-base md:text-xl text-green font-bold font-arial mb-2">
  //                     Current Debt-to-Income Ratio (DTI)
  //                   </label>
  //                   <div class="relative">
  //                     <input
  //                       type="number"
  //                       className="border-1 block w-full pe-9 ps-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-xl rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body bg-adugrey rounded-sm"
  //                       readOnly="readOnly"
  //                       value={
  //                         Number.isNaN(
  //                           (
  //                             totalFinder.CurrentDebtToIncomeRatio * 100
  //                           ).toFixed(2)
  //                         )
  //                           ? 0
  //                           : (
  //                               totalFinder.CurrentDebtToIncomeRatio * 100
  //                             ).toFixed(2)
  //                       }
  //                     />
  //                     <div class="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
  //                       <img
  //                         src="/image/financing/percentage.svg"
  //                         alt="percentage"
  //                       />
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="basis-1/3">
  //                 <div className="input-wrapper">
  //                   <label className="block text-sm sm:text-base md:text-xl text-green font-bold font-arial mb-2">
  //                     Available DTI Remaining
  //                   </label>
  //                   <div className="relative">
  //                     <input
  //                       type="number"
  //                       className="border-1 block w-full pe-9 ps-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-xl rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body bg-adugrey rounded-sm"
  //                       readOnly="readOnly"
  //                       value={
  //                         Number.isNaN(
  //                           (totalFinder.availableDTIRemaining * 100).toFixed(2)
  //                         )
  //                           ? 0
  //                           : (totalFinder.availableDTIRemaining * 100).toFixed(
  //                               2
  //                             )
  //                       }
  //                     />
  //                     <div class="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
  //                       <img
  //                         src="/image/financing/percentage.svg"
  //                         alt="percentage"
  //                       />
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //     <section className="bg-khaki">
  //       <div className="container">
  //         <div className="flex flex-row gap-5">
  //           <div className="basis-1/2">
  //             <div className="input-wrapper">
  //               <label className="block font-helvetica-neue-bold text-lg sm:text-xl md:text-3xl text-green tracking-[-0.02em] mb-2">
  //                 Max Amount Qualified:
  //               </label>
  //               <div class="relative">
  //                 <div class="absolute inset-y-0 top-px start-0 flex items-center p-2 pointer-events-none w-20">
  //                   <img
  //                     src="/image/financing/white-dollar.svg"
  //                     className="w-15 h-9.5"
  //                     alt="white-dollar"
  //                   />
  //                 </div>
  //                 <input
  //                   type="text"
  //                   className="bg-dark-teal text-white border-1 block text-5xl w-full ps-13 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body max-w-sm"
  //                   readOnly="readOnly"
  //                   value={
  //                     Number.isFinite(totalFinder.maxAmountQualified)
  //                       ? formatINR(Math.round(totalFinder.maxAmountQualified))
  //                       : "0"
  //                   }
  //                 />
  //               </div>
  //             </div>
  //           </div>
  //           <div className="basis-1/2">
  //             <div className="input-wrapper">
  //               <label className="block font-helvetica-neue-bold text-lg sm:text-xl md:text-3xl text-green tracking-[-0.02em] mb-2">
  //                 Monthly Payment on Max Amount:
  //               </label>
  //               <div class="relative">
  //                 <div class="absolute inset-y-0 top-px start-0 flex items-center p-2 pointer-events-none w-20">
  //                   <img
  //                     src="/image/financing/white-dollar.svg"
  //                     className="w-15 h-9.5"
  //                     alt="white-dollar"
  //                   />
  //                 </div>
  //                 <input
  //                   type="text"
  //                   className="bg-dark-teal text-white border-1 block text-5xl w-full ps-13 pe-3 py-2.5 border border-default-medium rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body max-w-sm"
  //                   readOnly="readOnly"
  //                   value={
  //                     Number.isFinite(totalFinder.monthlyPaymentOnMaxAmount)
  //                       ? formatINR(
  //                           Math.round(totalFinder.monthlyPaymentOnMaxAmount)
  //                         )
  //                       : "0"
  //                   }
  //                 />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // );
  return (
    <>
      <section>
        <div className="container px-4 md:px-0 md:p-0">
          <div className="text-wrapper">
            <h2 className="font-arial font-normal leading-tight md:leading-[80px] text-green text-4xl md:text-[85px] tracking-[-0.05em]">
              How Much Do You Qualify For?
            </h2>

            <p className="text-base md:text-2xl text-green my-6 md:my-10">
              One of the first steps to determining your budget is to find how
              how big of a loan you qualify for based on your debt-to-income
              ratio (DTI).
            </p>

            <p className="text-base md:text-2xl text-green mb-5">
              Most loans limit your monthly debt (including a new loan) to no
              more than 50% of your monthly income. Calculate your income and
              debt and find out how much loan you qualify for.
            </p>
          </div>

          <div className="form-wrapper">
            {/* INCOME */}
            <div className="income">
              <h3 className="bg-marigold text-white pt-6 md:pt-8 pb-5 md:pb-7 px-5 text-xl md:text-3xl font-helvetica-neue-bold tracking-[-0.02em]">
                Income
              </h3>

              {/* 3 columns on md+, stacked on mobile */}
              <div className="flex flex-col md:flex-row gap-5 mt-5 px-4 md:px-7">
                <div className="input-wrapper w-full md:basis-1/3">
                  <label className="block text-sm sm:text-base md:text-xl text-green font-bold font-arial mb-2">
                    Monthly Employment Income
                  </label>
                  <input
                    type="number"
                    className="border-1 rounded-sm block w-full ps-3 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-base md:text-xl rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                    onChange={(e) =>
                      handleIncomeExpenses(
                        e.target.value,
                        "monthlyEmploymentIncome"
                      )
                    }
                  />
                </div>

                <div className="input-wrapper w-full md:basis-1/3">
                  <label className="block text-sm sm:text-base md:text-xl text-green font-bold font-arial mb-2">
                    Other Monthly Income
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <img src="/image/financing/dollar.svg" alt="dollar" />
                    </div>
                    <input
                      type="number"
                      className="border-1 block rounded-sm w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-base md:text-xl rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                      onChange={(e) =>
                        handleIncomeExpenses(
                          e.target.value,
                          "otherMonthlyIncome"
                        )
                      }
                    />
                  </div>
                </div>

                <div className="input-wrapper w-full md:basis-1/3">
                  <label className="block text-sm sm:text-base md:text-xl text-green font-bold font-arial mb-2">
                    Total Monthly Income
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <img src="/image/financing/dollar.svg" alt="dollar" />
                    </div>
                    <input
                      type="text"
                      readOnly
                      className="border-1 block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-base md:text-xl rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body bg-adugrey rounded-sm"
                      value={
                        Number.isNaN(formatINR(totalFinder.totalMonthlyIncome))
                          ? 0
                          : totalFinder.totalMonthlyIncome
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* EXPENSES */}
            <div className="expenses mt-5">
              <h3 className="bg-marigold text-white pt-6 md:pt-8 pb-5 md:pb-7 px-5 text-xl md:text-3xl font-helvetica-neue-bold tracking-[-0.02em]">
                Expenses
              </h3>

              {/* 2 columns on md+, stacked on mobile */}
              <div className="flex flex-col md:flex-row gap-5 mt-5 px-4 md:px-7">
                <div className="w-full md:basis-1/2">
                  <div className="input-wrapper">
                    <label className="block text-sm sm:text-base md:text-xl text-green font-bold font-arial mb-2">
                      Housing Payment (if buying, don’t include)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <img src="/image/financing/dollar.svg" alt="dollar" />
                      </div>
                      <input
                        type="number"
                        className="text-base md:text-xl rounded-sm border-1 block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                        onChange={(e) =>
                          handleIncomeExpenses(
                            e.target.value,
                            "housingPaymentIfBuyingDontInclude"
                          )
                        }
                      />
                    </div>
                  </div>

                  <div className="input-wrapper my-5">
                    <label className="block text-sm sm:text-base md:text-xl text-green font-bold font-arial mb-2">
                      Property Taxes (Monthly)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <img src="/image/financing/dollar.svg" alt="dollar" />
                      </div>
                      <input
                        type="number"
                        className="border-1 block rounded-sm w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-base md:text-xl rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                        onChange={(e) =>
                          handleIncomeExpenses(
                            e.target.value,
                            "propertyTaxesMonthly"
                          )
                        }
                      />
                    </div>
                  </div>

                  <div className="input-wrapper">
                    <label className="block text-sm sm:text-base md:text-xl text-green font-bold font-arial mb-2">
                      Personal Loan
                    </label>
                    <input
                      type="number"
                      className="border-1 block rounded-sm w-full ps-3 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-base md:text-xl rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                      onChange={(e) =>
                        handleIncomeExpenses(e.target.value, "personalLoan")
                      }
                    />
                  </div>
                </div>

                <div className="w-full md:basis-1/2">
                  <div className="input-wrapper">
                    <label className="block text-sm sm:text-base md:text-xl text-green font-bold font-arial mb-2">
                      Car Payment
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <img src="/image/financing/dollar.svg" alt="dollar" />
                      </div>
                      <input
                        type="number"
                        className="border-1 block rounded-sm w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-base md:text-xl rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                        onChange={(e) =>
                          handleIncomeExpenses(e.target.value, "carPayment")
                        }
                      />
                    </div>
                  </div>

                  <div className="input-wrapper my-5">
                    <label className="block text-sm sm:text-base md:text-xl text-green font-bold font-arial mb-2">
                      Homeowner’s Insurance (Monthly)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <img src="/image/financing/dollar.svg" alt="dollar" />
                      </div>
                      <input
                        type="number"
                        className="border-1 block rounded-sm w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-base md:text-xl rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                        onChange={(e) =>
                          handleIncomeExpenses(
                            e.target.value,
                            "homeownersInsuranceMonthly"
                          )
                        }
                      />
                    </div>
                  </div>

                  <div className="input-wrapper">
                    <label className="block text-sm sm:text-base md:text-xl text-green font-bold font-arial mb-2">
                      Credit Card Minimums (All cards)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <img src="/image/financing/dollar.svg" alt="dollar" />
                      </div>
                      <input
                        type="number"
                        className="border-1 block rounded-sm w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-base md:text-xl rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                        onChange={(e) =>
                          handleIncomeExpenses(
                            e.target.value,
                            "creditCardMinimumsAllCards"
                          )
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 columns on md+, stacked on mobile */}
              <div className="flex flex-col md:flex-row gap-5 mt-5 px-4 md:px-7">
                <div className="w-full md:basis-1/3">
                  <div className="input-wrapper">
                    <label className="block text-sm sm:text-base md:text-xl text-green font-bold font-arial mb-2">
                      Total Expenses
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <img src="/image/financing/dollar.svg" alt="dollar" />
                      </div>
                      <input
                        type="text"
                        className="border-1 block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-base md:text-xl rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body bg-adugrey rounded-sm"
                        readOnly
                        value={
                          Number.isNaN(formatINR(totalFinder.totalExpenses))
                            ? 0
                            : totalFinder.totalExpenses
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full md:basis-1/3">
                  <div className="input-wrapper">
                    <label className="block text-sm sm:text-base md:text-xl text-green font-bold font-arial mb-2">
                      Current Debt-to-Income Ratio (DTI)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        className="border-1 block w-full pe-9 ps-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-base md:text-xl rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body bg-adugrey rounded-sm"
                        readOnly
                        value={
                          Number.isNaN(
                            (
                              totalFinder.CurrentDebtToIncomeRatio * 100
                            ).toFixed(2)
                          )
                            ? 0
                            : (
                                totalFinder.CurrentDebtToIncomeRatio * 100
                              ).toFixed(2)
                        }
                      />
                      <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                        <img
                          src="/image/financing/percentage.svg"
                          alt="percentage"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:basis-1/3">
                  <div className="input-wrapper">
                    <label className="block text-sm sm:text-base md:text-xl text-green font-bold font-arial mb-2">
                      Available DTI Remaining
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        className="border-1 block w-full pe-9 ps-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-base md:text-xl rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body bg-adugrey rounded-sm"
                        readOnly
                        value={
                          Number.isNaN(
                            (totalFinder.availableDTIRemaining * 100).toFixed(2)
                          )
                            ? 0
                            : (totalFinder.availableDTIRemaining * 100).toFixed(
                                2
                              )
                        }
                      />
                      <div className="absolute inset-y-0 end-0 flex items-center pe-3 pointer-events-none">
                        <img
                          src="/image/financing/percentage.svg"
                          alt="percentage"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /EXPENSES */}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-khaki">
        <div className="container px-4 md:px-0">
          <div className="flex flex-col md:flex-row gap-5 py-8">
            <div className="w-full md:basis-1/2">
              <div className="input-wrapper">
                <label className="block font-helvetica-neue-bold text-lg sm:text-xl md:text-3xl text-green tracking-[-0.02em] mb-2">
                  Max Amount Qualified:
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 top-px start-0 flex items-center p-2 pointer-events-none w-20">
                    <img
                      src="/image/financing/white-dollar.svg"
                      className="w-15 h-9.5"
                      alt="white-dollar"
                    />
                  </div>
                  <input
                    type="text"
                    className="bg-dark-teal text-white border-1 block text-2xl md:text-5xl w-full ps-13 pe-3 py-2.5 border border-default-medium rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                    readOnly
                    value={
                      Number.isFinite(totalFinder.maxAmountQualified)
                        ? formatINR(Math.round(totalFinder.maxAmountQualified))
                        : "0"
                    }
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:basis-1/2">
              <div className="input-wrapper">
                <label className="block font-helvetica-neue-bold text-lg sm:text-xl md:text-3xl text-green tracking-[-0.02em] mb-2">
                  Monthly Payment on Max Amount:
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 top-px start-0 flex items-center p-2 pointer-events-none w-20">
                    <img
                      src="/image/financing/white-dollar.svg"
                      className="w-15 h-9.5"
                      alt="white-dollar"
                    />
                  </div>
                  <input
                    type="text"
                    className="bg-dark-teal text-white border-1 block text-2xl md:text-5xl w-full ps-13 pe-3 py-2.5 border border-default-medium rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
                    readOnly
                    value={
                      Number.isFinite(totalFinder.monthlyPaymentOnMaxAmount)
                        ? formatINR(
                            Math.round(totalFinder.monthlyPaymentOnMaxAmount)
                          )
                        : "0"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Calculator;
