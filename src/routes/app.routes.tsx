import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CartDTO } from "src/dto/cartDTO";
import { Cart } from "src/screens/Cart";
import { Finish } from "src/screens/Finish";
import { Home } from "src/screens/Home";
import { Product } from "src/screens/Product";
import { Splash } from "src/screens/Splash";

type AppRoutes = {
    splash:undefined, 
    home: {
        catalog?: boolean,
        newItem?: CartDTO
    },
    product: {
        productId: number
    },
    cart: undefined,
    finish: undefined
}

export type AppNavigatorRouteProps = NativeStackNavigationProp<AppRoutes>;
const { Navigator, Screen, Group } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{
            headerShown: false
        }}
        >
                <Screen
                    name="splash"
                    component={Splash}
                />
                <Screen
                    name="home"
                    component={Home}
                    initialParams={{catalog: false, newItem: {} as CartDTO}}
                />
            <Screen
                name="product"
                component={Product}
            />
            <Screen
                name="cart"
                component={Cart}
            />
            <Screen
                name="finish"
                component={Finish}
            />
        </Navigator>
    );
}