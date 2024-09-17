import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      },
      canvas: {
        top: 0,
        width: 96,
        height: 32,
        zIndex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16,
        position: "relative",
      },
      floor: {
        alignItems: "center",
        justifyContent: 'center',
        left: -45
      }
})