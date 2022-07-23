import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransctionModal } from "./components/NewTransactionModal";

import { useState } from "react";

import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./TransactionsContext";


export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return ( 
        <TransactionsProvider>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
            <Dashboard />

            <NewTransctionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            />

            <GlobalStyle />
        </TransactionsProvider>
    );
}