import PaymentForm from "../component/payment/PaymentForm";
import PayButton from "../component/payment/PayButton";
import PaymentPreview from "../component/payment/PaymentPreview";

const Checkout = () => {
    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
                <PaymentPreview />
                <div>
                    <PaymentForm />
                    <PayButton />
                </div>
            </div>
        </div>
    );
};

export default Checkout;
