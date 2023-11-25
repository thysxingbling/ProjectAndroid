import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";

function Model_AddAccount(props) {
  const [text, onChangeText] = React.useState("");
  const [phone, onChangePhone] = React.useState("");
  const navigation = useNavigation();
  return (
    <View
    >
         <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "#129EFD",
          height: 55,
          borderBottomColor: "#d5d3da",
          borderBottomWidth: 0.1,
          marginBottom: 10,
        }}
      >
        <Pressable
          style={{ flexDirection: "row", justifyContent: "space-between" }}
          onPress={() => {
            navigation.goBack("Settings");
          }}
        >
          <AntDesign
            name="arrowleft"
            size={30}
            color="white"
            style={{ marginLeft: 5 }}
          ></AntDesign>
        </Pressable>
        <Text
          style={{
            color: "white",
            fontSize: 18,
            fontWeight: "500",
            width: "60%",
            height: "100%",
            marginTop: 25,
            marginLeft: 25,
          }}
        >
       Đăng nhập
        </Text>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text style={{ textAlign: "center", fontSize: 15, fontWeight: 500 }}>
      Vui lòng nhập số điện thoại và mật khẩu để đăng nhập
        </Text>
      </View>
      
    </View>
  );
}
export default Model_AddAccount;
