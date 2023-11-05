import React from "react";
import {View, Text, SafeAreaView,StyleSheet, useColorScheme} from 'react-native';

function App():JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'
  return (
    // <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.DarkText}>Hello world!</Text>
      </View>
    // </SafeAreaView> 
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center"
  },
  whiteText : {
    color:"#fff"
  },
  DarkText:{
    color : "#000",
    fontSize : 54
  }
})
export default App;