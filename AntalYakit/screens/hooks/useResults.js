import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {

    const [errorMessage, setErrorMessage] = useState("");
    const [results, setResults] = useState([]);
    const searchApi = async (searchTerm) => {
        try {
            // donen cevabi response degiskenine atiyoruz.
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "antalya",
                },
            });
            setResults(response.data.businesses);
            // hata varsa error veriyoruz yoksa bos dize atiyoruz.
            setErrorMessage("");
        } catch (err) {
            // backend'den response gelmezse error veriyoruz.
            setErrorMessage("İnternet bağlantınızı kontrol ediniz.");
        }
    };
    // .didLoad veya .onAppear gibi ekran ilk yüklendiğinde çalışacak bir fonksiyon yazmak için kullanilir.
    // Ilk acildiginda belli parametreleri vermek isteseydik [] icerisinde useEffect kullanabilirdik.
    useEffect(() => {
        // ekran ilk acildiginda duruma gore arama yapacagiz
        searchApi("cafe");
    }, []);

    // SearchScreen'den gelecek arama degerine gore kullanmak için return ediyoruz.
    // searchApi ve results'u SearchScreen'de kullanmak icin StateObject veya ObservableObject gibi dusunebilirsin.  
    // Bu view'den SearchScreen'e error message'i da aktarim yapmak icin return'e ekliyoruz.
    return [searchApi, results, errorMessage];

};
