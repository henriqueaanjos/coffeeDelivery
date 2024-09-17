import { StyleSheet } from "react-native";
import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        padding: 12,
        gap: 8,
        borderRadius: 4,
        backgroundColor: THEME.COLORS.BASE.GRAY_200
    },
    input: {
        fontFamily: THEME.FONT_FAMILY.TEXT,
        fontSize: THEME.FONT_SIZE.TEXT.SM,
        color: THEME.COLORS.BASE.GRAY_700
    }
})