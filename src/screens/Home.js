import { Text, View } from "react-native";


export function Home() {
    return(
        <View style={{ flex: 1, justifyContent: "center", backgroundColor: "#29220A" }}>
            <View style={{ alignItems: "center", borderWidth: 1, borderStyle: "solid", borderColor: "#0B610B", backgroundColor: "#0B610B" }}>
                <Text style={{ color: 'white', fontSize: 40, fontWeight: "bold" , padding: 10 }}>
                    MyGreen
                </Text>
                <Text style={{ color: 'white', fontSize: 20, paddingBottom: 20 }}>
                    Torne nosso mundo mais verde!
                </Text>
            </View>
        </View>
    )
}