import { Image, StatusBar, Text, View } from 'react-native';
import { styles } from './styles';

import CoffeePng from '@assets/Coffee.png'
import { NavBar } from '@components/NavBar';
import { Tag } from '@components/Tag';
import { SelectButton } from '@components/SelectButton';
import { useEffect, useState } from 'react';
import { Button } from '@components/Button';
import { InputNumber } from '@components/InputNumber';
import { sizes } from '@utils/sizes';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useCart } from '@hooks/useCart';
import { AppNavigatorRouteProps } from '@routes/app.routes';
import { selectCoffeeInfo, selectCoffeeType } from '@utils/selectCoffeeInfo';
import Animated, { Easing, interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withSequence, withTiming } from 'react-native-reanimated';
import { THEME } from 'src/styles/theme';
import { Smoke } from '@components/Smoke';
import { BlurMask, Canvas, Rect } from '@shopify/react-native-skia';
import * as Haptics from 'expo-haptics'
import { Audio } from 'expo-av';

type RouteParams = {
    productId: number,
}


export function Product(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [type, setType] = useState('');
    const [quantity, setQuantity] = useState(1);

    const error = useSharedValue(0);
    const size = useSharedValue(1);
    const dimensions = useSharedValue({ width: 0, height: 0 });
    const opacity = useSharedValue(0);

    const animatedContainerStyle = useAnimatedStyle(() => {
        return{
            opacity: opacity.value,
        }
    });

    const [selectButtonActive, setSelectButtonActive] = useState(0);

    const route = useRoute();
    const { productId } = route.params as RouteParams;

    const navigation = useNavigation<AppNavigatorRouteProps>();

    const { setCart, cart } = useCart();

    function handleChangeSelectButtonActive(index: number){
        setSelectButtonActive(index);
        switch(index){
            case 1:
                size.value = withTiming(.9);
                break;
            case 2:
                size.value = withTiming(1);
                break;
            case 3:
                size.value = withTiming(1.2);
                break;
        }
    }

    const coffeeSizeAnimationStyle = useAnimatedStyle(() => {
        return {
            transform: [{scale: size.value}]
        }
    });
    const smokeSizeAnimationStyle = useAnimatedStyle(() => {
        return {
            transform: [{scale: size.value}],
            bottom: interpolate(
                size.value,
                [.9, 1, 1.2],
                [130, 140, 160]
            )
        }
    });

    const selectionTitleAnimationStyle = useAnimatedStyle(() => {
        return {
            color: interpolateColor(
                error.value,
                [0, 1],
                [THEME.COLORS.BASE.GRAY_400, THEME.COLORS.FEEDBACK.RED_DARK]
            )
        }
    })

    async function handleAddProduct(){
        if(selectButtonActive > 0){
            const newProductCart = {
                id: cart.length +1,
                productId,
                size: selectButtonActive,
                quantity
            }
            setCart([newProductCart,...cart]);
            const file = require('../../assets/addCart.mp3');
            const { sound } = await Audio.Sound.createAsync(file, { shouldPlay: true });
            await sound.setPositionAsync(0);
            await sound.playAsync();
            navigation.navigate('home', {catalog: true, newItem: newProductCart});

        }else{
            error.value = withSequence(
                withTiming(1, {duration: 500, easing: Easing.ease}),
                withTiming(0)
            );
            errorAnimation();
            await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        }

    }
    const onLayout = (event: any) => {
        const { width, height } = event.nativeEvent.layout;
        dimensions.value = { width, height };
      };

    useEffect(() => {
        const coffee = selectCoffeeInfo(productId);
        const typeCoffee = selectCoffeeType(productId);
        if(coffee){
            setTitle(coffee.title);
            setDescription(coffee.description);
            setPrice(coffee.price.toFixed(2).replace('.', ','));
        }
        if(typeCoffee){
            setType(typeCoffee);
        }
    }, []);

    function errorAnimation(){
        opacity.value = withSequence(
            withTiming(1, {duration: 400, easing: Easing.bounce}),
            withTiming(0)
        );
    }

    return(
        <>
            <StatusBar
                backgroundColor={'transparent'}
                barStyle={"light-content"}
                translucent
            />
            <View style={styles.container}>
                <View style={styles.content}>
                    <NavBar showBackButton/>
                    <View style={styles.info}>
                        <View style={styles.header}>
                            <View style={styles.main}>
                                <View style={{flexDirection: 'row'}}>
                                    <Tag disabled title={type} isActive/>
                                </View>
                                <Text style={styles.title}>{title}</Text>
                            </View>
                            <View style={styles.money}>
                                <Text style={styles.dollar}>
                                    R${' '}
                                </Text>
                                <Text style={styles.price}>
                                {price}
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.description}>
                            {description}
                        </Text>
                    </View>
                    <Animated.View
                        style={[styles.smoke, smokeSizeAnimationStyle]}
                    >
                        {/* <SmokeSvg
                            width={64}
                            height={137}
                        /> */}
                        <Smoke/>
                    </Animated.View>
                    <Animated.Image
                        style={[styles.coffee, coffeeSizeAnimationStyle]}
                        source={CoffeePng}

                    />
                </View>
                <View 
                    style={styles.footer}
                    onLayout={onLayout}
                >
                    <Animated.View
                        style={[{
                            width: dimensions.value.width, 
                            height: dimensions.value.height,
                            position: 'absolute',
                        }, animatedContainerStyle]}
                    >
                        <Canvas
                            style={{
                                flex: 1,
                            }}
                        >
                            <Rect
                                x={0}
                                y={0}
                                width={dimensions.value.width}
                                height={dimensions.value.height}
                                color={THEME.COLORS.FEEDBACK.RED}
                            >
                                <BlurMask
                                    blur={30}
                                    style={'inner'}
                                />
                            </Rect>
                        </Canvas>
                    </Animated.View>
                    <View style={styles.selection}>
                        <Animated.Text style={[styles.selectionTitle, selectionTitleAnimationStyle]}>
                            Selecione o Tamanho:
                        </Animated.Text>
                        <View style={styles.selectionButtons}>
                            {
                                sizes.map(item => 
                                    <SelectButton 
                                        key={item.id}
                                        title={item.value} 
                                        isActive={selectButtonActive === item.id} 
                                        onPress={() => handleChangeSelectButtonActive(item.id)}
                                        isError={error}
                                    />
                                )
                            }
                        </View>
                    </View>
                    <View style={styles.AddCartView}>
                        <InputNumber
                            value={quantity}
                            onChange={setQuantity}
                        />
                        <Button color='purple' title='Adicionar'
                            disabled={selectButtonActive === 0}
                            onPress={handleAddProduct}
                        />
                    </View>
                    
                </View>
            </View>
        </>
    );
}