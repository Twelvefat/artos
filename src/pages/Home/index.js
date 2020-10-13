import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Home() {
    return (
        <View style={styles.page}>
            <Text>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex:1,
        backgroundColor: "#ffffff"
    }
})
