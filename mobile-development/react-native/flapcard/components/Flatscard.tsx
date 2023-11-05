import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flatscard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flatscard</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardRed]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardGreen]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardOrange]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardYellow]}>
          <Text>Red</Text>
        </View>
        
      </View>
    </View>
  )
}

export default Flatscard

const styles = StyleSheet.create({
      headingText : {
        color : '#000',
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8
      },
      container : {
        flex : 1,
        flexDirection : "row"
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
      cardRed : {
        backgroundColor : "red",
      },
      cardGreen : {
        backgroundColor : "green",
      },
      cardOrange : {
        backgroundColor : "#fc8403",
      },
      cardYellow : {
        backgroundColor : "yellow",
      }
      
})