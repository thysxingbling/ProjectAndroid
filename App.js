import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CreateAccount2 from "./screens/CreateAccount2";

function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Create account" component={Register}></Stack.Screen>
        <Stack.Screen
          name="Create account2"
          component={CreateAccount2}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
