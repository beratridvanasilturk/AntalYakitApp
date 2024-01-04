import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from './SearchBar'
import useResults from './hooks/useResults'
import ResultsList from './ResultsList'
import { useState } from 'react'

export default function SearchView() {

  const [searchedElement, setSearchedElement] = useState("")
  // SearchBar'da tanimladigimiz property'leri SearchView'de cekmede kullaniyoruz.
  const [searchApi, results, errorMessage] = useResults();
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
          searchedText={searchedElement}
          onTextInputChange={setSearchedElement}
          onTextInputEditingEnded={() =>
            searchApi(searchedElement)
          }
        />
        {/* Olasi bir backend erroru durumunda bunu kullaniciya feedback olarak kullandik */}
        {errorMessage ? <Text style={{ alignSelf: 'center' }}> {errorMessage} </Text> : null}
        {/* // result'da donen sonuc 0 dan buyukse ekrana bassin anlamında kullanıldı, 
        length = swift'teki .count
        */}
        {results.length > 0 ? (
          <>

            {/* // result ve title'i ResultsList'e gönderir */}
            <ResultsList style={styles.textName} title='Öğrenci Dostu:' results={filterByPrices('₺')} />
            <ResultsList style={styles.textName} title='Aile Ortamı:' results={filterByPrices('₺₺')} />
            <ResultsList style={styles.textName} title='Elit Mekanlar:' results={filterByPrices('₺₺₺')} />
          </>)
          // Yoksa hicbir sey yapma anlaminda <></> kullanabilirdik, text ile kullaniciya feedback donduk.
          : (<Text style={{ alignSelf: 'center' }}> Aranan sonuç bulunamadı. </Text>)}
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