import { useState } from "react";

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
    setIncomeExpenses({
      ...incomeExpenses,
      [type]: value,
    });

    const totalMonthlyIncome =
      incomeExpenses.monthlyEmploymentIncome +
      incomeExpenses.otherMonthlyIncome;
    const totalExpenses =
      incomeExpenses.housingPaymentIfBuyingDontInclude +
      incomeExpenses.carPayment +
      incomeExpenses.propertyTaxesMonthly +
      incomeExpenses.homeownersInsuranceMonthly +
      incomeExpenses.personalLoan +
      incomeExpenses.creditCardMinimumsAllCards;
    const CurrentDebtToIncomeRatio = "";
    const availableDTIRemaining = "";
    const maxAmountQualified = "";
    const monthlyPaymentOnMaxAmount = "";

    setTotalFinder({
      totalMonthlyIncome,
      totalExpenses,
      CurrentDebtToIncomeRatio,
      availableDTIRemaining,
      maxAmountQualified,
      monthlyPaymentOnMaxAmount,
    });
  };

  return (
    <section>
      <p>{income.monthlyEmploymentIncome}</p>
      <p>{income.otherMonthlyIncome}</p>
      <div className="container">
        <div className="text-wrapper">
          <h2>How Much Do You Qualify For?</h2>
          <p>
            One of the first steps to determining your budget is to find how how
            big of a loan you qualify for based on your debt-to-income ratio
            (DTI).
          </p>
          <p>
            Most loans limit your monthly debt (including a new loan) to no more
            than 50% of your monthly income. Calculate your income and debt and
            find out how much loan you qualify for.
          </p>
        </div>
        <div className="form-wrapper">
          <div>
            <h3>Income</h3>
            <div className="flex gap-5">
              <div className="input-wrapper flex-1/3">
                <label className="block">Monthly Employment Income</label>
                <input
                  type="text"
                  className="border-1 w-full"
                  onChange={(e) =>
                    handleIncomeExpenses(
                      e.target.value,
                      "monthlyEmploymentIncome"
                    )
                  }
                />
              </div>
              <div className="input-wrapper flex-1/3">
                <label className="block">Other Monthly Income</label>
                <input
                  type="text"
                  className="border-1 w-full"
                  onChange={(e) =>
                    handleIncomeExpenses(e.target.value, "otherMonthlyIncome")
                  }
                />
              </div>
              <div className="input-wrapper flex-1/3">
                <label className="block">Total Monthly Income</label>
                <input
                  type="text"
                  readOnly="readOnly"
                  className="border-1 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
