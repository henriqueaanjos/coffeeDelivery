import { StyleSheet } from "react-native";
import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
    container: {
        paddingTop: 64,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal:32,
        paddingVertical: 20,
        backgroundColor: 'transparent',
        borderWidth: 0
    },
    backButton:{
        position: 'absolute',
        left: 32,
        bottom: 26, 
        zIndex: 999,
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 4,
    },
    city: {
        fontFamily: THEME.FONT_FAMILY.TEXT,
        fontSize: THEME.FONT_SIZE.TEXT.SM,
        lineHeight: THEME.LINE_HEIGHT.DEFAULT,
        color: THEME.COLORS.BASE.GRAY_900
    },
    title:{
        width: '100%',
        textAlign: 'center',
        fontFamily: THEME.FONT_FAMILY.TITLE,
        fontSize: THEME.FONT_SIZE.TITLE.SM,
        color: THEME.COLORS.BASE.GRAY_200
    },
    cartIconWrapper:{
        flexGrow:1,
        alignItems: 'flex-end',
    }
})