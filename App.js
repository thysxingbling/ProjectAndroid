import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import { CreateAccount } from "./screens/CreateAccount";
import ListChat from "./screens/ListChat";
import Profile from "./screens/Profile";
import Contact from "./screens/Contact";
import { Chat } from "./screens/Chat";
import Diary from "./screens/Diary";
import AddFriend from "./screens/AddFriend";
import Settings from "./screens/Settings";
import AddAccount from "./screens/AddAccount";

function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}></Stack.Screen>
         <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Register" component={Register}></Stack.Screen>
        <Stack.Screen name="CreateAccount" component={CreateAccount}></Stack.Screen>
        <Stack.Screen name="ListChat" component={ListChat}></Stack.Screen>
        <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
        <Stack.Screen name="Contact" component={Contact}></Stack.Screen>
        <Stack.Screen name="Chat" component={Chat}></Stack.Screen> 
        <Stack.Screen name="Diary" component={Diary}></Stack.Screen>
        <Stack.Screen name="AddFriend" component={AddFriend}></Stack.Screen>
        <Stack.Screen name="Settings" component={Settings}></Stack.Screen>
        <Stack.Screen name="AddAccount" component={AddAccount}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
