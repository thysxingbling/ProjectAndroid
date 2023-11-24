import * as React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  AppstoreOutlined,
  ClockCircleOutlined,
  ContactsOutlined,
  MessageOutlined,
  SearchOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState, useEffect } from "react";
import { Image } from "react-native";
import { ScrollView } from "react-native";

const ListChat = ({ navigation }) => {
  var [data, setData] = useState([]);
  var fc = () => {
    const url = "https://6554d45e63cafc694fe70d65.mockapi.io/api/user";
    fetch("https://6554d45e63cafc694fe70d65.mockapi.io/api/user")
      .then((response) => response.json())
      .then((json) => {
        data = json;
        setData(data);
      });
  };
  useEffect(fc, []);
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "column",
      }}
    >
      {/* header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          backgroundColor: "#129EFD",
          height: 55,
        }}
      >
        <TouchableOpacity style={{ margin: 10 }}>
          <SearchOutlined style={{ color: "#fff", fontSize: 30 }} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#129EFD",
            width: "70%",
            height: "35px",
            marginTop: 10,
            justifyContent: "center",
            marginLeft: 10,
            borderRadius: 10,
            padding: 10,
          }}
          onPress={() => <TextInput placeholder="Tìm kiếm" ></TextInput>}
        >
          <Text style={{ color: "#87C6FF", fontSize: "16px" }}>Tìm kiếm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ margin: 10 }}>
          <UserAddOutlined style={{ color: "#fff", fontSize: 30 }} />
        </TouchableOpacity>
      </View>

      {/* body */}
      <ScrollView>
        <View style={{ flex: 8, borderBottomColor: "gray" }}>
          {data.map((item) => {
            return (
              <TouchableOpacity style={{ backgroundColor: "#ffff" }} onPress ={()=>{
                navigation.navigate({name:"Chat",params: {name}})
              }} >
                <View
                  style={{
                    width: "100%",
                    borderBottomColor: "#ededee",
                    borderBottomWidth: "0.5px",
                    flexDirection: "row",
                    padding: 10,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ height: 40, width: 40, borderRadius: "50px" }}
                  ></Image>

                  <View
                    style={{
                      justifyContent: "space-around",
                      width: "70%",
                      marginLeft: "20px",
                    }}
                  >
                    <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "gray",
                      }}
                    >
                      {item.mess}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      {/* footer */}
      <View
        style={{
          backgroundColor: "faefef",
          justifyContent: "space-around",
          flexDirection: "row",
          flex: 1,
        }}
      >
        <TouchableOpacity>
          <MessageOutlined style={{ color: "#b0a7a7", fontSize: 25 }} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Contact");
          }}
        >
          <ContactsOutlined style={{ color: "#b0a7a7", fontSize: 25 }} />
        </TouchableOpacity>

        <TouchableOpacity>
          <AppstoreOutlined style={{ color: "#b0a7a7", fontSize: 25 }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{
          navigation.navigate("Diary");
        }}>
          <ClockCircleOutlined style={{ color: "#b0a7a7", fontSize: 25 }} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <UserOutlined style={{ color: "#b0a7a7", fontSize: 25 }} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default ListChat;
