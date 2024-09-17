import { StyleSheet } from "react-native";
import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: THEME.COLORS.PRODUCT.PURPLE_DARK
    },
    circle:{
        backgroundColor: THEME.COLORS.PRODUCT.PURPLE,
        borderRadius: 9999,
        position: 'absolute'
    },
    logo:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15
    }
})