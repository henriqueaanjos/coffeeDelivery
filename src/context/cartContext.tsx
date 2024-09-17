import { coffeeDescriptions } from '@utils/coffeeDescriptions';
import { createContext, useEffect, useState } from 'react';
import { CartDTO } from 'src/dto/cartDTO';

type CartContextProps = {
    cart: CartDTO[],
    setCart: (cart: CartDTO[]) => void;
    total: number,
}

type CartContextProviderProps = {
    children: React.ReactNode;
}

export const CartContext = createContext<CartContextProps>({} as CartContextProps);

export function CartContextProvider({children}: CartContextProviderProps){
    const [cart, setCart] = useState<CartDTO[]>([] as CartDTO[]);
    const [total, setTotal] = useState(0);

    const coffeeTypes = [...coffeeDescriptions[0].data, 
    ...coffeeDescriptions[1].data, 
    ...coffeeDescriptions[2].data];
    
    useEffect(() => {
        setTotal(cart.reduce((acc, item) => acc + (coffeeTypes[item.productId -1].price * item.quantity), 0))
    }, [cart])
    return(
        <CartContext.Provider value={{
            cart,
            setCart,
            total
        }}>
            {children}
        </CartContext.Provider>
    );
}