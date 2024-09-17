import { InputNumber } from "@components/InputNumber";
import { StyleSheet } from "react-native";
import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        paddingVertical: 16,
        flexDirection: 'row',
        borderColor: THEME.COLORS.BASE.GRAY_700,
        borderWidth: 1,
        backgroundColor: THEME.COLORS.BASE.GRAY_900
    },
    content: { 
        flexGrow: 1,
        marginLeft: 20,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 8
    },
    about: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    info:{
        flexGrow: 1,
        gap: 2,
    },
    title: {
        fontFamily: THEME.FONT_FAMILY.TEXT,
        fontSize: THEME.FONT_SIZE.TEXT.MD,
        color: THEME.COLORS.BASE.GRAY_100
    },
    size: {
        fontFamily: THEME.FONT_FAMILY.TEXT,
        fontSize: THEME.FONT_SIZE.TEXT.SM,
        color: THEME.COLORS.BASE.GRAY_400
    },
    price: {
        fontFamily: THEME.FONT_FAMILY.TITLE,
        fontSize: THEME.FONT_SIZE.TITLE.SM,
        color: THEME.COLORS.BASE.GRAY_100
    },
    action: {
        flexDirection: 'row',
        gap: 8
    },
    inputNumber: {
        borderColor: THEME.COLORS.BASE.GRAY_600,
        borderWidth: 1,
        borderRadius: 6
    }
});