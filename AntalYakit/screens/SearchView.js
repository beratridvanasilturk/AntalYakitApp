import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from './SearchBar'
import useResults from './hooks/useResults'
import ResultsList from './ResultsList'
import { useState } from 'react'

export default function SearchView() {
 
  const [searchedElement, setSearchedElement] = useState("")
  const [searchApi, results] = useResults();
  console.log(results);

  const filterByPrices = (price) => {
    // her bir result için price'ı price'a eşit olanları döndürur
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <ScrollView>
    <View>
      <SearchBar 
      // SearchBar'da tanimladigimiz property'leri SearchView'de tanimliyoruz.
      searchedText = {searchedElement}
      onTextInputChange = {setSearchedElement}
      onTextInputEditingEnded = {() => 
      searchApi(searchedElement)
      }  
      />
      {/* // result ve title'i ResultsList'e gönderir */}
      <ResultsList style={styles.textName} title='Öğrenci Dostu:' results={filterByPrices('₺')} />
      <ResultsList style={styles.textName} title='Aile Ortamı:' results={filterByPrices('₺₺')} />
      <ResultsList style={styles.textName} title='Elit Mekanlar:' results={filterByPrices('₺₺₺')} />
    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  textName: {
      marginHorizontal: 15,
      fontWeight: 'bold',
      fontFamily: 'Avenir Next',
      fontcolor: 'black',
      textAlign: 'center',
  },
})