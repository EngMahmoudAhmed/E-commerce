import { useContext } from "react";
import { PaymentContext } from "../../context/payment/PaymentContext";
import { toast } from "react-toastify";

export default function PayButton() {
    const { state, dispatch } = useContext(PaymentContext);

    const handlePay = async () => {
        dispatch({ type: "PAYMENT_START" });

        try {
            await new Promise((res) => setTimeout(res, 2000)); // fake API
            dispatch({ type: "PAYMENT_SUCCESS" });
            toast.success("Payment Successful ✅");
        } catch {
            dispatch({ type: "PAYMENT_ERROR", error: "Payment failed" });
        }
    };

    return (
        <button
            onClick={handlePay}
            disabled={state.loading}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg mt-6 disabled:opacity-50 cursor-pointer"
        >
            {state.loading ? "Processing..." : "Pay $120.00"}
        </button>
    );
}
