import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import ResultDetail from './ResultDetail'; // Add the missing import statement for ResultDetail
import { useNavigation } from '@react-navigation/native';

export default function ResultList({ title, results }) {
  const navigation = useNavigation();
  console.log(results);
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList style={styles.container}
        // horizantal keyword ile yatay olarak (ContainerView) listeleme yapabiliriz.
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        /* // item: her  bir result degeri */
        renderItem={({ item }) => {
          return (
            // parametre olarak backend'den gelen unique id gonderiyoruz, bu id'e gore sayfalari unique sekilde dolduracagiz.
            <TouchableOpacity onPress={() => navigation.navigate('ResultShowRestaurant', { id: item.id })
            }>
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    margin: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  },
})