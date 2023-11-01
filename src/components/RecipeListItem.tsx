import * as React from 'react';
import { Text, View, StyleSheet, Animated, ImageBackground, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DataItem from '../models/data-item.model';


type Props = {
    itemHeight: number;
    setItemHeight: (itemHeight: number) => void;
    item: DataItem;
    renderMenuItem: any
}

function RecipeListItem({ itemHeight, setItemHeight, item, renderMenuItem }: Props) {

    return (
        <View style={styles.listItem}
            onLayout={(event) => {
                const { height } = event.nativeEvent.layout;
                if (height !== itemHeight) {
                    setItemHeight(height);
                }
            }}
        >
            <Text style={styles.itemType}>{item.type}</Text>
            <FlatList
                data={item.menuList}
                renderItem={renderMenuItem}
                keyExtractor={(i, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20
    },
    itemType: { color: '#000', fontSize: 18, fontWeight: "700" }
});

export { RecipeListItem };