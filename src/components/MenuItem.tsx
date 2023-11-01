import React from "react"
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import MenuItem from "../models/menu-item.model";

type Props = {
    item: MenuItem
}

const MenuListItem = ({item}: Props) => {
    return (
        <View style={styles.menuItemWrapper}>
            <View style={styles.menuItemTextWrapper}>
                <Text style={styles.menuItemTitle}>{item.title}</Text>
                {item.description && <Text style={styles.menuItemText}>{item.description}</Text>}
                {item.kcal && <Text style={styles.menuItemText}>{item.kcal} kcal</Text>}
                {item.price && <Text style={styles.menuItemText}>${item.price} sold out</Text>}
            </View>
            <View style={styles.menuImageWrapper}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.menuImage}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menuItemWrapper: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20 },
    menuItemTextWrapper: { flex: 3 },
    menuItemTitle: { color: '#000', fontSize: 16, fontWeight: "700" },
    menuItemText: { color: '#000', fontSize: 12, fontWeight: "300" },
    menuImageWrapper: { flex: 1 },
    menuImage: { width: 100, height: 100 },
});


export { MenuListItem };