import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image source={{ uri: 'https://cdn.pixabay.com/photo/2014/07/16/05/18/beach-394503_1280.jpg' }} style={styles.cardImage} />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Sea Beach</Text>
          <Text style={styles.cardLabel}>Gujarat</Text>
          <Text style={styles.cardDiscription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eius libero ducimus iure animi in quam repellendus nisi explicabo aliquam quidem quaerat nemo, vitae perspiciatis?</Text>
          <Text style={styles.cardFooter}>24*7 open</Text>
        </View>
      </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
  headingText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  card: {
    // width: 360,
    height: 460,
    margin: 16,
    borderRadius: 20
  },
  cardElevated: {
    backgroundColor: "#fff",
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1
    },

  },
  cardImage: {
    height: 280,
    borderRadius: 20,

  },
  cardBody: {
    padding: 10

  },
  cardTitle: {
    color: "#000",
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6
  },
  cardLabel: {
    color: "#000",
    fontSize: 14,
    marginBottom: 6
  },
  cardDiscription: {
    color: "#000",
    fontSize: 12,
    marginBottom: 6
  },
  cardFooter: {
    color: '#000'
  },

})