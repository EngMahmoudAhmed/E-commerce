import { useContext } from "react";
import { CreditCard, User, Calendar, Lock } from "lucide-react";
import { PaymentContext } from "../../context/payment/PaymentContext";

export default function PaymentForm() {
    const { dispatch } = useContext(PaymentContext);

    const update = (field, value) => {
        dispatch({ type: "UPDATE_FIELD", field, value });
    };

    return (
        <div className="rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Lock className="text-indigo-600" />
                Secure Payment
            </h2>

            <Input
                icon={<CreditCard />}
                placeholder="Card Number"
                onChange={(e) => update("number", e.target.value)}
            />

            <Input
                icon={<User />}
                placeholder="Card Holder"
                onChange={(e) => update("name", e.target.value)}
            />

            <div className="grid grid-cols-2 gap-4">
                <Input
                    icon={<Calendar />}
                    placeholder="MM/YY"
                    onChange={(e) => update("expiry", e.target.value)}
                />

                <input
                    type="password"
                    placeholder="CVC"
                    className="border rounded-lg px-3 py-2"
                    onChange={(e) => update("cvc", e.target.value)}
                />
            </div>
        </div>
    );
}

const Input = ({ icon, ...props }) => (
    <div className="relative mb-4">
        <span className="absolute left-3 top-3 text-gray-400">
            {icon}
        </span>
        <input
            {...props}
            className="w-full border rounded-lg pl-10 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
        />
    </div>
);
