import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import ResultDetail from './ResultDetail'; // Add the missing import statement for ResultDetail

export default function ResultList({ title, results }) {
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
            <TouchableOpacity>
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}/>
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