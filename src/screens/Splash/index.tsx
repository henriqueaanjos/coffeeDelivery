import { useWindowDimensions, View } from 'react-native';
import {
    styles
} from './styles';
import Animated, { FadeIn, Keyframe, runOnJS, SlideInRight, useSharedValue, withDelay, withTiming, ZoomIn } from 'react-native-reanimated';

import LogoIconSvg from '@assets/logoIcon.svg';
import NameIconSvg from '@assets/logoName.svg';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRouteProps } from '@routes/app.routes';

export function Splash(){
    const translateX = useSharedValue(55);
    const progress = useSharedValue(0);
    const {height} = useWindowDimensions();

    const navigation = useNavigation<AppNavigatorRouteProps>();


    const enteringLogoKeyframe = new Keyframe({
        from: {
            transform: [{
                translateX: 55
            }]
        },
        to:{
            transform: [{
                translateX: 0
            }]
        }
    })

    function handleGoHome(){
        navigation.navigate('home', {});
    }

    useEffect(() => {
        progress.value = withDelay(2000, withTiming(0, {duration: 200}, (finish) =>{
            'worklet';
            if(finish){
                runOnJS(handleGoHome)();
            }
        }));
    }, [])
    
    return(
        <View style={styles.container}>
            <Animated.View
                style={[styles.circle, {width: height*2, height: height*2}]}
                entering={ZoomIn.duration(800).stiffness(60).damping(15).mass(1)}
            />
            <Animated.View 
                style={styles.logo}
                entering={enteringLogoKeyframe.delay(800).duration(600)}
            >
                <Animated.View
                    entering={FadeIn.duration(800).stiffness(60).damping(15).mass(1)}>
                    <LogoIconSvg/>
                </Animated.View>
                <Animated.View
                    entering={FadeIn.delay(800).duration(600)}
                >
                    <NameIconSvg/>
                </Animated.View>
            </Animated.View>
        </View>
    );
}