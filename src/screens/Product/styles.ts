import { StyleSheet } from "react-native";
import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    content: {
        height: '70%',
        width: '100%',
        backgroundColor: THEME.COLORS.BASE.GRAY_100,
        alignItems: 'center',
    },
    info: {
        width: '100%',
        paddingHorizontal: 32,
        marginTop: 12,
        gap:20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: 2,
    },
    main: {
        flexDirection: 'column',
        gap: 12,
    },
    tag: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 100,
        backgroundColor: THEME.COLORS.BASE.GRAY_200,
    },
    tagTitle: {
        fontFamily: THEME.FONT_FAMILY.TAG,
        fontSize: THEME.FONT_SIZE.TAG,
        color: THEME.COLORS.BASE.WHITE,
        textTransform: 'uppercase'
    },
    title: {
        fontFamily: THEME.FONT_FAMILY.TITLE,
        fontSize: THEME.FONT_SIZE.TITLE.LG,
        color: THEME.COLORS.BASE.WHITE
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
        color: THEME.COLORS.PRODUCT.YELLOW
    },
    price: {
        fontFamily: THEME.FONT_FAMILY.TITLE,
        fontSize: THEME.FONT_SIZE.TITLE.XL,
        color: THEME.COLORS.PRODUCT.YELLOW
    },
    description: {
        fontFamily: THEME.FONT_FAMILY.TEXT,
        fontSize: THEME.FONT_SIZE.TEXT.MD,
        color: THEME.COLORS.BASE.GRAY_500,
        lineHeight: 24,
    },
    smoke:{
        position: 'absolute',
        bottom: 140,
        zIndex:1,
    },
    coffee: {
        width: 295,
        height: 260,
        position: 'absolute',
        bottom: -50,
        zIndex: 99999,
    },
    footer:{
        flex:1,
        width: '100%',
        paddingTop: 42,
        paddingHorizontal: 32,
    },
    selection: {
        gap: 8,
    },
    selectionTitle: {
        fontFamily: THEME.FONT_FAMILY.TEXT,
        fontSize: THEME.FONT_SIZE.TEXT.SM,
        color: THEME.COLORS.BASE.GRAY_400,
    },
    selectionButtons:{
        flexGrow: 3,
        flexDirection: 'row',
        gap: 16,
    },
    AddCartView: {
        width: '100%',
        marginTop: 32,
        flexDirection: 'row',
        backgroundColor: THEME.COLORS.BASE.GRAY_700,
        alignItems: 'center',
        borderRadius: 6,
        padding: 8,
        gap: 16
    }
})