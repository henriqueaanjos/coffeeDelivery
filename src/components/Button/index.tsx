import { Pressable, PressableProps, Text } from 'react-native';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import Animated, { interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { THEME } from 'src/styles/theme';

type Props =  PressableProps & {
    title: string;
    color: 'purple' | 'yellow';
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function Button({title, color, disabled, ...rest}: Props){
    const disabledButton = useSharedValue(0);
    const colorButton = useSharedValue(color);
    const pressed = useSharedValue(0);

    const containerAnimationStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: colorButton.value === 'yellow' ? interpolateColor(
                pressed.value,
                [0, 1],
                [THEME.COLORS.PRODUCT.YELLOW_DARK, THEME.COLORS.PRODUCT.YELLOW]
            ) : interpolateColor(
                pressed.value,
                [0, 1],
                [THEME.COLORS.PRODUCT.PURPLE_DARK, THEME.COLORS.PRODUCT.PURPLE]
            ),
            opacity: interpolate(
                disabledButton.value, 
                [0, 1],
                [1, 0.3]
            )
        }
    })

    function onPressIn(){
        pressed.value = withTiming(1);
    }
    function onPressOut(){
        pressed.value = withTiming(0);
    }

    useEffect(() => {
        disabledButton.value = withTiming(disabled ? 1 : 0);
    }, [disabled]);

    return(
        <AnimatedPressable
            style={[
                styles.container,
                containerAnimationStyle,
            ]}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            {...rest}
        >
            <Text style={styles.title}>
                {title}
            </Text>
        </AnimatedPressable>
    );
}