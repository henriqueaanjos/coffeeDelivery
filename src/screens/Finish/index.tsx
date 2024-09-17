import { StatusBar, Text, View } from 'react-native';
import { styles } from './styles';

import IllustrationSvg from '@assets/Illustration.svg';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRouteProps } from '@routes/app.routes';
import { useEffect } from 'react';
import { useCart } from '@hooks/useCart';
import Animated, { Easing, Keyframe, SlideInLeft, SlideOutRight } from 'react-native-reanimated';
import { Motocycle } from '@components/Motocycle';

export function Finish(){
    const {setCart} = useCart();
    const enteringInfoKeyframe = new Keyframe({
        from: {
            transform:[{
                translateY: 20,
            }],
            opacity: 0
        },
        to: {
            transform:[{
                translateY: 0,
            }],
            opacity: 1
        }
    })
    const enteringButtonKeyframe = new Keyframe({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        }
    })

    useEffect(() => {
        setCart([]);
    }, []);

    const navigation = useNavigation<AppNavigatorRouteProps>();
    function handleGoHome(){
        navigation.navigate('home', {catalog: false});
    }
    return(
        <>
            <StatusBar
                backgroundColor={'transparent'}
                barStyle={"dark-content"}
                translucent
            />
            <View style={styles.container}>
                <Animated.View
                    entering={SlideInLeft.duration(700).easing(Easing.ease)}
                    exiting={SlideOutRight.duration(700).easing(Easing.ease)}
                >
                    <Motocycle/>
                </Animated.View>
                <Animated.View
                    entering={enteringInfoKeyframe.duration(700)}
                >
                    <Text style={styles.title}>
                        Uhu! Pedido confirmado
                    </Text>
                    <Text style={styles.subtitle}>
                        Agora é só aguardar que logo o café chegará até você!
                    </Text>
                </Animated.View>
                <Animated.View 
                    style={styles.footer}
                    entering={enteringButtonKeyframe.delay(700).duration(200)}
                >
                    <Button
                        title="Ir para Home"
                        color='purple'
                        onPress={handleGoHome}
                    />
                </Animated.View>
            </View>
    </>
    );
}