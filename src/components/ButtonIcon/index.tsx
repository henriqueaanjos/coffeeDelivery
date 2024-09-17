import { Pressable, PressableProps } from 'react-native';
import { styles } from './styles';

import { Icon } from 'phosphor-react-native';
import { THEME } from 'src/styles/theme';

type Props = PressableProps & {
    IconP: Icon,
    remove?:boolean
}

export function ButtonIcon({IconP, remove=false,...rest}: Props){
    return(
        <Pressable style={({pressed}) => [
            !remove && styles.container, 
            pressed && styles.containerPressed,
            pressed && remove && styles.containerRemoveButtonPressed,
            remove && styles.containerRemoveButton
        ]} {...rest}>
            {({ pressed }) => {
                return pressed ? 
                    remove ?
                        <IconP 
                            size={20}
                            color={THEME.COLORS.PRODUCT.PURPLE}
                        />
                        : <IconP
                            size={20}
                            color={THEME.COLORS.PRODUCT.PURPLE_DARK}
                        /> 
                :
                    remove ?
                        <IconP 
                            size={20}
                            color={THEME.COLORS.PRODUCT.PURPLE_DARK}
                        />
                        : <IconP
                            size={20}
                            color={THEME.COLORS.PRODUCT.PURPLE}
                        /> 
            }}
        </Pressable>
    );
}