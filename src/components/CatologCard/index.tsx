import { View, Text, PressableProps, Pressable} from 'react-native';
import { styles } from './styles';
import { FC } from 'react';
import { SvgProps } from 'react-native-svg';
import { CoffeeDTO } from 'src/dto/coffeeDTO';
import { selectCoffePhoto } from '@utils/selectCoffeePhoto';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRouteProps } from '@routes/app.routes';

type Props = PressableProps & {
    coffee: CoffeeDTO
}


export function CatologCard({coffee, ...rest}: Props){
    const {id, title, description, price} = coffee;
    const Photo = selectCoffePhoto(id);

    const formattedNumber = price.toFixed(2).replace('.', ',');
    const navigation = useNavigation<AppNavigatorRouteProps>();

    function handleViewDetails(){
        navigation.navigate('product', {productId: id})
    }
    return(
        <Pressable 
            style={styles.container}
            onPress={handleViewDetails}
            {...rest}
        >
            <Photo
                width={96}
                height={96}
                style={styles.photo}
            />
            <View style={styles.content}>
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
        </Pressable>
    );
}