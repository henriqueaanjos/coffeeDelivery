import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';
import { ArrowLeft, MapPin } from 'phosphor-react-native';
import { THEME } from 'src/styles/theme';
import { CartIcon } from '@components/CartIcon';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppNavigatorRouteProps } from '@routes/app.routes';
import { useCart } from '@hooks/useCart';
import Animated, { Extrapolation, FadeIn, interpolate, interpolateColor, Keyframe, SlideInDown, SlideInUp, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { useEffect } from 'react';

type Props = {
    showBackButton?: boolean;
    title?: string,
    theme?: 'light' | 'dark',
    animated?: Animated.SharedValue<number>,
}

export function NavBar({showBackButton, title, theme = 'dark', animated}: Props){
    const navigation  = useNavigation<AppNavigatorRouteProps>();
    const route = useRoute();
    
    const animationStyle = useAnimatedStyle(() => {
        if(animated)
            return {
                color: interpolateColor(
                    animated.value,
                    [0,-484],
                    [THEME.COLORS.BASE.WHITE, THEME.COLORS.BASE.GRAY_100]
                ),
            }
        return {}
    });

    const animationContainerStyle = useAnimatedStyle(() => {
        if(animated)
            return {
                borderBottomWidth: interpolate(
                    animated.value,
                    [0,-484],
                    [0,1],
                    Extrapolation.CLAMP
                ),
                borderBottomColor: interpolateColor(
                    animated.value,
                    [0,-484],
                    [THEME.COLORS.BASE.GRAY_100, THEME.COLORS.BASE.GRAY_800]
                ),
                paddingVertical: interpolate(
                    animated.value,
                    [0,-484],
                    [20,8],
                    Extrapolation.CLAMP
                ),
            }
        return {}
    })

    function handleGoBack(){
        if(route.name === 'cart')
            navigation.navigate('home', {catalog: true});
        else
            navigation.goBack();
    }

    return(
        <Animated.View 
            entering={FadeIn.duration(300)}
            style={[styles.container, animationContainerStyle]}
        >
                { showBackButton ?
                    <Pressable onPress={handleGoBack} style={styles.backButton}>
                        <ArrowLeft
                            color={theme === 'dark' ? THEME.COLORS.BASE.WHITE : THEME.COLORS.BASE.GRAY_100 }
                            size={24}
                        />
                    </Pressable>
                    :<View style={styles.location}>
                        <MapPin
                            color={THEME.COLORS.PRODUCT.PURPLE}
                            size={20}
                            weight='fill'
                        />
                        <Animated.Text
                            style={[styles.city, {color:theme === 'dark' ? THEME.COLORS.BASE.WHITE : THEME.COLORS.BASE.GRAY_100}, animationStyle]}
                        >
                            Porto Alegre, RS
                        </Animated.Text>
                    </View>
                }{
                    title ?
                    <Text style={styles.title}>{title}</Text>
                    : <View style={styles.cartIconWrapper}>
                        <CartIcon />
                    </View>
                }
        </Animated.View>
    );
}