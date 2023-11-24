import { PlusCircleOutlined } from "@ant-design/icons";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { Image } from "react-native";
import { Pressable } from "react-native";
import { View, Text } from "react-native";

const AddAccount = ({navigation}) => {
  return (
    <View>
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
          Chuyển tài khoản
        </Text>
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text style={{ textAlign: "center", fontSize: 15, fontWeight: 500 }}>
          Thêm tài khoản để đăng nhập nhanh.
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          backgroundColor: "white",
          flexDirection: "row",
        }}
      >
        <Image
          style={{ width: 50, height: 50, margin: 10 }}
          source={require("../assets/Avatar.png")}
        ></Image>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 500,
            marginTop: 20,
            marginLeft: 10,
          }}
        >
          Thu Thúy
        </Text>
        <Text
          style={{
            fontSize: 13,
            color: "gray",
            marginLeft: 100,
            marginTop: 20,
          }}
        >
          Đã đăng nhập
        </Text>
      </View>
      <View style={{ backgroundColor: "white", flexDirection: "row" }}>
        <PlusCircleOutlined style={{margin:10,fontSize:50,color:"#0091ff"}} />

        <Text
          style={{
            fontSize: 15,
            fontWeight: 500,
            marginTop: 20,
            marginLeft: 10,
          }}
        >
          Thêm tài khoản
        </Text>
      </View>
    </View>
  );
};

export default AddAccount;
