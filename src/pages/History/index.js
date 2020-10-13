import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function History() {
    return (
        <View style={styles.page}>
            <Text>History Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex:1,
        backgroundColor: "#ffffff"
    }
})
