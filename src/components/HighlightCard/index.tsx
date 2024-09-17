import { Pressable, PressableProps, Text, View, ViewToken } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRouteProps } from '@routes/app.routes';
import { CoffeeDTO } from 'src/dto/coffeeDTO';
import { useEffect } from 'react';
import { selectCoffePhoto } from '@utils/selectCoffeePhoto';
import { selectCoffeeType } from '@utils/selectCoffeeInfo';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, Easing } from 'react-native-reanimated';

type Props = PressableProps & {
    coffee: CoffeeDTO,
    viewableItems: Animated.SharedValue<ViewToken[]>
}

const PressableAnimated = Animated.createAnimatedComponent(Pressable);

export function HighlightCard({coffee, viewableItems,  ...rest}: Props){
    const {title, description, id, price} = coffee;
    const formattedNumber = price.toFixed(2).replace('.', ',');
    const Photo = selectCoffePhoto(id);

    const navigation = useNavigation<AppNavigatorRouteProps>();
    const scale = useSharedValue(0.8);

    function handleViewDetails(){
        navigation.navigate('product', {productId: id})
    }
    const containerAnimatedStyle = useAnimatedStyle(() => {
        const isVisible = viewableItems.value.filter(item => item.isViewable).find(item => item.item === coffee.id);
        return{
            transform: [{
                scale: isVisible ? withTiming(1, {duration: 250, easing: Easing.ease}) 
                : withTiming(0.8)
            }]
        }
    });

    

    return(
        <PressableAnimated 
            style={[styles.container, containerAnimatedStyle]}
            onPress={handleViewDetails}
            {...rest}
        >
            <Photo
                width={120}
                height={120}
                style={styles.photo}
            />
            <View style={styles.content}>
                <View style={styles.tag}>
                    <Text style={styles.type}>
                        {selectCoffeeType(id)}
                    </Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.description}>
                        {description}
                    </Text>
                </View>
                <View style={styles.money}>
                    <Text style={styles.dollar}>
                        R${' '}
                    </Text>
                    <Text style={styles.price}>
                        {formattedNumber}
                    </Text>
                </View>
            </View>
        </PressableAnimated>
    );
}