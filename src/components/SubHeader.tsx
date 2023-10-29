import React from "react"
import { Animated, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';

const SubHeader = () => {
    return (
        <Animated.View>
            <View style={{ flex: 1, height: 250 }}>
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
                <Text style={{ fontSize: 26, color: '#000', fontWeight: "700" }}>Tossed - St Martin's Lane</Text>
                <Text style={{ fontSize: 16, color: '#000', fontWeight: "300" }}>Chicken·Salads·Healthy</Text>
                <Text style={{ fontSize: 16, color: '#000', fontWeight: "300" }}>0.20 miles away·Closes at 21:00·£7.00</Text>
                <Text style={{ fontSize: 16, color: '#000', fontWeight: "300" }}>minimum·£0.49 delivery</Text>
                <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
                    <View style={{ height: 60, width: 30, justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                        <Icon name="info-circle" size={20} color="#00b8a9" />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column' }}>
                        <Text style={{ color: '#000', fontSize: 20, fontWeight: "200" }}>Info</Text>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: "200" }}>Map, allergens and hygiene rating</Text>
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
                        <Text style={{ color: '#000', fontSize: 20, fontWeight: "200" }}>4.7 Excellent</Text>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: "200" }}>See all 600 reviews</Text>
                    </View>
                    <View style={{ height: 60, width: 30, justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                        <Icon name="arrow-right" size={20} color="#00b8a9" />
                    </View>
                </View>
                <View style={{ height: 60, flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' }}>
                    <View style={{ height: 60, width: 30, justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                        <Icon name="info-circle" size={20} color="#00b8a9" />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column' }}>
                        <Text style={{ color: '#000', fontSize: 20, fontWeight: "200" }}>Deliver</Text>
                    </View>
                    <View style={{ height: 60, justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                        <Text style={{ color: '#00b8a9', fontSize: 16, fontWeight: "300" }}>Change</Text>
                    </View>
                </View>
                <ScrollView style={{ flexDirection: 'row' }} horizontal={true}>
                    <TouchableOpacity style={{ backgroundColor: '#00b8a9', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text>New daily Specials</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#00b8a9', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text>New daily Specials</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#00b8a9', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text>New daily Specials</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#00b8a9', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text>New daily Specials</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#00b8a9', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text>New daily Specials</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#00b8a9', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text>New daily Specials</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#00b8a9', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text>New daily Specials</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#00b8a9', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text>New daily Specials</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#00b8a9', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text>New daily Specials</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#00b8a9', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text>New daily Specials</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#00b8a9', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text>New daily Specials</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#00b8a9', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text>New daily Specials</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </Animated.View>
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


export { SubHeader };