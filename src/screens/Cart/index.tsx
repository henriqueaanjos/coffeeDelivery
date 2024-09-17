import { FlatList, ScrollView, View, Text, StatusBar } from 'react-native';
import { styles } from './styles';
import { NavBar } from '@components/NavBar';
import { CartCard } from '@components/CartCard';

import { Button } from '@components/Button';
import { useCart } from '@hooks/useCart';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRouteProps } from '@routes/app.routes';
import { selectCoffeeInfo } from '@utils/selectCoffeeInfo';
import { Swipeable } from 'react-native-gesture-handler';
import { ShoppingCart, Trash } from 'phosphor-react-native';
import { THEME } from 'src/styles/theme';
import { Audio } from 'expo-av';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useEffect } from 'react';

export function Cart(){
    const { cart, total,setCart } = useCart();
    const footerActive = useSharedValue(160);

    const footerAnimatedStyle = useAnimatedStyle(() => {
        return{
            transform: [{
                translateY: footerActive.value,
            }]
        }
    });

    const navigation = useNavigation<AppNavigatorRouteProps>();

    async function handleFinishOrder(){
        const file = require('../../assets/finishOrder.mp3');
  
        const { sound } = await Audio.Sound.createAsync(file, { shouldPlay: true })
    
        await sound.setPositionAsync(0);
        await sound.playAsync();
        navigation.navigate('finish')
    }
    function handleGoToCatalog(){
        navigation.navigate('home', {catalog: true})
    }
    function handleRemove(id: number){
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
    }
    useEffect(() => {
        if(total > 0){
            footerActive.value = withTiming(0, {duration: 500})
        }else{
            footerActive.value = withTiming(160, {duration: 500})
        }
    }, [total]); 

    return(
        <>
            <StatusBar
                backgroundColor={'transparent'}
                barStyle={"dark-content"}
                translucent
            />
            <View style={styles.container}>
                <NavBar showBackButton theme='light' title='Carrinho'/>
                <FlatList
                    data={cart}
                    ListEmptyComponent={() => 
                        <>
                            <View style={styles.emptyContainer}>
                                <ShoppingCart
                                    color={THEME.COLORS.BASE.GRAY_500}
                                    size={24}
                                    weight='fill'
                                />
                                <Text style={styles.emptySubtitle}>Seu carrinho está vazio</Text>
                                <Button title='Ver catálogo' color='purple' onPress={handleGoToCatalog}/>
                            </View>
                        </>
                    }
                    renderItem={ ({item}) =>
                        <Swipeable
                            containerStyle={styles.swipeableContainer}
                            leftThreshold={200}
                            renderRightActions={() => null}
                            onSwipeableOpen={() => handleRemove(item.id)}
                            renderLeftActions={() => (
                                <View style={styles.swipeableRemove}>
                                    <Trash 
                                        size={32} 
                                        color={THEME.COLORS.FEEDBACK.RED_DARK} 
                                    /> 
                                </View>
                            )}
                        >
                            <CartCard
                                cartItem={item}
                                coffee={selectCoffeeInfo(item.productId)}
                            />
                        </Swipeable>
                    }
                />
                <Animated.View style={[styles.footer, footerAnimatedStyle]}>
                    <View style={styles.totals}>
                        <Text style={styles.totalsLabel}> Valor Total</Text>
                        <Text style={styles.totalsValue}> R$ {total.toFixed(2).replace('.', ',')}</Text>
                    </View>
                    <Button
                        title='Confirmar pedido'
                        color='yellow'
                        onPress={handleFinishOrder}
                    />
                </Animated.View>
            </View>
        </>
    );
}