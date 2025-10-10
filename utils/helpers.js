export const findImageByProduct = (string) => {
  const finder = string
    ? string.replace(/[^a-zA-Z0-9]+/g, " ").toLowerCase()
    : "";

  let imagePath = "";
  if (finder.includes("side by")) {
    imagePath = "./image/side_by_side.png";
  } else if (finder.includes("single")) {
    imagePath = "./image/single_container.png";
  } else if (finder.includes("two story")) {
    imagePath = "./image/two_story_container.png";
  }

  return imagePath;
};

const toNumber = (v) => {
  if (typeof v === "number") return v;
  if (v == null) return NaN;
  // strip currency, commas, spaces, etc.
  return Number(String(v).replace(/[^0-9.-]/g, ""));
};

export const approxMonthlyPayment = (principal, annualRate, years) => {
  const P = toNumber(principal);
  const r = Number(annualRate);
  const y = Number(years);

  // guard: invalid or not ready yet
  if (!(P > 0) || !(y > 0) || !(r >= 0)) return null;

  const i = r / 1200; // monthly rate in decimal
  const n = y * 12;

  // handle 0% interest case
  if (i === 0) return +(P / n).toFixed(2);

  const m = (P * (i * Math.pow(1 + i, n))) / (Math.pow(1 + i, n) - 1);
  return +m.toFixed(2);
};
