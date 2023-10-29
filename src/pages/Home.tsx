import React, { useRef } from "react";
import { Animated, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { SubHeader } from "../components";

const Home = () => {
    const scrollOffsetY = useRef(new Animated.Value(0)).current;
    return (
        <View style={{ flex: 1 }}>
            <SubHeader />
            <ScrollView style={{ padding: 10 }}>
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
            </ScrollView>
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
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch' if you want to stretch the image
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        width: 40,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 1)', // semi-transparent white background
        padding: 10,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'rgba(255, 255, 255, 1)', // semi-transparent white background
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default Home;