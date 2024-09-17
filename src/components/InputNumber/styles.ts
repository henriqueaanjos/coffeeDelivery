import { StyleSheet } from "react-native";
import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4
    },
    input: {
        fontFamily: THEME.FONT_FAMILY.TEXT,
        fontSize: THEME.FONT_SIZE.TEXT.MD,
        color: THEME.COLORS.BASE.GRAY_100,
    }
});