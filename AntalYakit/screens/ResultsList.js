import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import ResultDetail from './ResultDetail'; // Add the missing import statement for ResultDetail

export default function ResultList({ title, results }) {
  console.log(results);
  return (
    <View>
      <Text>{title}</Text>
      <FlatList
      horizontal
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

const styles = StyleSheet.create({})