import { useContext } from "react";
import { CartContext } from "src/context/cartContext";

export function useCart(){
    const context = useContext(CartContext);
    return context;
}