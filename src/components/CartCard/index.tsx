import { Alert, Text, View } from 'react-native';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import { sizes } from '@utils/sizes';
import { InputNumber } from '@components/InputNumber';
import { ButtonIcon } from '@components/ButtonIcon';
import { Trash } from 'phosphor-react-native';
import { useCart } from '@hooks/useCart';
import { CoffeeDTO } from 'src/dto/coffeeDTO';
import { CartDTO } from 'src/dto/cartDTO';
import { selectCoffePhoto } from '@utils/selectCoffeePhoto';

type Props = {
    cartItem: CartDTO,
    coffee: CoffeeDTO
}

export function CartCard({coffee, cartItem}: Props){
    const {title, price} = coffee;
    const {id: cartId, quantity, size} = cartItem;
    const [quantityRemote, setQuantityRemote] = useState(quantity);

    const Photo = selectCoffePhoto(coffee.id);

    const {setCart, cart} = useCart();

    function handleCalcSubtotal(){
        return (price * quantityRemote).toFixed(2).replace('.', ',');
    }


    function handleChangeQuantity(quantity: number){
        const cartUpdated = cart.map(item => ({...item}));
        const cartItemUpdated = cartUpdated.find(item => item.id === cartId);
        if(cartItemUpdated){
            cartItemUpdated.quantity = quantity;
            setCart(cartUpdated);
        }
        setQuantityRemote(quantity);
    }

    function handleDelete(){
        Alert.alert('Remover', 'Deseja realmente remover este item do carrinho?', [
           {
                text: 'Remover',
                onPress: () => {
                    const cartUpdated = cart.filter(item => item.id !== cartId);
                    setCart(cartUpdated);
                },
                style: 'destructive'
           },{
                text: 'Cancelar',
                style: 'cancel'
           }
        ])
    }

    useEffect(() => {
        handleChangeQuantity
    }, [quantity])

    return(
        <View style={styles.container}>
            <Photo
                width={64}
                height={64}
            />
            <View style={styles.content}>
                <View style={styles.about}>
                    <View style={styles.info}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.size}>{sizes[size-1].value}</Text>
                    </View>
                    <Text style={styles.price}>R$ {handleCalcSubtotal()}</Text>
                </View>
                <View style={styles.action}>
                    <View style={styles.inputNumber}>
                        <InputNumber
                            value={quantityRemote}
                            onChange={handleChangeQuantity}
                        />
                    </View>
                    <ButtonIcon
                        IconP={Trash}
                        onPress={handleDelete}
                        remove
                    />
                </View>
            </View>
        </View>
    );
}