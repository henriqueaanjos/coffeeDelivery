import {
    View,
    Text,
    SectionList,
    StatusBar,
    ViewToken,
} from "react-native";

import { styles } from "./styles";

import { NavBar } from "@components/NavBar";
import { Input } from "@components/Input";
import { HighlightCard } from "@components/HighlightCard";

import CoffeeSeedSvg from "@assets/coffeeSeed.svg";

import { Tag } from "@components/Tag";
import { useEffect, useRef, useState } from "react";
import { coffeeDescriptions } from "@utils/coffeeDescriptions";
import { CatologCard } from "@components/CatologCard";

import { selectCoffeeInfo } from "@utils/selectCoffeeInfo";
import Animated, {
    SlideInRight,
    Keyframe,
    useSharedValue,
    SlideInDown,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    interpolateColor,
    interpolate,
    Extrapolation,
    useAnimatedRef,
    scrollTo,
    runOnJS,
    withTiming,
    withSequence,
} from "react-native-reanimated";
import { THEME } from "src/styles/theme";
import { CoffeeDTO } from "src/dto/coffeeDTO";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";
import { CartDTO } from "src/dto/cartDTO";
import { Toast } from "@components/Toast";
import { sizes } from "@utils/sizes";

const CARD_WIDTH = 208;
const CARD_SPACING = 32;

type RouteProps = {
    catalog?: boolean,
    newItem: CartDTO
}

export function Home() {
    const highlightsProductsIds = [4, 5, 6, 7, 12];
    const [tagActive, setTagActive] = useState(0);
    const [slideDrectionUp , setSlideDirectionUp] = useState(true);
    const [showToast, setShowToast] = useState(false);

    const route = useRoute();
    const { catalog, newItem } = route.params as RouteProps;

    const scrollY = useSharedValue(0);
    const startScrollY = useSharedValue(0);
    const viewableHightLightCard = useSharedValue<ViewToken[]>([]);
    const toastTranslateY = useSharedValue(-160);

    const sectionListRef = useRef<SectionList>(null);
   
    const enteringHeader = new Keyframe({
        0: {
            height: 44
        },
        100: {
            height: 120
        },
    });
    const continueEnteringHeader = new Keyframe({
        from: {
            height: 0,
        },
        to: {
            height: 266
        },
    });
    const elementsHeaderEnteringAnimation = new Keyframe({
        from: {
            transform: [{ translateY: 28}],
            opacity: 0,
        },
        to: {
            transform: [{ translateY: 0}],
            opacity: 1
        }
    });

    const headerAnimationStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(
                scrollY.value,
                [0, -484],
                [THEME.COLORS.BASE.GRAY_100, THEME.COLORS.BASE.GRAY_900]
            )
        }
    })

    const carrouselAnimationStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                scale: interpolate(
                    scrollY.value,
                    [0, -484],
                    [1, 0.8],
                    Extrapolation.CLAMP
                )
            }]
        }
    });
    const sectionHeaderAnimationStyle = useAnimatedStyle(() => {
        return {
            shadowColor: interpolateColor(
                scrollY.value,
                [0, -484],
                [THEME.COLORS.BASE.GRAY_900, '#000000']
            ),
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowRadius: interpolate(
                scrollY.value,
                [0, -484],
                [0, 4],
                Extrapolation.CLAMP
            ),
            shadowOpacity: interpolate(
                scrollY.value,
                [0, -484],
                [0, 0.05],
                Extrapolation.CLAMP
            )
        }
    });

    const containerAnimationStyle = useAnimatedStyle(() => {
        return {
            transform:[{
                translateY: scrollY.value
            }],
            height: interpolate(
                scrollY.value,
                [0, -484],
                [590, 100],
                Extrapolation.CLAMP
            )
        }
    })

    function handleChangeHighlightCardFocus(vItem: ViewToken[]) {
        viewableHightLightCard.value = vItem;
    }
    function handleChangeTagActive(index: number) {
        if(slideDrectionUp){
            scrollY.value = withTiming(-484);
            setSlideDirectionUp(false);
        }
        const indexActual = index === 0 ? 0 : index - 1;
        sectionListRef.current?.scrollToLocation({
            animated: true,
            sectionIndex: indexActual,
            itemIndex: 0
        });
    }

    const onPan = Gesture
    .Pan()
    .onStart((event) => {
        startScrollY.value = scrollY.value;
    })
    .onUpdate((event) => {
        if(slideDrectionUp){
            if(event.translationY < 0 && event.translationY > -484){
                scrollY.value = startScrollY.value + event.translationY;
            }
        }else{
            if(event.translationY > 0 && event.translationY < 484){
                scrollY.value = startScrollY.value + event.translationY;
            }
        }
    })
    .onEnd((event) => {
        if(slideDrectionUp && scrollY.value < 0 && scrollY.value > -484){
            scrollY.value = withTiming(-484);
            runOnJS(setTagActive)(1);
            runOnJS(setSlideDirectionUp)(false);
        }if(!slideDrectionUp && scrollY.value > -484 && scrollY.value < 0){
            scrollY.value = withTiming(0);
            runOnJS(handleChangeTagActive)(0);
            runOnJS(setSlideDirectionUp)(true);
        }
    })

    function scrollSectionHandler(event: any){
        if(event.nativeEvent.contentOffset.y > 0 && event.nativeEvent.contentOffset.y < 842){
            if(slideDrectionUp)
                setTagActive(0);
            else
                setTagActive(1);
          }
          if(event.nativeEvent.contentOffset.y > 842 && event.nativeEvent.contentOffset.y < 1364){
            setTagActive(2);
          }
          if(event.nativeEvent.contentOffset.y > 1364){
            setTagActive(3);
          }
    }

    useEffect(() => {
        if(slideDrectionUp)
            setTagActive(0);
        else
            setTagActive(1);
    }, [slideDrectionUp]);

    useEffect(()=> {
        if(catalog){
            scrollY.value = withTiming(-484);
            runOnJS(setTagActive)(1);
            runOnJS(setSlideDirectionUp)(false);
        }else{
            scrollY.value = withTiming(0);
            runOnJS(handleChangeTagActive)(0);
            runOnJS(setSlideDirectionUp)(true);
        }
    }, [catalog])

    useEffect(() => {
        if(newItem?.productId != undefined){
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 4000);
        }
    }, [newItem])

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={THEME.COLORS.BASE.GRAY_100}
                barStyle={"light-content"}
                translucent
            />
            <Animated.View
                style={[{backgroundColor: THEME.COLORS.BASE.GRAY_100, zIndex: 9999}, headerAnimationStyle]}
                entering={enteringHeader.duration(186)}
            >
                <NavBar 
                    animated={scrollY}
                />
            </Animated.View>
            <GestureDetector gesture={onPan}>
                <Animated.View style={[{height: 590}, containerAnimationStyle]}>
                    <Animated.View
                        style={[styles.scrollView]}
                    >
                        <Animated.View
                            style={[styles.header, headerAnimationStyle]}
                            entering={continueEnteringHeader.delay(186).duration(414)}
                        >
                            <Animated.View 
                                style={styles.headerInfo}
                                entering={elementsHeaderEnteringAnimation.delay(300).duration(300)}
                            >
                                <Text style={styles.title}>
                                    Encontre o café perfeito para qualquer hora do dia
                                </Text>
                                <Input placeholder="Pesquisar" />
                                <CoffeeSeedSvg style={styles.cooffeeSeedPhoto} />
                            </Animated.View>
                        </Animated.View>
                        <Animated.FlatList
                            style={[styles.carrousel, carrouselAnimationStyle]}
                            entering={SlideInRight.delay(600)
                                .duration(800)
                                .stiffness(50)
                                .damping(15)
                                .mass(1)}
                            onViewableItemsChanged={({ changed, viewableItems }) =>
                                handleChangeHighlightCardFocus(viewableItems)
                            }
                            viewabilityConfig={{ itemVisiblePercentThreshold: 95 }}
                            snapToAlignment="center"
                            snapToInterval={CARD_WIDTH + CARD_SPACING}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            contentContainerStyle={{
                                gap: 32,
                                paddingBottom: 22,
                                paddingTop: 32,
                                paddingRight: 64,
                            }}
                            data={highlightsProductsIds}
                            renderItem={({ item }) => (
                                <HighlightCard
                                    key={item}
                                    viewableItems={viewableHightLightCard}
                                    coffee={selectCoffeeInfo(item)}
                                />
                            )}
                        />
                        <Animated.View
                            style={[styles.sectionHeaderWrapper, sectionHeaderAnimationStyle]}
                            entering={SlideInDown.delay(600)
                                .duration(800)
                                .stiffness(50)
                                .damping(15)
                                .mass(1)}
                        >
                            <View style={styles.sectionHeader}>
                                <Text style={styles.sectionHeaderTitle}>Nossos Cafés</Text>
                                <View style={styles.tags}>
                                    {coffeeDescriptions.map((item, index) => (
                                        <Tag
                                            key={index}
                                            title={item.title}
                                            isActive={tagActive === index + 1}
                                            onPress={() => handleChangeTagActive(index + 1)}
                                        />
                                    ))}
                                </View>
                            </View>
                        </Animated.View>
                    </Animated.View>
                </Animated.View>
            </GestureDetector>
            <Animated.View 
                style={{flex: 1}}
                entering={SlideInDown.delay(600)
                    .duration(800)
                    .stiffness(50)
                    .damping(15)
                    .mass(1)}
            >
                <SectionList
                    ref={sectionListRef}
                    onScroll={scrollSectionHandler}
                    scrollEventThrottle={16}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={!slideDrectionUp}
                    style={styles.sectionList}
                    sections={coffeeDescriptions}
                    keyExtractor={(item) => item.title}
                    stickySectionHeadersEnabled={false}
                    renderItem={({ item }) => <CatologCard coffee={item} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text  style={styles.sectionListHeader}>{title}</Text>
                    )}
                    contentContainerStyle={{
                        gap: 32,
                    }}
                />
            </Animated.View>
            {showToast &&
                <Toast show={showToast}/>
            }
            
        </View>
    );
}
