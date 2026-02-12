import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREASE_QTY,
    DECREASE_QTY
} from "./CartActions";

export const CartReducer = (state, action) => {
    switch (action.type) {

        case ADD_TO_CART: {
            const exitingItem = state.find(item => item.id === action.payload.id);

            if (exitingItem) {
                state.map(item =>
                    item.id === action.payload.id
                        ? { ...state, quantity: item.quantity + 1 }
                        : item)
            }

            return [
                ...state,
                { ...action.payload, quantity: 1 }
            ]
        }

        case REMOVE_FROM_CART:

            return state.filter(
                item => item.id !== action.payload
            );

        case INCREASE_QTY:
            return state.map(item =>
                item.id === action.payload
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

        case DECREASE_QTY:
            return state
                .map(item =>
                    item.id === action.payload
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0);

        default:
            return state;
    }
}