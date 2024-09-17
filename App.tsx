import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Baloo2_700Bold } from "@expo-google-fonts/baloo-2";
import { Loading } from "@components/Loading";
import { Routes } from "@routes/index";
import { Cart } from "src/screens/Cart";
import { CartContextProvider } from "src/context/cartContext";


export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold, Baloo2_700Bold});
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CartContextProvider>
        {fontsLoaded ? 
          <Routes/> 
          : <Loading/>
        }
      </CartContextProvider>
		</GestureHandlerRootView>
  );
}

