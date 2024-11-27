"use client";
import { useState } from "react";
const Page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [address, setAddress] = useState("");
  const [valid, setValid] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [tid,settid]=useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetch(
      `https://gateway-api.kalp.studio/v1/contract/kalp/query/${process.env.NEXT_PUBLIC_MY_CON_ADDR}/GetSBTByOwner`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_MY_API_KEY,
        },
        body: JSON.stringify({
          network: "TESTNET",
          blockchain: "KALP",
          walletAddress: process.env.NEXT_PUBLIC_MY_FIXED_WALLET,
          args: {
            owner: address,
          },
        }),
      }
    ).then((e) => {
      e.json().then((data) => {
        if (data.status != "FAILURE") {
            settid(data.result.result.tokenID)
          setInvalid(false);
          setValid(true);
        } else {
            settid("")
          setValid(false);
          setInvalid(true);
        }
      });
    });
  };
  return (
    <div className="absolute w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 ">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            {/* <Award className="h-16 w-16 text-indigo-600" /> */}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            OnChain Certification
          </h1>
          <p className="text-lg text-gray-600">
            Enter your wallet address to check if you have a Bound Token.
          </p>
        </div>
      </div>
      <div className="max-w-md mx-auto p-6 justify-center ">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
      {valid && (
        <div className="max-w-md mx-auto p-6 justify-center bg-green-400 text-center rounded-md drop-shadow-sm">
          <p>Valid Address</p>
          <p>Token ID:{tid}</p>
        </div>
      )}
      {invalid && (
        <div className="max-w-md mx-auto p-6 justify-center bg-red-400 text-center rounded-md drop-shadow-sm">
          <p>Address Dosesnt Have a bound token</p>
        </div>
      )}
    </div>
  );
};

export default Page;
