
import { Text, View, Alert, FlatList, ScrollView } from "react-native";
// import { api } from '../libs/axios'
import axios from 'axios'
import { useEffect, useState } from "react";

const jsonPlantas = [
    {
        "planta": [
            {
                "id_planta": 1,
                "nomePlanta": "Alface",
                "descricao": "A alface é uma planta herbácea, com um caule diminuto ao qual se prendem as folhas.",
                "tipo": "Comestível",
            }
        ],
        "clima": [
            {
                "id_clima": 3,
                "clima": "Chuvoso",
                "descricao": "Frio",
                "temperatura": 10,
            },
            {
                "id_clima": 4,
                "clima": "Nublado",
                "descricao": "Frio",
                "temperatura": 20,
            }   
        ],
        "turno": "Manhã",
        "duracao": "18 Meses" 
    },
    {
        "planta": [
            {
                "id_planta": 2,
                "nomePlanta": "Amoreira",
                "descricao": "A amoreira é um árvore decídua, cujo fruto, a amora, é apreciado no mundo todo. Seu porte é médio, alcançando de 4 a 12 metros de altura.",
                "tipo": "Comestível",
            }
        ],
        "clima": [
            {
                "id_clima": 3,
                "clima": "Chuvoso",
                "descricao": "Frio",
                "temperatura": 10,
            },
            {
                "id_clima": 4,
                "clima": "Nublado",
                "descricao": "Frio",
                "temperatura": 20,
            }   
        ],
        "turno": "Manhã",
        "duracao": "18 Meses" 
    },
    {
        "planta": [
            {
                "id_planta": 3,
                "nomePlanta": "Limoeira",
                "descricao": "O limoeiro, Citrus limon, é uma planta relativamente pequena e de copa arredondada",
                "tipo": "Comestível"
            }
        ],
        "clima": [
            {
                "id_clima": 3,
                "clima": "Ensolarado",
                "descricao": "Quente",
                "temperatura": 32,
            },
            {
                "id_clima": 5,
                "clima": "Nublado",
                "descricao": "Ameno",
                "temperatura": 23,
            }   
        ],
        "turno": "Manhã",
        "duracao": "18 Meses" 
    },
]


export function Planta() {


    // const [ plantas, setPlantas ] = useState([])

    // const getPlanta = async () => {
    //     await axios.get('/api/plantas', {
    //         // headers: {
    //         //     'Authorization': 'Bearer '
    //         // }
    //     })
    //         .then(response => {
    //             const data = response.data
    //             console.log(data)
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             Alert.alert('Erro', 'Não foi possível carregar os dados');
    //         })
    // }

    // useEffect(() => {
    //     getPlanta()
    // }, [])

    // prof tentamos de tudo, sem token, com token, liberei o acesso da req no projeto spring pra nao precisar de token e funcionou no postman, 100% que eh
    // algum problema na req aqui em js que eu n soube ver.

    return(
        <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#29220A" }}>
                <View style={{ alignItems: "center", width: "100%", height: "100%", padding: 20 }}>
                    <Text style={{ color: '#F2F2F2', fontSize: 35, fontWeight: "bold", paddingTop: 40, paddingBottom: 20 }}>
                        Plantas
                    </Text>
                    <FlatList
                        data={jsonPlantas}
                        renderItem={({ index, item }) => (
                            <View style={{ padding: 10, borderStyle: "solid", borderColor: "#0B610B", borderRadius: 10, borderWidth: 3, backgroundColor: "#0B610B", margin: 10 }}>  
                                <Text style={{ color: '#f5f5dc', fontSize: 20, fontWeight: "bold", padding: 10, alignSelf: "center" }}>Nome da Planta: {item.planta.map(planta => <Text key={planta.id_planta}>{planta.nomePlanta}</Text>)}</Text>
                                <Text style={{ color: '#f5f5dc', fontSize: 15, fontWeight: "bold", padding: 5 }}>Descrição da Planta: {item.planta.map(planta => <Text key={planta.id_planta}>{planta.descricao}</Text>)}</Text>
                                <Text style={{ color: '#f5f5dc', fontSize: 15, fontWeight: "bold", padding: 5 }}>Tipo da Planta: {item.planta.map(planta => <Text key={planta.id_planta}>{planta.tipo}</Text>)}</Text>
                                <Text style={{ color: '#f5f5dc', fontSize: 15, fontWeight: "bold", padding: 5 }}>Clima: {item.clima.map(clima => <Text key={clima.id_clima}>{clima.clima} </Text>)}</Text>
                                <Text style={{ color: '#f5f5dc', fontSize: 15, fontWeight: "bold", padding: 5 }}>Descricao: {item.clima.map(clima => <Text key={clima.id_clima}>{clima.descricao} </Text>)}</Text>
                                <Text style={{ color: '#f5f5dc', fontSize: 15, fontWeight: "bold", padding: 5 }}>Temperatura: {item.clima.map(clima => <Text key={clima.id_clima}>{clima.temperatura} °C </Text>)}</Text>
                                <Text style={{ color: '#f5f5dc', fontSize: 15, fontWeight: "bold", padding: 5 }}>Turno: {item.turno}</Text>
                                <Text style={{ color: '#f5f5dc', fontSize: 15, fontWeight: "bold", padding: 5 }}>Duração: {item.duracao}</Text>
                            </View>
                        )}
                        keyExtractor={( item, index ) => index.toString()}
                    />
                </View>
        </View>
    )
}