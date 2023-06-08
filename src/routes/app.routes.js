
import { Feather } from '@expo/vector-icons'

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { Planta  } from '../screens/Planta';
import { Clima } from '../screens/Clima';

const Tabs = createBottomTabNavigator()
const ProfileStack = createNativeStackNavigator()

const ProfileStackScreen = () => {
    return(
        <ProfileStack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
        >
            <ProfileStack.Screen name="Login" component={Login} />
            <ProfileStack.Screen name="Register" component={Register} />
        </ProfileStack.Navigator>
    )
}

export function AppRoutes() {
    return(
        <Tabs.Navigator 
            screenOptions={{ 
                headerShown: false, 
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: "#343A40",
                },
            }}
        >
            <Tabs.Screen 
                name="Home"
                component={Home}
                options={{ 
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name='home'
                            size={25}
                            color={ focused ? '#FFFFFF' : '#C0C0C0' }
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="Planta"
                component={Planta}
                options={{ 
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name='book'
                            size={25}
                            color={ focused ? '#FFFFFF' : '#C0C0C0' }
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="Clima"
                component={Clima}
                options={{ 
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name='cloud'
                            size={25}
                            color={ focused ? '#FFFFFF' : '#C0C0C0' }
                        />
                    )
                }}
            />
            <Tabs.Screen 
                name="Profile"
                component={ProfileStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name='user'
                            size={25}
                            color={ focused ? '#FFFFFF' : '#C0C0C0' }
                        />
                    )
                }}
            />
        </Tabs.Navigator>
    )
}