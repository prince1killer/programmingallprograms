import { Image, ScrollView, Linking ,StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContectLint = () => {
    const contectList = [
        {
            uid : 1,
            name : "Pranav Kumar",
            Dis : "I am a developer",
            Imageurl : 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_640.jpg'
        },
        {
            uid : 2,
            name : "Riya",
            Dis : "I am a developer",
            Imageurl : "https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_640.jpg"
        },
        {
            uid : 3,
            name : "Kumari",
            Dis : "I am a developer",
            Imageurl : "https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100_640.jpg"
          },
          {
            uid : 4,
            name : "Om",
            Dis : "I am a developer",
            Imageurl : "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            uid : 5,
            name : "Hinal",
            Dis : "I am a developer",
            Imageurl : "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        
    ]
  return (
    <View>
      <Text style={styles.headingText}>Contect List</Text>
      <ScrollView scrollEnabled={false} style={styles.container}>
            {contectList.map(({uid, name, Dis, Imageurl})=>(
                <View key={uid} style={styles.profileBlock}>
                    <Image style={styles.profileImage} source={{uri:Imageurl}}/>
                    <View>
                      <Text style={styles.profileName}>{name}</Text>
                      <Text style={styles.profileDis}>{Dis}</Text>
                    </View>
                </View>
            ))}
      </ScrollView>
    </View>
  )
}

export default ContectLint

const styles = StyleSheet.create({
    headingText: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
      },
      container : {
        height : 620,
        margin : 15,
        padding : 10,
        borderRadius : 20,
        elevation : 2,
        shadowOffset : {
          width : 10,
          height : 10
        },
        shadowColor : "black"

      },
      profileBlock : {
        flex: 2,
        flexDirection : "row",
        alignItems : 'center',
        height : 110,
        margin : 5,
        backgroundColor : "red",
        borderRadius : 10
      },
      profileImage : {
        width : 80,
        height : 80,
        borderRadius : 50,
        marginHorizontal : 10
      },
      profileName : {
        fontSize : 25,
        color : '#fff',
        fontWeight : 'bold',
      },
      profileDis : {
        color : 'black',
        fontSize : 18
      },
})