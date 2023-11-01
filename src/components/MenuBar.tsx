import * as React from 'react';
import { Text, View, StyleSheet, Animated, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


type Props = {
    tab: number;
    scrollToItem: (tab: number) => void
}

function MenuBar({ tab, scrollToItem }: Props) {

    return (
        <View>
            <ScrollView style={styles.stickyHeader} contentContainerStyle={styles.stickyHeaderContainer} horizontal>
                <View style={styles.stickyHeaderButtonWrapper}>
                    <TouchableOpacity style={[styles.stickyHeaderButton, { backgroundColor: tab == 0 ? '#00b8a9' : 'transparent' }]} onPress={() => scrollToItem(0)}>
                        <Text style={{ color: tab == 0 ? 'white' : '#00b8a9' }}>New daily Specials</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.stickyHeaderButton, { backgroundColor: tab == 1 ? '#00b8a9' : 'transparent' }]} onPress={() => scrollToItem(1)}>
                        <Text style={{ color: tab == 1 ? 'white' : '#00b8a9' }}>Salads</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.stickyHeaderButton, { backgroundColor: tab == 2 ? '#00b8a9' : 'transparent' }]} onPress={() => scrollToItem(2)}>
                        <Text style={{ color: tab == 2 ? 'white' : '#00b8a9' }}>How power bowls</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.stickyHeaderButton, { backgroundColor: tab == 3 ? '#00b8a9' : 'transparent' }]} onPress={() => scrollToItem(3)}>
                        <Text style={{ color: tab == 3 ? 'white' : '#00b8a9' }}>Gym food</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.stickyHeaderButton, { backgroundColor: tab == 4 ? '#00b8a9' : 'transparent' }]} onPress={() => scrollToItem(4)}>
                        <Text style={{ color: tab == 4 ? 'white' : '#00b8a9' }}>Bundles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.stickyHeaderButton, { backgroundColor: tab == 5 ? '#00b8a9' : 'transparent' }]} onPress={() => scrollToItem(5)}>
                        <Text style={{ color: tab == 5 ? 'white' : '#00b8a9' }}>Rainbow Wraps</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.stickyHeaderButton, { backgroundColor: tab == 6 ? '#00b8a9' : 'transparent' }]} onPress={() => scrollToItem(6)}>
                        <Text style={{ color: tab == 6 ? 'white' : '#00b8a9' }}>Vegan menu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.stickyHeaderButton, { backgroundColor: tab == 7 ? '#00b8a9' : 'transparent' }]} onPress={() => scrollToItem(7)}>
                        <Text style={{ color: tab == 7 ? 'white' : '#00b8a9' }}>Snacks and sides</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.stickyHeaderButton, { backgroundColor: tab == 8 ? '#00b8a9' : 'transparent' }]} onPress={() => scrollToItem(8)}>
                        <Text style={{ color: tab == 8 ? 'white' : '#00b8a9' }}>Yoghurt & fruit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.stickyHeaderButton, { backgroundColor: tab == 9 ? '#00b8a9' : 'transparent' }]} onPress={() => scrollToItem(9)}>
                        <Text style={{ color: tab == 9 ? 'white' : '#00b8a9' }}>Cold drinks</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.stickyHeaderButton, { backgroundColor: tab == 10 ? '#00b8a9' : 'transparent' }]} onPress={() => scrollToItem(10)}>
                        <Text style={{ color: tab == 10 ? 'white' : '#00b8a9' }}>Smoothies, shakes & juice</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    stickyHeader: { flexDirection: 'row', height: 100 },
    stickyHeaderContainer: { alignItems: 'center', flexDirection: 'row', maxHeight: 100 },
    stickyHeaderButtonWrapper: { flexDirection: 'row', height: 100, alignItems: 'center', backgroundColor: '#fff', padding: 10 },
    stickyHeaderButton: {
        height: 30,
        justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 10, paddingLeft: 10, paddingRight: 10
    },
});

export { MenuBar };