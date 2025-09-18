"use client";

import Iyzipay from "iyzipay";

var iyzipay = new Iyzipay({
  apiKey: process.env.IYZICO_API_KEY ?? "",
  secretKey: process.env.IYZICO_SECRET_KEY ?? "",
  uri: process.env.IYZICO_BASE_URL ?? "",
});

console.log(iyzipay);

const page = () => {
  return <div>page</div>;
};

export default page;
