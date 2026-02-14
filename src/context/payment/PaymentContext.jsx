import { createContext, useReducer } from "react";

export const PaymentContext = createContext();

const initialState = {
    card: {
        number: "",
        name: "",
        expiry: "",
        cvc: "",
    },
    loading: false,
    error: null,
};

function paymentReducer(state, action) {
    switch (action.type) {
        case "UPDATE_FIELD":
            return {
                ...state,
                card: {
                    ...state.card,
                    [action.field]: action.value,
                },
            };

        case "PAYMENT_START":
            return { ...state, loading: true, error: null };

        case "PAYMENT_SUCCESS":
            return { ...state, loading: false };

        case "PAYMENT_ERROR":
            return { ...state, loading: false, error: action.error };

        default:
            return state;
    }
}

export const PaymentProvider = ({ children }) => {
    const [state, dispatch] = useReducer(paymentReducer, initialState);

    return (
        <PaymentContext.Provider value={{ state, dispatch }}>
            {children}
        </PaymentContext.Provider>
    );
};
