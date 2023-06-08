import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { BackButton } from "../components/BackButton";


export function Register({ navigation }) {
    return(
        <View style={{ flex: 1, justifyContent: "center", paddingRight: 30, paddingLeft: 30, paddingTop: 30, backgroundColor: "#29220A" }}>

            <BackButton />

            <View style={{ alignItems: "center", paddingTop: 150, paddingBottom: 230 }}>
                <Text
                    style={{ color: 'white', fontSize: 25, padding: 10 }}
                >
                    Criar Conta
                </Text>
                <TextInput
                    style={{ color: 'white', width: 250, borderWidth: 1, borderStyle: "solid", borderColor: '#0B610B', backgroundColor: '#0B610B', borderRadius: 5, margin: 10, padding: 5, fontSize: 20 }}
                    placeholder="Nome"
                    placeholderTextColor="#FAF9F6"
                    type="text"
                />
                <TextInput
                    style={{ color: 'white', width: 250, borderWidth: 1, borderStyle: "solid", borderColor: '#0B610B', backgroundColor: '#0B610B', borderRadius: 5, margin: 10, padding: 5, fontSize: 20 }}
                    placeholder="E-mail"
                    placeholderTextColor="#FAF9F6"
                    keyboardAppearance="dark"
                    type="text"
                />
                <TextInput
                    style={{ color: 'white', width: 250, borderWidth: 1, borderStyle: "solid", borderColor: '#0B610B', backgroundColor: '#0B610B', borderRadius: 5, margin: 10, padding: 5, fontSize: 20 }}
                    placeholder="Senha"
                    placeholderTextColor="#FAF9F6"
                    keyboardAppearance="dark"
                    secureTextEntry={true}
                    type="text"
                />
                <TouchableOpacity
                    onPress={() => Alert.alert('ainda nao')}
                >
                    <Text
                        style={{ color: 'white', padding: 5,  }}
                    >
                        Criar Conta
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.push('Login')}
                >
                    <Text
                        style={{ color: 'white', padding: 5 }}
                    >
                        Fazer Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}