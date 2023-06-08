
import { useEffect, useState } from "react";
import { ImageBackground, TextInput } from "react-native";
import { View, Text, Alert } from "react-native";
import axios from 'axios'

const apiKey = '3f024b701f398517870c5939f1d0a2e2'

const image = { uri: 'https://4kwallpapers.com/images/wallpapers/golden-hour-sunset-clouds-landscape-5k-2560x1440-395.jpg' }

export function Clima() {

    const [ location, setLocation ] = useState('')
    const [ getWeatherData, setWeatherData ] = useState([])

    const getData = async () => {
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?`, {
            params: {
                q: location,
                units: "metric",
                appid: apiKey
            }
        })
            .then(response => {
                const data = response.data
                const locWeather = {
                    nome: data.name,
                    temp: data.main.temp,
                    cond: data.weather[0].description,
                }
                setWeatherData(locWeather)
            })
            .catch((err) => {
                // console.log(err);
                // Alert.alert('Erro', 'Não foi possível carregar os dados');
            })
    }

    return(
        <ImageBackground
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            source={ image }
            blurRadius={3}
        >
            {getWeatherData == '' ? null : 
                <View
                    style={{ 
                        alignItems: 'center',
                        padding: 5,
                        marginBottom: 10,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 40,
                            color: '#ebebeb',
                            padding: 5,
                        }}
                    >
                        {getWeatherData.nome}
                    </Text>
                    <Text
                        style={{
                            fontSize: 60,
                            color: '#ebebeb',
                            padding: 5,
                        }}
                    >
                        {Math.round(getWeatherData.temp)}°
                    </Text>
                    <Text
                        style={{
                            textTransform: "capitalize",
                            fontSize: 25,
                            color: '#ebebeb',
                            padding: 5,
                        }}
                    >
                        {getWeatherData.cond}
                    </Text>
                </View>
            } 
        
            <TextInput  
                style={{
                    color: 'white',
                    borderStyle: "solid",
                    borderWidth: 2,
                    borderColor: "#0B610B",
                    backgroundColor: "#0B610B",
                    borderRadius: 5,
                    marginBottom: 150,
                    padding: 10,
                    width: 200,
                }}
                placeholder="Search any city"
                placeholderTextColor="#FFF"
                keyboardAppearance="dark"
                value={location}
                onChangeText={(value) => setLocation(value)}
                onBlur={() => getData()}
            />
        </ImageBackground>
    )
}