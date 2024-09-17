import { StyleSheet } from "react-native";
import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: THEME.COLORS.BASE.GRAY_900
    },
    footer:{
        backgroundColor: THEME.COLORS.BASE.WHITE,
        paddingHorizontal: 32,
        paddingTop: 28,
        paddingBottom: 40,
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 16
    },
    totals:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    totalsLabel: {
        fontFamily: THEME.FONT_FAMILY.TEXT,
        fontSize: THEME.FONT_SIZE.TEXT.MD,
        color: THEME.COLORS.BASE.GRAY_200
    },
    totalsValue: {
        fontFamily: THEME.FONT_FAMILY.TITLE,
        fontSize: THEME.FONT_SIZE.TITLE.MD,
        color: THEME.COLORS.BASE.GRAY_200
    },
    emptyContainer:{
        flex: 1,
        marginTop: 48,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12, 
        paddingHorizontal: 64,
    },
    emptyTitle: {
        fontFamily: THEME.FONT_FAMILY.TEXT,
        fontSize: THEME.FONT_SIZE.TEXT.MD,
        color: THEME.COLORS.BASE.GRAY_300
    },
    emptySubtitle: {
        fontFamily: THEME.FONT_FAMILY.TEXT,
        fontSize: THEME.FONT_SIZE.TEXT.SM,
        color: THEME.COLORS.BASE.GRAY_400
    },
    swipeableContainer:{
        width: '100%',
        backgroundColor: THEME.COLORS.BASE.GRAY_900,
        
    },
    swipeableRemove: {
        width: '100%',
        backgroundColor: THEME.COLORS.FEEDBACK.RED_LIGHT,
        paddingHorizontal: 32,
        justifyContent: 'center',
    }
});