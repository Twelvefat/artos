import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Transaction() {
    return (
        <View style={styles.page}>
            <Text>Transaction Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex:1,
        backgroundColor: "#ffffff"
    }
})
