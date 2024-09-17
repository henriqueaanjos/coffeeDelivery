import { StyleSheet } from "react-native";
import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: 8,
        paddingVertical: 12,
        gap: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    },
    title:{
        fontFamily: THEME.FONT_FAMILY.BUTTON,
        fontSize: THEME.FONT_SIZE.BUTTON,
        color: THEME.COLORS.BASE.WHITE,
        textTransform: 'uppercase'
    }
});