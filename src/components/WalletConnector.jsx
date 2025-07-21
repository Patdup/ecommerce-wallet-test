import React from 'react';
import useWallet from '../hooks/useWallet';

function shortenAddress(address) {
    return address ? `${address.slice(0, 6)}...${address.slice(-4)}` : '';
}

export default function WalletConnector() {
    const { account, network, connectWallet, disconnectWallet } = useWallet();

    return (
        <>
            {account ? (
                <button onClick={disconnectWallet} className="btn btn-outline-dark m-2">
                    {shortenAddress(account)} ({network}) - Disconnect
                </button>
            ) : (
                <button onClick={connectWallet} className="btn btn-outline-dark m-2">
                    Connect Wallet
                </button>
            )}
        </>
    );
}