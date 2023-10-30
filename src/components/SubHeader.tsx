import * as React from 'react';
import { Text, View, StyleSheet, Animated, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header_Max_Height = 700;
const Header_Min_Height = 80;

function SubHeader({ animHeaderValue, onPressTab }: any) {

    const animateHeaderHeight = animHeaderValue.interpolate({
        inputRange: [0, Header_Max_Height - Header_Min_Height],
        outputRange: [Header_Max_Height, Header_Min_Height],
        extrapolate: 'clamp'
    })

    return (
        <Animated.View
            style={[
                styles.header,
                {
                    height: animateHeaderHeight
                }

            ]}
        >
            <View style={{ flex: 1, height: 50 }}>
                <ImageBackground
                    source={require('../assets/images/background.webp')} // Replace this with the path to your splash screen image
                    style={styles.backgroundImage}
                >
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.backButton}>
                            <Icon name="arrow-left" size={20} color="#00b8a9" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bottomButton}>
                            <Icon name="users" size={20} color="#00b8a9" />
                            <Text style={{ color: '#000', marginLeft: 5 }}>Start group order</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
            <View style={{
                flex: 1,
                flexDirection: 'column',
                padding: 10,
                // backgroundColor: 'red',
                shadowColor: '#171717',
                shadowOffset: { width: -2, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 2,
            }}>
                <Text style={{ fontSize: 20, color: '#000', fontWeight: "700" }}>Tossed - St Martin's Lane</Text>
                <Text style={{ fontSize: 14, color: '#000', fontWeight: "300" }}>Chicken·Salads·Healthy</Text>
                <Text style={{ fontSize: 14, color: '#000', fontWeight: "300" }}>0.20 miles away·Closes at 21:00·£7.00</Text>
                <Text style={{ fontSize: 14, color: '#000', fontWeight: "300" }}>minimum·£0.49 delivery</Text>
                <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
                    <View style={{ height: 60, width: 30, justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                        <Icon name="info-circle" size={20} color="#00b8a9" />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column' }}>
                        <Text style={{ color: '#000', fontSize: 14, fontWeight: "200" }}>Info</Text>
                        <Text style={{ color: '#000', fontSize: 12, fontWeight: "200" }}>Map, allergens and hygiene rating</Text>
                    </View>
                    <View style={{ height: 60, width: 30, justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                        <Icon name="arrow-right" size={20} color="#00b8a9" />
                    </View>
                </View>
                <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
                    <View style={{ height: 60, width: 30, justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                        <Icon name="star" size={20} color="#00b8a9" />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column' }}>
                        <Text style={{ color: '#000', fontSize: 14, fontWeight: "200" }}>4.7 Excellent</Text>
                        <Text style={{ color: '#000', fontSize: 12, fontWeight: "200" }}>See all 600 reviews</Text>
                    </View>
                    <View style={{ height: 60, width: 30, justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                        <Icon name="arrow-right" size={20} color="#00b8a9" />
                    </View>
                </View>
                <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
                    <View style={{ height: 60, width: 30, justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                        <Icon name="bicycle" size={15} color="#00b8a9" />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column' }}>
                        <Text style={{ color: '#000', fontSize: 14, fontWeight: "200" }}>Deliver</Text>
                    </View>
                    <View style={{ height: 60, justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                        <Text style={{ color: '#00b8a9', fontSize: 14, fontWeight: "300" }}>Change</Text>
                    </View>
                </View>
            </View>
            <View>
                <ScrollView style={{ flexDirection: 'row', marginTop: -50, height: 100, }} contentContainerStyle={{ alignItems: 'center', flexDirection: 'row', maxHeight: 100 }} horizontal>
                    <View style={{ flexDirection: 'row', height: 100, alignItems: 'center', backgroundColor: '#fff' }}>
                        <TouchableOpacity style={{ backgroundColor: '#00b8a9', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10, paddingLeft: 10, paddingRight: 10 }}>
                            <Text>New daily Specials</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#00b8a9', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10, paddingLeft: 10, paddingRight: 10 }}>
                            <Text>Salads</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#00b8a9', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10, paddingLeft: 10, paddingRight: 10 }}>
                            <Text>How power bowls</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#00b8a9', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10, paddingLeft: 10, paddingRight: 10 }} onPress={() => onPressTab("Gym food")}>
                            <Text>Gym food</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#00b8a9', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10, paddingLeft: 10, paddingRight: 10 }}>
                            <Text>Bundles</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#00b8a9', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10, paddingLeft: 10, paddingRight: 10 }}>
                            <Text>Rainbow Wraps</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#00b8a9', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10, paddingLeft: 10, paddingRight: 10 }}>
                            <Text>Vegan menu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#00b8a9', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10, paddingLeft: 10, paddingRight: 10 }}>
                            <Text>Snacks and sides</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#00b8a9', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10, paddingLeft: 10, paddingRight: 10 }}>
                            <Text>Yoghurt & fruit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#00b8a9', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10, paddingLeft: 10, paddingRight: 10 }}>
                            <Text>Cold drinks</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#00b8a9', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10, paddingLeft: 10, paddingRight: 10 }}>
                            <Text>Smoothies, shakes & juice</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    header: {
        // justifyContent: 'center',
        // alignItems: 'center',
        // left: 0,
        // right: 0,
        // paddingTop: 10
    },
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

export { SubHeader };