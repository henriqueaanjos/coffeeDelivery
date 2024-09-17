import { StyleSheet } from "react-native";
import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 48
    },
    title: {
        marginTop: 47,
        fontFamily: THEME.FONT_FAMILY.TITLE,
        fontSize: THEME.FONT_SIZE.TITLE.LG,
        color: THEME.COLORS.PRODUCT.YELLOW_DARK
    },
    subtitle: {
        width: 259,
        marginTop: 8,
        fontFamily: THEME.FONT_FAMILY.TEXT,
        fontSize: THEME.FONT_SIZE.TEXT.SM,
        color: THEME.COLORS.BASE.GRAY_200,
        textAlign: 'center'
    },
    footer:{
        width: 247,
        flexDirection: 'row',
        marginTop: 64
    }
});