import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'


export function BackButton() {

    const { goBack } = useNavigation()

    return(
        <TouchableOpacity
            onPress={goBack}
        >
            <Feather 
                name="arrow-left"
                size={30}
                color={'#FAF9F6'}
            />
        </TouchableOpacity>
    )
}