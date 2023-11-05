import { StyleSheet, Text, View, SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import Flatscard from './components/Flatscard'
import Elevatedcards from './components/Elevatedcards'
import FancyCard from './components/FancyCard'
import FancyTitlecard from './components/FancyTitlecard'
import ContectLint from './components/ContectLint'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatscard/>
        <Elevatedcards/>
        <FancyCard/>
        <ContectLint/>
        <FancyTitlecard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})