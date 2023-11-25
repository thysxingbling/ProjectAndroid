import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  QrcodeOutlined,
  RightCircleOutlined,

  SolutionOutlined,
  UsergroupDeleteOutlined,
} from "@ant-design/icons";
const AddFriend = ({navigation}) => {
  const [phone, onChangePhone] = React.useState("");
  return (
    <View style={{ backgroundColor: "white" ,flex:1}}>
      {/* header */}
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "white",
          height: 55,
          borderBottomColor: "#d5d3da",
          borderBottomWidth: 0.1,
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row", justifyContent: "space-between" }}
          onPress={() => {
            navigation.goBack("Contact");
          }}
        >
          <AntDesign
            name="arrowleft"
            size={30}
            color="black"
            style={{ marginLeft: 5 }}
          ></AntDesign>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            width: "60%",
            height: "100%",
            marginTop: 25,
            marginLeft: 25,
          }}
        >
          Thêm bạn
        </Text>
      </View>
      {/* body */}
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          height: 250,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "65%",
            height: 200,
            backgroundColor: "#324c6b",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "500",
              fontSize: 16,
              marginBottom: 15,
            }}
          >
           Hello world
          </Text>
          <View
            style={{
              backgroundColor: "white",
              width: "45%",
              height: "50%",
              borderRadius: 5,
            }}
          >
            <QrcodeOutlined style={{ color: "black", fontSize: 100 }} />
          </View>
          <Text style={{ fontSize: 14, color: "#d5d3da", marginTop: 20 }}>
            Quét mã để thêm bạn Zalo với tôi
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 10, flexDirection: "row" }}>
        <View
          style={{
            backgroundColor: "white",
            height: 40,
            borderWidth: 1,
            width: "60%",
            marginLeft: 20,
            borderRadius: 8,
            borderColor: "#1677ff",
          }}
        >
          <TextInput
            style={{
              color: "#d5d3da",
              height: 40,
              width: "100%",
              textAlign: "center",
            }}
            onChangeText={onChangePhone}
            value={phone}
            placeholder="Nhập số điện thoại"
          ></TextInput>
        </View>
        <RightCircleOutlined
          style={{ marginTop: 5, marginLeft: 20, color: "gray", fontSize: 30 }}
        />
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          justifyContent: "center",
          marginTop: "10px",
          borderTopWidth: 0.1,
          borderColor: "#d5d3da",
        }}
      >
        <TouchableOpacity style={{ flexDirection: "row", padding: "15px" }}>
          <QrcodeOutlined style={{ fontSize: 25, color: "#129EFD" }} />
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontWeight: 500, fontSize: 18 }}>Quét mã QR</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{ marginTop: 10, borderTopWidth: 0.1, borderColor: "#d5d3da" }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            justifyContent: "center",
            borderBottomWidth: 0.1,
            borderColor: "#d5d3da",
          }}
        >
          <TouchableOpacity 
          onPress={()=>{
            navigation.navigate("Contact");
          }}
          style={{ flexDirection: "row", padding: "15px" }}>
         
            <SolutionOutlined
              style={{ fontSize: 25, color: "#129EFD"}}
            />
            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontWeight: 500, fontSize: 18 }}>Danh bạ máy</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            justifyContent: "center",
            borderBottomWidth: 0.1,
            borderColor: "#d5d3da",
          }}
        >
          <TouchableOpacity style={{ flexDirection: "row", padding: "15px" }}>
          
            <UsergroupDeleteOutlined
              style={{ color: "#129EFD", fontSize: 25 }}
            />
            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontWeight: 500, fontSize: 18 }}>
               Bạn bè có thể quen
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{backgroundColor:"#e8e8e8",flex:1}}>
      <Text style={{marginTop:10,textAlign:"center",color:"gray",fontSize:16,fontWeight:400}}>Xem lời mời kết bạn đã gửi tại trang Danh bạ Zalo</Text>
      </View>
    </View>
    
  );
};

export default AddFriend;
