import { TextInput, View } from 'react-native';
import { styles } from './styles';
import { ButtonIcon } from '@components/ButtonIcon';
import { Minus, Plus } from 'phosphor-react-native';
import { useEffect, useRef, useState } from 'react';

type Props = {
    value?: number
    onChange?: (value: number) => void
}

export function InputNumber({value = 1, onChange}: Props){
    const inputRef = useRef<TextInput>(null);
    
    function handleSubstract(){
        if(value > 1){
            if(onChange)
                onChange(value - 1);
        }
    }
    function handleAdd(){
        if(onChange)
            onChange(value + 1);
    }

    return(
        <View style={styles.container}>
            <ButtonIcon
                IconP={Minus}
                disabled={value <= 1}
                onPress={handleSubstract}
            />
            <TextInput
                ref={inputRef}
                maxLength={90}
                keyboardType='numeric'
                defaultValue='1'
                style={styles.input}
                value={String(value)}
                
                // onChangeText={handleChangeDirectly}
            />
            <ButtonIcon
                IconP={Plus}
                onPress={handleAdd}
            />
        </View>
    );
}