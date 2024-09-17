import { ActivityIndicator, View } from 'react-native';
import { THEME } from 'src/styles/theme';
import { styles } from './styles';

export function Loading(){
    return(
        <View style={styles.container}>
            <ActivityIndicator color={THEME.COLORS.PRODUCT.PURPLE_DARK} size={'small'} />
        </View>
    );
}