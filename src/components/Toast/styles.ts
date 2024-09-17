import { StyleSheet } from "react-native";
import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: THEME.COLORS.BASE.WHITE,
        padding: 32,
        paddingTop: 28,
        gap: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 16,
    },
    cartContainer:{
        padding: 8,
        backgroundColor: THEME.COLORS.BASE.GRAY_500,
        borderRadius: 6
    },
    counterContainer:{
        width: 20,
        height: 20,
        backgroundColor: THEME.COLORS.PRODUCT.PURPLE,
        borderRadius: 1000,
        position:'absolute',
        right: -8,
        top: -8,
        alignItems: 'center',
        justifyContent: 'center'

    },
    counter:{
        fontFamily: THEME.FONT_FAMILY.TEXT,
        fontSize: THEME.FONT_SIZE.TEXT.XS,
        color: THEME.COLORS.BASE.WHITE
    },
    description:{
        flexGrow: 1,
        fontFamily: THEME.FONT_FAMILY.TEXT,
        fontSize: THEME.FONT_SIZE.TEXT.SM,
        color: THEME.COLORS.BASE.GRAY_400
    },
    emphasis:{
        fontFamily: THEME.FONT_FAMILY.BUTTON,
    },
    button:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4
    },
    buttonTitle:{
        fontFamily: THEME.FONT_FAMILY.BUTTON,
        fontSize: THEME.FONT_SIZE.TEXT.XS,
        color: THEME.COLORS.PRODUCT.PURPLE
    }
});