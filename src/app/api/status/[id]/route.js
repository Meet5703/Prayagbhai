import { NextResponse } from "next/server";
import sha256 from "crypto-js/sha256";
import axios from "axios";

// Define updateFormDataStatus function outside of the POST function

export async function POST(req, res) {
  try {
    const data = await req.formData();
    const status = data.get("code");
    const merchantId = data.get("merchantId");
    const transactionId = data.get("transactionId");

    const st = `/pg/v1/status/${merchantId}/${transactionId}099eb0cd-02cf-4e2a-8aca-3e6c6aff0399`;
    const checksum = sha256(st) + "###" + "1";

    const options = {
      method: "GET",
      url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${transactionId}`,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
        "X-MERCHANT-ID": `${merchantId}`
      }
    };

    const response = await axios.request(options);

    // Use the updateFormDataStatus function
    if (response.data.code === "PAYMENT_SUCCESS") {
      return NextResponse.redirect(`http://localhost:3000/success`, {
        status: 301
      });
    } else {
      return NextResponse.redirect(`http://localhost:3000/failure`, {
        status: 301
      });
    }
  } catch (error) {
    console.error("Error in /api/payment:", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error"
    });
  }
}
