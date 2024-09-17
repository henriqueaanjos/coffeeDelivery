import { StyleSheet } from "react-native";
import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        backgroundColor: THEME.COLORS.BASE.GRAY_700,
        borderColor: THEME.COLORS.PRODUCT.PURPLE,
        borderWidth:1,
    },
    title: {
        fontFamily: THEME.FONT_FAMILY.TEXT,
        fontSize: THEME.FONT_SIZE.TEXT.SM,
        color: THEME.COLORS.PRODUCT.PURPLE
    },
})