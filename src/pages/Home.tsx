import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, Animated, StyleSheet, View, Image, Alert } from 'react-native';
import { SubHeader } from '../components';


export default function App() {
    const scrollViewRef = useRef<any>(null);
    let scrollOffsetY = useRef(new Animated.Value(0)).current;
    const [tab, setTab] = useState('New daily Specials');

    const onPressTab = (tabName: string) => {
        setTab(tabName);
        const yOffset = 500;
        // console.log("@@@", tabName);
        
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: yOffset, animated: true });
        }
    }

    useEffect(() => {

    }, [tab]);

    return (
        <View style={styles.container}>
            <SubHeader
                animHeaderValue={scrollOffsetY}
                onPressTab={onPressTab}
            />
            <ScrollView
                ref={scrollViewRef}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
                    { useNativeDriver: false }
                )}
            >
                <View style={{
                    // backgroundColor: 'blue'
                    paddingTop: 20
                }}>
                    <Text style={{ color: '#000', fontSize: 12 }}>Adults need around 200 kcal a day</Text>
                    <Text style={{ color: '#000', fontSize: 18, fontWeight: "700" }}>New Daily Specials</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20 }}>
                        <View>
                            <Text style={{ color: '#000', fontSize: 16, fontWeight: "700" }}>Halloumi & roasted veg salad</Text>
                            <Text style={{ color: '#000', fontSize: 16, fontWeight: "700" }}>DAILY SPECIAL</Text>
                            <Text style={{ color: '#000', fontSize: 12, fontWeight: "300" }}>Currently sold out</Text>
                            <Text style={{ color: '#000', fontSize: 12, fontWeight: "300" }}>467 kcal</Text>
                            <Text style={{ color: '#000', fontSize: 12, fontWeight: "300" }}>$8.99 sold out</Text>
                        </View>
                        <View>
                            <Image
                                source={{ uri: 'https://rs-menus-api.roocdn.com/images/42b4537d-92c4-40b3-a2cd-4af40b0fae87/image.jpeg' }}
                                style={{ width: 100, height: 100 }}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: '#2e3333' }}>
                    <View style={{ backgroundColor: '#2e3333' }}>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                    </View>
                    <View style={{ backgroundColor: '#2e3333' }}>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                    </View>
                    <View style={{ backgroundColor: '#2e3333' }}>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                    </View>
                    <View style={{ backgroundColor: '#2e3333' }}>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                    </View>
                    <View style={{ backgroundColor: '#2e3333' }}>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                        <Text>Discover Deliveroo</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        margin: 0
    },
    scrollText: {
        fontSize: 19,
        textAlign: 'center',
        padding: 20,
        color: '#000'
    }
});
