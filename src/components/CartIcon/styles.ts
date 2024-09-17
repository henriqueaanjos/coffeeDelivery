import { StyleSheet } from "react-native";
import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    indicator: {
        position: 'absolute',
        right: -8,
        top: -8,
        width: 20,
        height: 20,
        borderRadius: 30,
        backgroundColor: THEME.COLORS.PRODUCT.PURPLE,
        alignItems: 'center',
        justifyContent: 'center'
    },
    counter: {
        fontFamily: THEME.FONT_FAMILY.TEXT,
        fontSize: THEME.FONT_SIZE.TEXT.XS,
        color: THEME.COLORS.BASE.WHITE
    }
})