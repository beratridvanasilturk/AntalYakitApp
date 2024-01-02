import { useEffect, useState } from "react";

export default () => {

    const [results, setResults] = useState([]);
    const searchApi = async (searchTerm) => {
        // donen cevabi response degiskenine atiyoruz.
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'antalya'
            },
        });
        setResults(response);
    };
    // .didLoad veya .onAppear gibi ekran ilk yüklendiğinde çalışacak bir fonksiyon yazmak için kullanilir.
    // Ilk acildiginda belli parametreleri vermek isteseydik [] icerisinde useEffect kullanabilirdik.
    useEffect(() => {
        // ekran ilk acildiginda durum'e gore arama yapacagiz
        searchApi('dürüm');
    }, []);

    // SearchScreen'den gelecek arama degerine gore kullanmak için return ediyoruz.
    // searchApi ve results'u SearchScreen'de kullanmak icin StateObject veya ObservableObject gibi dusunebilirsin.  
    return [searchApi, results];

};
