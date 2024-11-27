"use client";
import { CircleX } from "lucide-react";
import { useState } from "react";
import Modal from "react-modal";
const page = () => {
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [tokenID, setTokenID] = useState("");
  const [inv, setInv] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //https://gateway-api.kalp.studio/v1/contract/kalp/query/L4KUVPw5xLRrCuZchJjY9QeVa8C18QQO1732723096087/TransferSBT
    // {
    //     "network": "TESTNET",
    //     "blockchain": "KALP",
    //     "walletAddress": "6e62978a578c0db22a695cc11662e35ea8267db8",
    //     "args": {
    //       "from": "string",
    //       "to": "string",
    //       "tokenID": "string"
    //     }
    //   }

    fetch(
      `https://gateway-api.kalp.studio/v1/contract/kalp/query/${process.env.NEXT_PUBLIC_MY_CON_ADDR}/TransferSBT`,
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
            from: sender,
            to: receiver,
            tokenID: tokenID,
          },
        }),
      }
    ).then((e) => {
      e.json().then((data) => {
        setInv(true);
        console.log(data);
      });
    });
  };
  Modal.setAppElement(document.getElementById('root'));
  return (
    <div className="tst absolute w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 ">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            {/* <Award className="h-16 w-16 text-indigo-600" /> */}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            OnChain Certification
          </h1>
          <p className="text-lg text-gray-600">Transfer Token</p>
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
              placeholder="Enter Your address"
              onChange={(e) => setSender(e.target.value)}
            />
          </div>
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
              placeholder="Enter Recivers address"
              onChange={(e) => setReceiver(e.target.value)}
            />
          </div>
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
              placeholder="Enter TokenID"
              onChange={(e) => setTokenID(e.target.value)}
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
      <Modal
        isOpen={inv}
        
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <div className="max-w-lg mx-auto p-6 justify-center  ">
        <div className="flex justify-end -translate-y-5 translate-x-5 cursor-pointer">
        <CircleX onClick={()=>{setInv(false)}} />
        </div>
          <div className="bg-red-200 p-4 rounded-md">
            <p className="text-red-800">SBT are NON-Transferable</p>

            <p className="text-red-800">
              Soulbound certificates are digital credentials tied permanently to
              a person’s identity, embodying a key concept from Soulbound Tokens
              (SBTs). SBTs are a type of blockchain-based token that cannot be
              transferred or traded, designed to represent an individual's
              accomplishments, affiliations, or attributes securely and
              transparently. Much like a resume or diploma, SBTs serve as
              immutable proof of credentials, ensuring authenticity and reducing
              fraud. Since they are bound to the owner’s unique wallet, these
              tokens maintain their integrity even in decentralized ecosystems,
              offering innovative ways to manage identity verification,
              professional qualifications, and personal achievements in a Web3
              context.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default page;
