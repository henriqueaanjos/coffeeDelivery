import { StyleSheet } from "react-native";
import { THEME } from "src/styles/theme";

export const styles = StyleSheet.create({
    container: {
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    },
    containerPressed:{
        backgroundColor: THEME.COLORS.BASE.GRAY_600,
    },
    containerRemoveButton:{
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        backgroundColor: THEME.COLORS.BASE.GRAY_600,
    },
    containerRemoveButtonPressed:{
        backgroundColor: THEME.COLORS.BASE.GRAY_700,
    },
});