import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, Animated, StyleSheet, View, Image, Alert, FlatList, TouchableOpacity } from 'react-native';
import { SubHeader } from '../components';
import mockdata from '../data/mockdata.json';


interface DataItem {
    id: number;
    type: string;
    menuList?: any[];
}

interface MenuItem {
    title: string,
    description: string,
    kcal: number,
    price: number,
    image: string
}

export default function Home() {
    const flatListRef = useRef<FlatList<DataItem>>(null);
    let scrollOffsetY = useRef(new Animated.Value(0)).current;
    const [tab, setTab] = useState(0);
    const [foodDetails, setFoodDetails] = useState<any>(mockdata);
    const [itemHeight, setItemHeight] = useState(0);

    const [stickyHeaderIndices, setStickyHeaderIndices] = useState<number[]>([])


    const scrollToItem = (index: number) => {
        setTab(index);
        if (flatListRef.current) {
            let data: any = mockdata.menu;
            flatListRef.current.scrollToItem({ animated: true, item: data[index] }); // Scrolls to the 5th item (index is 0-based)
        }
    };

    const renderMenuItem = ({ item }: { item: MenuItem }) => {
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20 }}>
                <View style={{ flex: 3 }}>
                    <Text style={{ color: '#000', fontSize: 16, fontWeight: "700" }}>{item.title}</Text>
                    <Text style={{ color: '#000', fontSize: 12, fontWeight: "300" }}>{item.description}</Text>
                    <Text style={{ color: '#000', fontSize: 12, fontWeight: "300" }}>{item.kcal} kcal</Text>
                    <Text style={{ color: '#000', fontSize: 12, fontWeight: "300" }}>${item.price} sold out</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Image
                        source={{ uri: item.image }}
                        style={{ width: 100, height: 100 }}
                    />
                </View>
            </View>
        )
    }


    const renderItem = ({ item }: { item: DataItem }) => {
        if (item.type == "header") {
            return (
                <View>
                    <ScrollView style={{ flexDirection: 'row', height: 100, }} contentContainerStyle={{ alignItems: 'center', flexDirection: 'row', maxHeight: 100 }} horizontal>
                        <View style={{ flexDirection: 'row', height: 100, alignItems: 'center', backgroundColor: '#fff' }}>
                            <TouchableOpacity style={{ backgroundColor: tab == 0 ? '#00b8a9' : 'transparent', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10, paddingLeft: 10, paddingRight: 10 }} onPress={() => scrollToItem(0)}>
                                <Text style={{ color: tab == 0 ? 'white' : '#00b8a9' }}>New daily Specials</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: tab == 1 ? '#00b8a9' : 'transparent', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10, paddingLeft: 10, paddingRight: 10 }} onPress={() => scrollToItem(1)}>
                                <Text style={{ color: tab == 1 ? 'white' : '#00b8a9' }}>Salads</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: tab == 2 ? '#00b8a9' : 'transparent', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10, paddingLeft: 10, paddingRight: 10 }} onPress={() => scrollToItem(2)}>
                                <Text style={{ color: tab == 2 ? 'white' : '#00b8a9' }}>How power bowls</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: tab == 3 ? '#00b8a9' : 'transparent', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10, paddingLeft: 10, paddingRight: 10 }} onPress={() => scrollToItem(3)}>
                                <Text style={{ color: tab == 3 ? 'white' : '#00b8a9' }}>Gym food</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: tab == 4 ? '#00b8a9' : 'transparent', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10, paddingLeft: 10, paddingRight: 10 }} onPress={() => scrollToItem(4)}>
                                <Text style={{ color: tab == 4 ? 'white' : '#00b8a9' }}>Bundles</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: tab == 5 ? '#00b8a9' : 'transparent', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10, paddingLeft: 10, paddingRight: 10 }} onPress={() => scrollToItem(5)}>
                                <Text style={{ color: tab == 5 ? 'white' : '#00b8a9' }}>Rainbow Wraps</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: tab == 6 ? '#00b8a9' : 'transparent', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10, paddingLeft: 10, paddingRight: 10 }} onPress={() => scrollToItem(6)}>
                                <Text style={{ color: tab == 6 ? 'white' : '#00b8a9' }}>Vegan menu</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: tab == 7 ? '#00b8a9' : 'transparent', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10, paddingLeft: 10, paddingRight: 10 }} onPress={() => scrollToItem(7)}>
                                <Text style={{ color: tab == 7 ? 'white' : '#00b8a9' }}>Snacks and sides</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: tab == 8 ? '#00b8a9' : 'transparent', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10, paddingLeft: 10, paddingRight: 10 }} onPress={() => scrollToItem(8)}>
                                <Text style={{ color: tab == 8 ? 'white' : '#00b8a9' }}>Yoghurt & fruit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: tab == 9 ? '#00b8a9' : 'transparent', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10, paddingLeft: 10, paddingRight: 10 }} onPress={() => scrollToItem(9)}>
                                <Text style={{ color: tab == 9 ? 'white' : '#00b8a9' }}>Cold drinks</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: tab == 10 ? '#00b8a9' : 'transparent', height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10, paddingLeft: 10, paddingRight: 10 }} onPress={() => scrollToItem(10)}>
                                <Text style={{ color: tab == 10 ? 'white' : '#00b8a9' }}>Smoothies, shakes & juice</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            )
        } else {
            return (
                <View style={{
                    // backgroundColor: 'blue'
                    paddingTop: 20
                }}
                    onLayout={(event) => {
                        const { height } = event.nativeEvent.layout;
                        if (height !== itemHeight) {
                            setItemHeight(height);
                            // Adjust FlatList item height dynamically if needed
                            // flatListRef.current?.recordInteraction(); 
                        }
                    }}
                >
                    <Text style={{ color: '#000', fontSize: 18, fontWeight: "700" }}>{item.type}</Text>
                    <FlatList
                        data={item.menuList}
                        renderItem={renderMenuItem}
                        keyExtractor={(i, index) => index.toString()}
                    />
                </View>
            );
        }
    };

    const renderHeader = () => (
        <SubHeader
            animHeaderValue={scrollOffsetY}
            mockdata={mockdata}
        />
    );

    const renderFooter = () => (
        <View style={{ backgroundColor: '#2e3333', padding: 20 }}>
            <View style={{ backgroundColor: '#434848', borderRadius: 5, margin: 5, padding: 10 }}>
                <Text style={{ fontSize: 16, color: '#fff', fontWeight: '700' }}>Discover Deliveroo</Text>
                <Text>Investors</Text>
                <Text>About us</Text>
                <Text>Takeaway</Text>
                <Text>Newsroom</Text>
                <Text>Engineering blog</Text>
                <Text>Design blog</Text>
                <Text>Gift Cards</Text>
                <Text>Deliveroo Students</Text>
                <Text>Careers</Text>
                <Text>Restaurant signup</Text>
                <Text>Become a rider</Text>
            </View>
            <View style={{ backgroundColor: '#434848', borderRadius: 5, margin: 5, padding: 10 }}>
                <Text style={{ fontSize: 16, color: '#fff', fontWeight: '700' }}>Legal</Text>
                <Text>Terms and conditions</Text>
                <Text>Privacy</Text>
                <Text>Cookies</Text>
                <Text>Modern Slavery Statement</Text>
                <Text>Tax Strategy</Text>
                <Text>Section 172 Statement</Text>
            </View>
            <View style={{ backgroundColor: '#434848', borderRadius: 5, margin: 5, padding: 10 }}>
                <Text style={{ fontSize: 16, color: '#fff', fontWeight: '700' }}>Help</Text>
                <Text>Contact</Text>
                <Text>FAQs</Text>
                <Text>Cuisines</Text>
                <Text>Brands</Text>
            </View>
        </View>
    );

    const handleScroll = (event: any) => {
        const yOffset = event.nativeEvent.contentOffset.y;
        const approxIndex = Math.floor(yOffset / itemHeight); // Assuming ITEM_HEIGHT is the height of each item in your FlatList
        setTab(approxIndex);
    };

    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    ref={flatListRef}
                    data={mockdata.menu}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    stickyHeaderIndices={[1]}
                    ListHeaderComponent={renderHeader}
                    ListFooterComponent={renderFooter}
                    onScroll={handleScroll}
                    getItemLayout={(data, index) => ({
                        length: itemHeight,
                        offset: itemHeight * index,
                        index,
                    })}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 10,
        margin: 0
    },
    scrollText: {
        fontSize: 19,
        textAlign: 'center',
        padding: 20,
        color: '#000'
    }
});
