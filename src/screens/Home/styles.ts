import { StyleSheet } from "react-native";
import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: THEME.COLORS.BASE.GRAY_900,
    },
    scrollView:{
        height: 590,
    },
    content: {
        width: '100%',
        paddingHorizontal: 32,
        paddingVertical: 32,
        gap: 32,
    },
    header: {
        height: 266,
        backgroundColor: THEME.COLORS.BASE.GRAY_100,
    },
    headerInfo: {
        width: '100%',
        flexDirection: 'column',
        paddingHorizontal: 32,
        paddingVertical: 20,
        paddingBottom: 0,
        justifyContent: 'center',
        
    },
    title:{
        fontFamily: THEME.FONT_FAMILY.TITLE,
        fontSize: THEME.FONT_SIZE.TITLE.MD,
        color: THEME.COLORS.BASE.WHITE,
    },
    cooffeeSeedPhoto: {
        width: '100%',
        position: 'relative',
        alignSelf: 'flex-end',
        marginRight: -28
    },
    carrousel:{ 
        position: 'relative',
        marginTop: -113,
        paddingHorizontal: 32,
        overflow: 'hidden',
        paddingVertical:0
    },
    sectionHeaderWrapper: {
        backgroundColor: THEME.COLORS.BASE.GRAY_900,
    },
    sectionHeader:{
        width: "100%",
        paddingHorizontal: 32,
        paddingVertical: 16,
        gap:12,
    },
    sectionHeaderTitle:{
        fontFamily: THEME.FONT_FAMILY.TITLE,
        fontSize: THEME.FONT_SIZE.TITLE.SM,
        color: THEME.COLORS.BASE.GRAY_300
    },
    tags:{
        flexDirection: 'row',
        gap: 8
    },
    sectionList: {
        paddingHorizontal: 32,
        gap: 32,
    },
    sectionListHeader: {
        marginTop: 16,
        marginBottom: 16,
        fontFamily: THEME.FONT_FAMILY.TITLE,
        fontSize: THEME.FONT_SIZE.TITLE.XS,
        color: THEME.COLORS.BASE.GRAY_400
    }
});