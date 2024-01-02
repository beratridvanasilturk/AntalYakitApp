import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from './SearchBar'
import useResults from './hooks/useResults'

export default function SearchView() {
  const [searchApi, results] = useResults()
  console.log(results)
  
  return (
    <View>
      <SearchBar />
    </View>
  )
}

const styles = StyleSheet.create({})