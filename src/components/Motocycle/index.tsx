import { View } from 'react-native';
import {
    styles,
} from './styles';
import { Canvas, Path } from '@shopify/react-native-skia';

import DeliverySvg from '@assets/delivery.svg';
import FloorSvg from '@assets/floor.svg';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { useEffect } from 'react';

export function Motocycle(){
    const translateY = useSharedValue(0);
    const opacity = useSharedValue(0);

    const deliveryAnimationStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                    translateY: translateY.value
            }]
        }
    });

    const movimentBlinkingAnimation = useAnimatedStyle(() => {
        return {
            opacity: opacity.value
        }
    })

    useEffect(() => {
        translateY.value = withRepeat(
            withTiming(-7, {duration: 100, easing: Easing.ease}),
            -1,
            true
        );
        opacity.value= withRepeat(
            withTiming(1, {duration: 1000, easing: Easing.ease}),
            -1,
            true
        );
    });

    
    return(
        <View style={styles.container}>
            <Canvas style={styles.canvas}>
                <Path
                    opacity={opacity}
                    color="#EBC136"
                    path="M96.8804 0.950371C92.0743 1.23688 87.2669 1.46246 82.4583 1.62709C77.6499 1.80501 72.8403 1.92694 68.0306 2.0381C63.2204 2.13127 58.41 2.21239 53.5984 2.23788C48.7871 2.27681 43.9745 2.25383 39.1606 2.16893C43.9667 1.88136 48.774 1.65532 53.5827 1.49081C58.3911 1.31312 63.2006 1.1912 68.0105 1.0812C72.8206 0.989202 77.631 0.908079 82.4426 0.882826C87.2539 0.844355 92.0665 0.866866 96.8804 0.950371Z"
                />
                <Path
                    opacity={opacity}
                    color="#EBC136"
                    path="M58.1719 15.4291C53.3658 15.7156 48.5584 15.9412 43.7498 16.1059C38.9414 16.2839 34.1318 16.4058 29.3221 16.5168C24.5119 16.61 19.7015 16.6913 14.8899 16.7166C10.0787 16.7557 5.26605 16.7327 0.452148 16.6478C5.25819 16.3601 10.0656 16.134 14.8742 15.9695C19.6826 15.7918 24.4921 15.6699 29.302 15.56C34.1121 15.468 38.9225 15.3868 43.7341 15.3617C48.5454 15.3231 53.358 15.3456 58.1719 15.4291Z"
                />
                <Path
                    opacity={opacity}
                    color="#EBC136"
                    path="M74.7163 31.6327C69.9102 31.9192 65.1028 32.1449 60.2942 32.3096C55.4859 32.4875 50.6763 32.6094 45.8665 32.7205C41.0564 32.8136 36.246 32.8949 31.4344 32.9202C26.6231 32.9593 21.8105 32.9363 16.9966 32.8514C21.8027 32.5637 26.61 32.3376 31.4187 32.1732C36.227 31.9955 41.0366 31.8735 45.8464 31.7636C50.6566 31.6717 55.467 31.5904 60.2786 31.5653C65.0898 31.5267 69.9024 31.5492 74.7163 31.6327Z"
                />
            </Canvas>
            <View >
                <Animated.View
                    style={[deliveryAnimationStyle]}
                >
                    <DeliverySvg/>
                </Animated.View>
                <View style={styles.floor}>
                    <FloorSvg/>
                </View>
            </View>
        </View>
    );
}