import { Linking, TouchableOpacity ,StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const FancyTitlecard = () => {
  const openlink = (websiteLink : string) => {
      Linking.openURL(websiteLink)
  }
  return (
    <View>
      <Text style={styles.headingText}>FancyTitlecard</Text>
      <View style={styles.cardContainer}>
        <Text style={styles.blogTitle}>Blog</Text>
        <Image style={styles.imageCard} source={{ uri: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D' }} />
        <View style={styles.textContainer}>
          <Text numberOfLines={3} style={styles.blogDis}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem sunt ducimus esse sint dolorem nulla? Quo maxime magni, autem nesciunt sunt quibusdam ratione corrupti iusto! Voluptate suscipit aut libero, adipisci magnam dolores debitis hic corporis assumenda a voluptatibus repellat perspiciatis quis sequi rem, quos reprehenderit at minima nostrum quisquam veniam?</Text>
        </View>
        <View style={[styles.footerContainer, styles.textContainer]}>
          <TouchableOpacity style={styles.blogButton} onPress={()=>openlink("https://javatpoint.com")}>
            <Text style={[styles.blogTitle, styles.blogbuttoncolor]}>Read More...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default FancyTitlecard

const styles = StyleSheet.create({
  headingText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  blogTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    padding: 8
  },
  cardContainer: {
    marginHorizontal: 15,
    marginVertical : 15,
    borderRadius: 12,
    height: 520,
    elevation : 1,
    shadowOffset : {
      width : 15,
      height : 15
    },
    shadowColor : "black"

  },
  footerContainer : {

  },
  imageCard: {
    height: 280,
    borderRadius: 30
  },
  textContainer : {
    padding : 8
  },
  buttonContainer : {},
  blogDis: {
    fontSize : 15,
    color : "black",
    padding : 8,
  },
  blogButton: {
    width : 150,
    margin : 5,
    padding : 8,
    borderRadius : 10,
    backgroundColor : "red"
  },
  blogbuttoncolor : {
    color : '#fff'
  }

})