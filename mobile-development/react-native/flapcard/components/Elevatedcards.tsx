import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Elevatedcards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Elevated cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevation ,styles.cardRed]}>
            <Text >Tab</Text>
        </View>
        <View style={[styles.card, styles.cardElevation ,styles.cardRed]}>
            <Text>Tab</Text>
        </View>
        <View style={[styles.card, styles.cardElevation ,styles.cardRed]}>
            <Text>Tab</Text>
        </View>
        <View style={[styles.card, styles.cardElevation ,styles.cardRed]}>
            <Text>Tab</Text>
        </View>
        <View style={[styles.card, styles.cardElevation ,styles.cardRed]}>
            <Text>Tab</Text>
        </View>
        <View style={[styles.card, styles.cardElevation ,styles.cardRed]}>
            <Text>Tab</Text>
        </View>
        <View style={[styles.card, styles.cardElevation ,styles.cardRed]}>
            <Text>Tab</Text>
        </View>
        <View style={[styles.card, styles.cardElevation ,styles.cardRed]}>
            <Text>Tab</Text>
        </View>
        <View style={[styles.card, styles.cardElevation ,styles.cardRed]}>
            <Text>Tab</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Elevatedcards

const styles = StyleSheet.create({
    headingText : {
      color : '#000',
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8
      },
      container : {
        padding : 8
      },
      card : {
        // flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        width : 100,
        height : 100,
        margin : 8,
        borderRadius : 20
      },
      cardElevation : {
        elevation : 1,
        shadowOffset : {
            width : 12,
            height : 12,
        },
        shadowColor : "black"

      },
      cardRed : {
        backgroundColor : "red",
      }
})