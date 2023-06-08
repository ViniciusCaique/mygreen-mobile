

import { Text, TouchableOpacity, View, TextInput, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import { BackButton } from "../components/BackButton";


export function Login({ navigation }) {
    return(
        <View style={{ flex: 1, justifyContent: "center", paddingRight: 30, paddingLeft: 30, paddingTop: 30, paddingBottom: 50, backgroundColor: "#29220A" }}>

            <BackButton />

            <View style={{ alignItems: "center", paddingTop: 190, paddingBottom: 200 }}>
                <Text
                    style={{ color: 'white', fontSize: 20, padding: 10 }}
                >
                    Entrar
                </Text>
                <TextInput
                    style={{ color: 'white', width: 200, borderWidth: 1, borderStyle: "solid", borderColor: '#0B610B', backgroundColor: '#0B610B', borderRadius: 5 ,margin: 10, padding: 5, fontSize: 20 }}
                    placeholder="E-mail"
                    placeholderTextColor="#FAF9F6"
                    keyboardAppearance="dark"
                    type="text"
                />
                <TextInput
                    style={{ color: 'white', width: 200, borderWidth: 1, borderStyle: "solid", borderColor: '#0B610B', backgroundColor: '#0B610B', borderRadius: 5 ,margin: 10, padding: 5, fontSize: 20 }}
                    placeholder="Senha"
                    placeholderTextColor="#FAF9F6"
                    keyboardAppearance="dark"
                    secureTextEntry={true}
                    type="text"
                />
                <TouchableOpacity
                    onPress={() => navigation.push('Register')}
                >
                    <Text
                        style={{ color: 'white', padding: 5 }}
                    >
                        Criar Conta
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Alert.alert('ainda nao')}
                >
                    <Text
                        style={{ color: 'white', padding: 5 }}
                    >
                        Entrar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}