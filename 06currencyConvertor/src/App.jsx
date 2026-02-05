import { useState } from "react";
import InputBox from "./components/InputBox";
import useCorrecyInfo from "./hooks/useCurrencycycleinfo";

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("INR");
    const [covertedAmount, setConvertedAmount] = useState(0);

    const { data: currencyInfoFrom, loading: loadingFrom } = useCorrecyInfo(from);
    const { data: currencyInfoTo } = useCorrecyInfo(to);

    const optionsFrom = Object.keys(currencyInfoFrom);
    const optionsTo = Object.keys(currencyInfoTo);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
        setAmount(covertedAmount);
    };

    const convert = () => {
        setConvertedAmount(Number(amount) * Number(currencyInfoFrom[to]));
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500">
                <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="mb-4">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange={setAmount}
                                onCurrencChanage={(currecy) => setFrom(currecy)}
                                currencyOption={optionsFrom}
                                selectCurrency={from}
                            />
                        </div>
                        <div className="flex justify-center mb-4">
                            <button
                                type="button"
                                className="border-2 border-blue-600 rounded-full bg-white text-blue-600 px-4 py-2 transition duration-300 hover:bg-blue-600 hover:text-white"
                                onClick={swap}
                            >
                                Swap
                            </button>
                        </div>
                        <div className="mb-4">
                            <InputBox
                                label="To"
                                amount={covertedAmount}
                                onAmountChange={setConvertedAmount}
                                onCurrencChanage={(currecy) => setTo(currecy)}
                                currencyOption={optionsTo}
                                selectCurrency={to}
                                amountDisable={true}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loadingFrom}
                            className={`w-full px-4 py-3 rounded-lg text-white transition duration-300 ${
                                loadingFrom ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                            }`}
                        >
                            {loadingFrom ? "Loading rates..." : `Convert ${from} to ${to}`}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default App;
