import { StyleSheet } from "react-native";
import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
    containerDisabled: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: THEME.COLORS.BASE.GRAY_200,
        borderRadius: 100
    },
    containerInactive: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderColor: THEME.COLORS.PRODUCT.PURPLE,
        borderWidth: 1,
        borderRadius: 100
    },
    containerActive: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: THEME.COLORS.PRODUCT.PURPLE,
        borderRadius: 100
    },
    titleActive:{
        fontFamily: THEME.FONT_FAMILY.TAG,
        fontSize: THEME.FONT_SIZE.TAG,
        color: THEME.COLORS.BASE.WHITE,
        textTransform: 'uppercase'
    },
    titleInactive:{
        fontFamily: THEME.FONT_FAMILY.TAG,
        fontSize: THEME.FONT_SIZE.TAG,
        color: THEME.COLORS.PRODUCT.PURPLE_DARK,
        textTransform: 'uppercase'
    }
});