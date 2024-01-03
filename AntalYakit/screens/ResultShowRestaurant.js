import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from "/Users/asilturk/Developer/ReactNativeProjects/AntalYakitApp/AntalYakit/screens/api/yelp.js";
import { Dimensions } from 'react-native';
import { Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ResultShowRestaurant({ route }) {

  const [restaurant, setRestaurant] = useState(null);
  const id = route.params.id;
  const getRestaurantDetail = async (id) => {
    // istekten donen cevabi response'a atiyoruz.
    // await kullanabilmek icin async yapmamiz gerekiyor, Swift'deki async ile ayni. =) main thread'i kitlememek icin await kullanilir. =)
    // await'in amaci cevap gelene kadar beklemesini saglamak, Swift'deki await ile ayni. =) 
    // baseURL sonrasinda / ekleyerek id'leri cekiyoruz 
    const response = await yelp.get(`/${id}`);
    setRestaurant(response.data);
  };

  // useEffect() : UiKit'deki viewDidLoad() gibi calistirmak icin virgulden sonra bos array verirsek sadece bir kere calisir.
  // useEffect() aslinda SwiftUI'deki onAppear() 'in aynisidir. didLoad'a cevirmek icin virgulden sonra [] sarttir.
  useEffect(() => {
    getRestaurantDetail(id);
  }, []);

  // data gelene kadar hata vermemesi icin restaurant check ediyoruz.
  if (!restaurant) {
    return null;
  }

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => Linking.openURL(restaurant.url)}>
        <Text style={styles.title}>{restaurant.name + " "}
          {/* // css vermek icin view icerisine alabilirdik iconlari */}
          {
            restaurant.is_closed ?
              (<AntDesign name="closecircleo" color="red" size={43} />) :
              (<MaterialIcons name="delivery-dining" color="green" size={43} />)
          }
        </Text>

        <Text style={{ fontSize: 14, textAlign: 'left', fontWeight: 'bold', marginVertical: 10, marginHorizontal: 15 }}>
          Tel:
          {
            restaurant.display_phone ?
            restaurant.display_phone :
            " İşletme iletişim numarası paylaşmamıştır."
          },
        </Text>

      </TouchableOpacity>
      <Text style={{ fontSize: 14, textAlign: 'left', fontWeight: 'bold', marginVertical: 10, marginHorizontal: 15 }}>
        Adres: {restaurant.location.display_address[0]} {restaurant.location.display_address[1]}</Text>

      <Text style= {styles.text2}> İşletme Görüntüsü : </Text>
      <FlatList
        data={restaurant.photos}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />

    </SafeAreaView>
  )
}

// Cihazın ekran genişliğini alir
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({

  title: {
    // alignSelf: 'center',
    // flex : 1,
    fontFamily: 'Futura',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  image: {
    // SwfitUI'deki .frame'de UIScreen.main.bounds * 0.95 ile ayni
    width: screenWidth * 0.95,
    height: screenHeight * 0.3,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'gray',
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: 'red',
  },
  icons: {
    fontSize: 38,
  },
  text2: {
    // alignSelf: 'center',
    // flex : 1,
    fontFamily: 'Futura',
    fontSize: 16,
    fontStyle: 'italic',
    marginHorizontal: 15,
    marginVertical: 10,
  },
})
