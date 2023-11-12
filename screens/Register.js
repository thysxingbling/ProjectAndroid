import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";

const arr = [
  {
    label: "VN",
    value: "1",
  },
  {
    label: "ThaiLand",
    value: "2",
  },
  {
    label: "Sing",
    value: "3",
  },
  {
    label: "US",
    value: "4",
  },
  {
    label: "Indo",
    value: "5",
  },
  {
    label: "Mailay",
    value: "6",
  },
];
function Register(props) {
  const [selected, setSelected] = useState("Select");
  const [isClicked, setIsClicked] = useState(false);
  const [data, setData] = useState(arr);
  var navigation = useNavigation();
  return (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#ffff" }}
    >
      <View
        style={{
          flex: 1,
          width: "390px",
          height: "10px",
          padding: 5,
          backgroundColor: "gray",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: "15px",
            fontWeight: "500",
            fontStyle: "normal",
            alignItems: "center",
          }}
        >
          Vui lòng nhập số điện thoại và mật khẩu đăng nhập
        </Text>
      </View>
      <View style={{ flex: 8, backgroundColor: "#ffff" }}>
        <TouchableOpacity
          style={{
            width: "20%",
            height: 50,
            borderRadius: "5px",
            borderWidth: "1px",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
          onPress={() => {
            setIsClicked(!isClicked);
          }}
        >
          <Text>{setSelected}</Text>
          {isClicked ? (
            <Image
              source={require("../assets/upload.png")}
              style={{
                width: 15,
                height: 15,
                justifyContent: "flex-end",
                alignItems: "center",
                marginLeft: 50,
              }}
            />
          ) : (
            <Image
              source={require("../assets/dropdown.png")}
              style={{
                width: 20,
                height: 20,
                justifyContent: "flex-end",
                alignItems: "center",
                marginLeft: 50,
              }}
            />
          )}
        </TouchableOpacity>
        {isClicked ? (
          <View
            style={{
              width: "20%",
              height: 80,
              borderRadius: "5px",
              borderWidth: "1px",
            }}
          >
            <FlatList
              data={data}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSelected(item.label);
                      setIsClicked(false);
                    }}
                  >
                    <Text>{item.label}</Text>
                  </TouchableOpacity>
                );
              }}
            ></FlatList>
          </View>
        ) : null}
      </View>
      <View
        style={{
          flex: 1,
          marginLeft: 20,
          backgroundColor: "#ffff",
          flexDirection: "column",
        }}
      >
        <View>
          {" "}
          <Text
            style={{ fontWeight: "500", marginBottom: 5, fontSize: "15px" }}
          >
            Tiếp tục nghĩa là bạn đồng ý với các
            <Image
              source={require("../assets/next.png")}
              style={{
                width: "20px",
                height: "20px",
                marginLeft: 300,
              }}
              onPress={() => props.navigation.navigate("Create Account2")}
            ></Image>
          </Text>
          <Text style={{ color: "#1FAEEB", fontSize: "14px", fontSize: "500" }}>
            điều khoản sử dụng Zalo
          </Text>
        </View>
      </View>
    </View>
  );
}
export default Register;
