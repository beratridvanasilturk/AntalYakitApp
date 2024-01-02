import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from './SearchBar'
import useResults from './hooks/useResults'
import ResultsList from './ResultsList'

export default function SearchView() {
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
      <SearchBar />
      {/* // result ve title'i ResultsList'e gönderir */}
      <ResultsList title='Öğrenci Dostu:' results={filterByPrices('₺')} />
      <ResultsList title='Aile Ortamı:' results={filterByPrices('₺₺')} />
      <ResultsList title='Elit Mekanlar:' results={filterByPrices('₺₺₺')} />
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})