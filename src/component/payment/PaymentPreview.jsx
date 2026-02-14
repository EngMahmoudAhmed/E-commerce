import { useContext } from "react";
import { ShieldCheck } from "lucide-react";
import { PaymentContext } from "../../context/payment/PaymentContext";

export default function PaymentPreview() {
    const { state } = useContext(PaymentContext);
    const { number, name, expiry } = state.card;

    return (
        <div className="rounded-2xl p-6 bg-gradient-to-br from-indigo-600 to-purple-700 shadow-xl">
            <div className="flex justify-between mb-8">
                <h3 className="font-semibold">Credit Card</h3>
                <ShieldCheck />
            </div>

            <p className="tracking-widest text-xl mb-6">
                {number || "•••• •••• •••• ••••"}
            </p>

            <div className="flex justify-between text-sm">
                <div>
                    <p className="opacity-70">Card Holder</p>
                    <p>{name || "FULL NAME"}</p>
                </div>
                <div>
                    <p className="opacity-70">Expires</p>
                    <p>{expiry || "MM/YY"}</p>
                </div>
            </div>
        </div>
    );
}
