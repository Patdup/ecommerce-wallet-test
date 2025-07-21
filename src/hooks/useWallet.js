import { useState } from 'react';
import { ethers } from 'ethers';

export default function useWallet() {
    const [provider, setProvider] = useState(null);
    const [account, setAccount] = useState(null);
    const [network, setNetwork] = useState(null);

    const connectWallet = async () => {
        if (window.ethereum) {
            const ethProvider = new ethers.providers.Web3Provider(window.ethereum);
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            setProvider(ethProvider);

            const signer = await ethProvider.getSigner();
            setAccount(await signer.getAddress());

            const networkInfo = await ethProvider.getNetwork();
            setNetwork(networkInfo.name);

            window.ethereum.on('chainChanged', handleNetworkChange);
            window.ethereum.on('accountsChanged', handleAccountsChanged);
        } else {
            alert('Please install MetaMask!');
        }
    };

    const disconnectWallet = () => {
        setProvider(null);
        setAccount(null);
        setNetwork(null);
        window.ethereum?.removeListener('chainChanged', handleNetworkChange);
        window.ethereum?.removeListener('accountsChanged', handleAccountsChanged);
    };

    const handleNetworkChange = async () => {
        if (provider) {
            const networkInfo = await provider.getNetwork();
            setNetwork(networkInfo.name);
        }
    };

    const handleAccountsChanged = (accounts) => {
        if (accounts.length > 0) {
            setAccount(accounts[0]);
        } else {
            disconnectWallet();
        }
    };

    return { account, network, connectWallet, disconnectWallet };
}