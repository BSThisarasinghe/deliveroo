import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, Animated, StyleSheet, View, Image, Alert, FlatList, TouchableOpacity } from 'react-native';
import { Footer, SubHeader } from '../components';
import { useDispatch, useSelector } from "react-redux";
import DataItem from '../models/data-item.model';
import MenuItem from '../models/menu-item.model';
import { fetchMockdata } from '../store/actions';
import { MenuListItem } from '../components/MenuItem';
import { MenuBar } from '../components/MenuBar';
import { RecipeListItem } from '../components/RecipeListItem';

export default function Home() {
    const flatListRef = useRef<FlatList<DataItem>>(null);
    const [tab, setTab] = useState(0);
    const [itemHeight, setItemHeight] = useState(0);

    const dispatch = useDispatch();

    const {
        orderDetails
    } = useSelector<any, any>(({ order }) => order);

    const scrollToItem = (index: number) => {
        setTab(index);
        if (flatListRef.current) {
            let data: any = orderDetails?.menu;
            flatListRef.current.scrollToItem({ animated: true, item: data[index] });
        }
    };

    useEffect(() => {
        dispatch(fetchMockdata());
    }, []);

    const renderMenuItem = ({ item }: { item: MenuItem }) => {
        return (
            <MenuListItem
                item={item}
            />
        )
    }


    const renderItem = ({ item }: { item: DataItem }) => {
        if (item.type == "header") {
            return (
                <MenuBar
                    tab={tab}
                    scrollToItem={scrollToItem}
                />
            )
        } else {
            return (
                <RecipeListItem
                    itemHeight={itemHeight}
                    setItemHeight={setItemHeight}
                    item={item}
                    renderMenuItem={renderMenuItem}
                />
            );
        }
    };

    const renderHeader = () => (
        <SubHeader
            orderDetails={orderDetails}
        />
    );

    const renderFooter = () => (
        <Footer />
    );

    const handleScroll = (event: any) => {
        const yOffset = event.nativeEvent.contentOffset.y;
        const approxIndex = Math.floor(yOffset / itemHeight);
        setTab(approxIndex);
    };

    return (
        <View style={styles.container}>
            <View>
                {/* <Text style={{ color: '#000' }}>{JSON.stringify(orderDetails)}</Text> */}
                <FlatList
                    ref={flatListRef}
                    data={orderDetails?.menu}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    stickyHeaderIndices={orderDetails?.menu.length > 0 ? [1] : [0]}
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
        margin: 0
    },
    menuItemWrapper: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20 },
    menuItemTextWrapper: { flex: 3 },
    menuItemTitle: { color: '#000', fontSize: 16, fontWeight: "700" },
    menuItemText: { color: '#000', fontSize: 12, fontWeight: "300" },
    menuImageWrapper: { flex: 1 },
    menuImage: { width: 100, height: 100 },
    stickyHeader: { flexDirection: 'row', height: 100 },
    stickyHeaderContainer: { alignItems: 'center', flexDirection: 'row', maxHeight: 100 },
    stickyHeaderButtonWrapper: { flexDirection: 'row', height: 100, alignItems: 'center', backgroundColor: '#fff', padding: 10 },
    stickyHeaderButton: {
        height: 30,
        justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10, paddingLeft: 10, paddingRight: 10
    },
    listItem: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    },
    itemType: { color: '#000', fontSize: 18, fontWeight: "700" }
});
