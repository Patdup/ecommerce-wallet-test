## Run Locally

Clone the project

```bash
  git clone https://dredsoft-admin@bitbucket.org/dredsoft/ecommerce.git
```

Go to the project directory

```bash
  cd eCommerce
```

Install dependencies

```bash
  npm install

  or 

  npm install react-material-ui-carousel --save --legacy-peer-deps
```

Start the server

```bash
  npm start
```

The server should now be running. You can access the application by opening a web browser and entering the following URL:

```bash
  http://localhost:3000
```

# Blockchain Wallet Integration - MVP Test

## Files Added
- `/src/hooks/useWallet.js`: Manages wallet connection, account, and network state. Listens to `chainChanged` and `accountsChanged`.
- `/src/components/WalletConnector.jsx`: Connect/disconnect MetaMask wallet. Displays account and network.
- `/src/components/TransactionButton.jsx`: Simulates a transaction with step-based UI feedback.
- `/src/components/Navbar.jsx`: Integrated WalletConnector and TransactionButton in the navbar.

## Features
- **Wallet Connection:** Via MetaMask with account + network display.
- **Network Change Detection:** Updates UI on `chainChanged`.
- **Account Change Detection:** Updates or disconnects on `accountsChanged`.
- **Transaction Simulation:** Shows "Confirm in wallet", "Transaction pending", then "✅ Minted!".

## Notes
UI sync is handled via React state updates from the `useWallet` hook and local states in `TransactionButton`.