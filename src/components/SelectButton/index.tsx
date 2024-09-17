import { Pressable, PressableProps, Text } from 'react-native';
import { styles } from './styles';
import Animated, { Easing, interpolateColor, runOnJS, useAnimatedStyle, useSharedValue, withSequence, withTiming } from 'react-native-reanimated';
import { useEffect } from 'react';
import { THEME } from 'src/styles/theme';
import { BlurMask, Canvas, Path, rect, RoundedRect, Skia } from '@shopify/react-native-skia';

type Props = PressableProps & {
    title: string;
    isActive?: boolean;
    onPress?: () => void,
    isError?: Animated.SharedValue<number>;
}

const PressableAnimated = Animated.createAnimatedComponent(Pressable);

export function SelectButton({title, isActive = false, onPress, isError, ...rest}: Props){
    const dimensions = useSharedValue({ width: 0, height: 0 });
    const active = useSharedValue(0);

    const path = Skia.Path.Make().addRRect(Skia.RRectXY(rect(0,0, dimensions.value.width, dimensions.value.height), 6, 6));

    const textAnimationStyle = useAnimatedStyle(() => {
        return {
            color: interpolateColor(
                active.value,
                [0, 1],
                [THEME.COLORS.BASE.GRAY_300, THEME.COLORS.PRODUCT.PURPLE]
            )
        }
    });

    const containerAnimationErrorStyle = useAnimatedStyle(() => {
        if(isError){
            return{
                borderColor: interpolateColor(
                    isError.value,
                    [0, 1],
                    ['transparent', THEME.COLORS.FEEDBACK.RED]
                ),
                borderWidth: 2
            }
        }
        return {}
    });

    function handlePressSelectButton(){
        if(onPress)
            onPress();
    }
    const onLayout = (event: any) => {
        const { width, height } = event.nativeEvent.layout;
        dimensions.value = { width, height };
      };
    

    useEffect(() => {
        active.value = withTiming(isActive ? 1 : 0, {duration: 300, easing: Easing.ease});
    }, [isActive])

    return(
        <PressableAnimated 
            style={[styles.container, containerAnimationErrorStyle]}
            onPress={handlePressSelectButton} 
            onLayout={onLayout}
            {...rest}
        >
            <Animated.Text style={[styles.title, textAnimationStyle]}>
                {title}
            </Animated.Text>
            <Canvas style={{
                width: dimensions.value.width, 
                height: dimensions.value.height,
                position: 'absolute'
            }}>
                <Path
                    path={path}
                    style={'stroke'}
                    strokeWidth={2}
                    color={THEME.COLORS.PRODUCT.PURPLE}
                    start={0}
                    end={active}
                >
                    <BlurMask blur={2} style={'solid'}/>
                </Path>
            </Canvas>
        </PressableAnimated>
    );
}