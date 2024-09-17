import { Pressable, View, Text } from 'react-native';
import {
    styles
} from './styles';
import { ArrowRight, ShoppingCart } from 'phosphor-react-native';
import { THEME } from 'src/styles/theme';
import { useCart } from '@hooks/useCart';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRouteProps } from '@routes/app.routes';
import Animated, { SlideInDown, SlideOutDown, useAnimatedStyle, useSharedValue, withDelay, withSequence, withTiming } from 'react-native-reanimated';
import { useEffect, useState } from 'react';
import { selectCoffeeInfo } from '@utils/selectCoffeeInfo';
import { CartDTO } from 'src/dto/cartDTO';
import { sizes } from '@utils/sizes';

type ToastProps = {
    show: boolean
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function Toast({show}: ToastProps){
    const [product, setProduct] = useState<CartDTO>({
        productId: 1,
        quantity: 0,
        size: 1
    } as CartDTO)
    const toastTranslateY = useSharedValue(160);

    const {cart} = useCart();
    const navigation = useNavigation<AppNavigatorRouteProps>();
    function handleGoCart(){
        navigation.navigate('cart');
    }

    const toastAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: toastTranslateY.value
                }
            ]
        }
    })
    useEffect(() => {
        if(show){
            console.log()
            setProduct(cart[cart.length -1]);
            toastTranslateY.value = withSequence(
                withTiming(0, {duration: 400}),
                withDelay(3000,withTiming(160, {duration: 400} ))
            );
        }
      }, [show]); 
    return(
        <AnimatedPressable 
            style={[styles.container, toastAnimatedStyle]} 
            onPress={handleGoCart}
        >
            <View style={styles.cartContainer}>
                <ShoppingCart
                    size={20}
                    weight='fill'
                    color={THEME.COLORS.BASE.WHITE}
                />
                <View style={styles.counterContainer}>
                    <Text style={styles.counter}>
                        {cart.length}
                    </Text>
                </View>
            </View>
            <Text style={styles.description}>
                {product.quantity} café {' '}
                <Text style={styles.emphasis}>
                    {selectCoffeeInfo(product.productId).title}
                </Text>
                {' '}de{' '}
                <Text style={styles.emphasis}>
                    {sizes[product.size -1].value}
                </Text>
                {'\n'}adicionado ao carrinho
            </Text>
            <View style={styles.button}>
                <Text style={styles.buttonTitle}>Ver</Text>
                <ArrowRight
                    size={16}
                    color={THEME.COLORS.PRODUCT.PURPLE}
                />
            </View>
        </AnimatedPressable>
    );
}