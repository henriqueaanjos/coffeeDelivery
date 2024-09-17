import { StyleSheet } from "react-native";
import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: 208,
        borderWidth: 1,
        borderColor: THEME.COLORS.BASE.GRAY_700,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        backgroundColor: THEME.COLORS.BASE.GRAY_800,
        borderTopRightRadius: 36,
        borderBottomLeftRadius: 36,
        borderTopLeftRadius: 6,
        borderBottomRightRadius: 6,
        paddingHorizontal: 16,
        paddingBottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    photo: {
        position: 'relative',
        marginTop: -32,
        zIndex: 99999
    },
    content: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    tag: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: THEME.COLORS.PRODUCT.PURPLE_LIGHT,
        borderRadius: 100,
        marginTop: 8
    },
    type: {
        fontFamily: THEME.FONT_FAMILY.TAG,
        fontSize: THEME.FONT_SIZE.TAG,
        color: THEME.COLORS.PRODUCT.PURPLE,
        textTransform: 'uppercase'
    },
    info: {
        gap: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 14,
        paddingBottom: 4
    },
    title: {
        fontFamily: THEME.FONT_FAMILY.TITLE,
        fontSize: THEME.FONT_SIZE.TITLE.MD,
        color: THEME.COLORS.BASE.GRAY_200
    },
    description: {
        fontFamily: THEME.FONT_FAMILY.TEXT,
        fontSize: THEME.FONT_SIZE.TEXT.XS,
        color: THEME.COLORS.BASE.GRAY_400,
        textAlign: 'center'
    },
    money: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 14,
        marginBottom: 20
    },
    dollar: {
        fontFamily: THEME.FONT_FAMILY.TEXT,
        fontSize: THEME.FONT_SIZE.TEXT.SM,
        color: THEME.COLORS.PRODUCT.YELLOW_DARK
    },
    price: {
        fontFamily: THEME.FONT_FAMILY.TITLE,
        fontSize: THEME.FONT_SIZE.TITLE.LG,
        color: THEME.COLORS.PRODUCT.YELLOW_DARK
    },
});