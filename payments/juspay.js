///// before the Key Deactivate on working state /////


// const { Juspay } = require("expresscheckout-nodejs");
// const config = require("../keys/juspay_config.json");

// const BASE_URL =
//   config.ENV === "PRODUCTION"
//     ? "https://smartgateway.hdfc.bank.in"
//     : "https://smartgateway.hdfcuat.bank.in";

// if (!config.MERCHANT_ID || !config.API_KEY) {
//   throw new Error("Juspay config missing MERCHANT_ID or API_KEY");
// }

// const juspay = new Juspay({
//   merchantId: config.MERCHANT_ID,
//   apiKey: config.API_KEY,
//   baseUrl: BASE_URL,
// });

// console.log("✅ Juspay initialized:", {
//   merchantId: config.MERCHANT_ID,
//   env: config.ENV,
// });

// module.exports = juspay;






require("dotenv").config();
const { Juspay } = require("expresscheckout-nodejs");

const BASE_URL =
  process.env.JUSPAY_ENV === "PRODUCTION"
    ? "https://smartgateway.hdfc.bank.in"
    : "https://smartgateway.hdfcuat.bank.in";

if (!process.env.JUSPAY_MERCHANT_ID || !process.env.JUSPAY_API_KEY) {
  throw new Error("Missing Juspay ENV variables");
}

const juspay = new Juspay({
  merchantId: process.env.JUSPAY_MERCHANT_ID,
  apiKey: process.env.JUSPAY_API_KEY,
  baseUrl: BASE_URL,
});

console.log("✅ Juspay initialized:", {
  merchantId: process.env.JUSPAY_MERCHANT_ID,
  env: process.env.JUSPAY_ENV,
});

module.exports = juspay;