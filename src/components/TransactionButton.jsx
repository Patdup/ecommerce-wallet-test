import React, { useState } from 'react';

export default function TransactionButton() {
    const [buttonText, setButtonText] = useState('Send Test Transaction');
    const [isProcessing, setIsProcessing] = useState(false);

    const simulateTransaction = async () => {
        setIsProcessing(true);
        setButtonText('Confirm in wallet...');

        await new Promise(resolve => setTimeout(resolve, 1500));
        setButtonText('Transaction pending...');

        await new Promise(resolve => setTimeout(resolve, 1500));
        setButtonText('✅ Minted!');

        setTimeout(() => {
            setButtonText('Send Test Transaction');
            setIsProcessing(false);
        }, 2000);
    };

    return (
        <button
            onClick={simulateTransaction}
            disabled={isProcessing}
            className="btn btn-outline-dark m-2"
        >
            {buttonText}
        </button>
    );
}