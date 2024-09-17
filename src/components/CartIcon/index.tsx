import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';
import { ShoppingCart } from 'phosphor-react-native';
import { THEME } from 'src/styles/theme';
import { useCart } from '@hooks/useCart';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRouteProps } from '@routes/app.routes';

export function CartIcon(){
    const {cart} = useCart();
    const navigation = useNavigation<AppNavigatorRouteProps>();
    function handleViewCart(){
        navigation.navigate('cart');
    }
    return(
        <Pressable 
            style={styles.container}
            onPress={handleViewCart}
        >
            <ShoppingCart
                color={cart.length > 0 ? THEME.COLORS.PRODUCT.PURPLE : THEME.COLORS.PRODUCT.YELLOW_DARK}
                size={20}
                weight='fill'
            />
            {cart.length > 0 &&
                <View style={styles.indicator}>
                    <Text style={styles.counter}>
                        {cart.length}
                    </Text>
                </View>
            }
        </Pressable>
    );
}