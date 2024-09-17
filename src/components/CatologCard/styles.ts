import { StyleSheet } from "react-native";
import { THEME } from "src/styles/theme";

export const  styles = StyleSheet.create({
    container:{
        width: '100%',
        borderColor: THEME.COLORS.BASE.GRAY_700,
        borderWidth: 1,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 36,
        borderBottomLeftRadius: 36,
        borderBottomRightRadius: 6,
        backgroundColor: THEME.COLORS.BASE.GRAY_800,
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowOffset: {width: 0, height:2},
        shadowRadius: 8,
        paddingRight: 16,
        paddingLeft: 8,
        paddingTop: 16,
        paddingBottom: 13,
        flexDirection: "row",
        gap: 12
    },
    photo:{
        marginTop: -32,
    },
    content: {
        width: 179,
    },
    info:{
        gap: 4
    },
    title: {
        fontFamily: THEME.FONT_FAMILY.TITLE,
        fontSize: THEME.FONT_SIZE.TITLE.SM,
        color: THEME.COLORS.BASE.GRAY_200
    },
    description: {
        fontFamily: THEME.FONT_FAMILY.TEXT,
        fontSize: THEME.FONT_SIZE.TEXT.XS,
        color: THEME.COLORS.BASE.GRAY_400,
    },
    money: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 8,
    },
    dollar: {
        fontFamily: THEME.FONT_FAMILY.TEXT,
        fontSize: THEME.FONT_SIZE.TEXT.SM,
        color: THEME.COLORS.PRODUCT.YELLOW_DARK
    },
    price: {
        fontFamily: THEME.FONT_FAMILY.TITLE,
        fontSize: THEME.FONT_SIZE.TITLE.MD,
        color: THEME.COLORS.PRODUCT.YELLOW_DARK
    },
});