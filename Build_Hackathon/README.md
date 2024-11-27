# 🎓 Build Your Own Certification System using Soulbound Tokens on Kalp Blockchain

## On-Chain Certification Challenge

---

## What is this challenge about?

This challenge involves developing a **certification system** using **Soulbound Tokens (SBTs)** on the **Kalp blockchain**. You will:

- Create a **smart contract** in **Go** that manages non-transferable certificates as Soulbound Tokens
- Issue unique certifications that cannot be transferred between addresses
- Query and verify certificates directly on the blockchain

This simulates real-world scenarios where organizations need to issue verifiable credentials that should remain permanently associated with the recipient, such as academic degrees, professional certifications, or achievement badges.

## What will you learn?

**By participating in this challenge, you will:**

- Understand the implementation of **Soulbound Tokens** (Non-transferable NFTs)
- Learn how to develop and deploy smart contracts on the **Kalp blockchain**
- Gain hands-on experience with the **Go** programming language
- Master state management in blockchain applications
- Learn about composite keys and efficient data storage patterns
- Understand authorization and access control in smart contracts
- Enhance your skills in blockchain development and decentralized applications (**dApps**)

---
## 🌟 Features

- Issue non-transferable Soulbound Tokens (SBTs)
- View certification status and details
- Modern, responsive UI built with Next.js and Tailwind CSS
- Secure authentication using API keys
- Real-time blockchain interaction

## 🛠️ Tech Stack

- **Smart Contract:** Go + Kalp SDK
- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **Blockchain:** Kalp Network
- **API:** RESTful endpoints via Kalp Studio

## 📦 Installation

### Prerequisites

- Go (>=1.19, <1.20)
- Node.js (>=14.x)
- npm (>=6.x)

### Smart Contract Setup

1. Clone the repository:
```bash
git clone https://github.com/thekalpstudio/Build_Hackathon.git
cd Build_Hackathon
```

2. Navigate to smart contract directory:
```bash
cd sbtkalp
```

3. Install dependencies:
```bash
go mod tidy
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd..
cd certification
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```bash
cp .env.example .env.local
```

4. Update environment variables:
```env
NEXT_PUBLIC_API_KEY=your-kalp-api-key
```

## 🚀 Deployment

### Smart Contract Deployment

1. Log in to [Kalp Studio](https://studio.kalp.network)
2. Navigate to "Deploy Contract"
3. Upload the smart contract
4. Save the generated contract ID and API endpoints

### Frontend Deployment

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm run dev
```

## 🔑 API Configuration

Update the following in your frontend:

1. Contract ID: `vHYQcRijQGB3UpVhqc3UeBM2D3ztjPuS1732534432325`
2. API Key: Your generated API key
3. Default wallet: `ded665bca7d412891f44a571d908b66184b0ee10`

## 📝 Smart Contract Methods

### Initialize
```go
Initialize(sdk kalpsdk.TransactionContextInterface, metadata string) error
```
Initializes the SBT contract with metadata.

### MintSBT
```go
MintSBT(sdk kalpsdk.TransactionContextInterface, address string) error
```
Issues a new SBT to the specified address.

### QuerySBT
```go
QuerySBT(sdk kalpsdk.TransactionContextInterface, owner string, tokenID string) (*SoulboundToken, error)
```
Retrieves SBT details by owner and token ID.

### GetSBTByOwner
```go
GetSBTByOwner(sdk kalpsdk.TransactionContextInterface, owner string) (*SoulboundToken, error)
```
Retrieves SBT details by owner address.

### GetAllTokenIDs
```go
GetAllTokenIDs(sdk kalpsdk.TransactionContextInterface) ([]string, error)
```
Returns all issued token IDs.

## 🎯 Usage Examples

### Minting a New SBT
```typescript
const mintSBT = async (recipientAddress: string) => {
  try {
    await fetch('https://gateway-api.kalp.studio/v1/contract/kalp/invoke/vHYQcRijQGB3UpVhqc3UeBM2D3ztjPuS1732534432325/MintSBT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY!,
      },
      body: JSON.stringify({
        network: "TESTNET",
        blockchain: "KALP",
        walletAddress: "ded665bca7d412891f44a571d908b66184b0ee10",
        args: {
          address: recipientAddress
        }
      })
    });
  } catch (error) {
    console.error('Error minting SBT:', error);
  }
};
```

### Querying an SBT
```typescript
const querySBT = async (owner: string, tokenId: string) => {
  // Implementation similar to mint with different endpoint
};
```

# 🏆 Add Below feature Goal To win The Hackathon SBT (Soulbound Token) Certification System

## 🎯 Hackathon Winning Goals & Requirements

### Frontend Implementation Requirements

#### 1. Certificate Query Interface
- Implement a certificate verification section that allows users to:
  - Query SBT by owner address and token ID using `QuerySBT` endpoint
  - Display certificate details in a visually appealing format
  - Show validation status and metadata
```typescript
POST https://gateway-api.kalp.studio/v1/contract/kalp/query/{contractId}/QuerySBT
{
  "network": "TESTNET",
  "blockchain": "KALP",
  "walletAddress": "ded665bca7d412891f44a571d908b66184b0ee10",
  "args": {
    "owner": "string",
    "tokenID": "string"
  }
}
```

#### 2. Certificate Ownership Checker
- Create an interface to check certificate ownership that:
  - Retrieves SBT details by owner address using `GetSBTByOwner` endpoint
  - Shows certificate status and details
  - Provides easy verification for institutions
```typescript
POST https://gateway-api.kalp.studio/v1/contract/kalp/query/{contractId}/GetSBTByOwner
{
  "network": "TESTNET",
  "blockchain": "KALP",
  "walletAddress": "ded665bca7d412891f44a571d908b66184b0ee10",
  "args": {
    "owner": "string"
  }
}
```


#### 3. Transfer Restriction Notice
- Implement transfer attempt handling that:
  - Shows proper error messages when transfer is attempted using `TransferSBT` endpoint
  - Explains the soulbound nature of the certificates
  - Provides educational information about SBTs
```typescript
POST https://gateway-api.kalp.studio/v1/contract/kalp/query/{contractId}/TransferSBT
{
  "network": "TESTNET",
  "blockchain": "KALP",
  "walletAddress": "ded665bca7d412891f44a571d908b66184b0ee10",
  "args": {
    "from": "string",
    "to": "string",
    "tokenID": "string"
  }
}
```

### UI/UX Requirements

1. **Dashboard Layout**
   - Clean, modern interface with clear navigation
   - Responsive design for all screen sizes
   - Loading states and error handling
   - Toast notifications for actions

### Technical Requirements

1. **API Integration**
   ```typescript
   // Example API hook structure
   const useSBTApi = () => {
     const querySBT = async (owner: string, tokenId: string) => {
       // Implementation
     };

     const getSBTByOwner = async (owner: string) => {
       // Implementation
     };

     const getAllTokenIDs = async () => {
       // Implementation
     };

     const attemptTransfer = async (from: string, to: string, tokenId: string) => {
       // Implementation
     };

     return { querySBT, getSBTByOwner, getAllTokenIDs, attemptTransfer };
   };
   ```



## 🔒 Security

- API keys are stored securely in environment variables
- Non-transferable tokens ensure certificate authenticity
- Smart contract includes authorization checks

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

