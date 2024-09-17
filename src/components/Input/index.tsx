import { TextInput, TextInputProps, View } from 'react-native';
import { styles } from './styles';
import { THEME } from 'src/styles/theme';
import { MagnifyingGlass } from 'phosphor-react-native';
import { useState } from 'react';

type Props = TextInputProps & {
    value?: string;
    onChangeText?: (text: string) => void;
}

export function Input({value = '', onChangeText,...rest}: Props){
    const [text, setText] = useState(value);
    const [isFocus, setIsFocus] = useState(false);

    function handleTextChange(text: string) {
        setText(text);
        if(onChangeText)
            onChangeText(text);
    }
    return(
        <View style={styles.container}>
            <MagnifyingGlass
                color={isFocus ? THEME.COLORS.PRODUCT.YELLOW : text != '' ? THEME.COLORS.PRODUCT.YELLOW_DARK : THEME.COLORS.BASE.GRAY_400}
                size={16}
            />
            <TextInput
                style={styles.input}
                placeholderTextColor={THEME.COLORS.BASE.GRAY_400}
                onChangeText={handleTextChange}
                value={text}
                onFocus={() => setIsFocus(true)}
                {...rest}
            />
        </View>
    );
}