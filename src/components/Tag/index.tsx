import { Pressable, PressableProps, Text } from 'react-native';
import { styles } from './styles';

type Props = PressableProps & {
    title: string,
    isActive: boolean,
    onPress?: () => void,
}

export function Tag({title, isActive, onPress, disabled, ...rest}: Props){
    
    function handlePressTag(){
        if(onPress)
            onPress();
    }

    return(
        <Pressable 
            style={disabled ? styles.containerDisabled : isActive ? styles.containerActive : styles.containerInactive}
            onPress={handlePressTag} 
            disabled={disabled}
            {...rest}
        >
            <Text style={disabled ? styles.titleActive : isActive ? styles.titleActive : styles.titleInactive}>{title}</Text>
        </Pressable>
    );
}