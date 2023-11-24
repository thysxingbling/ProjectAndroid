import * as React from 'react' ;
import { 
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    StatusBar,ScrollView
   } from 'react-native';
import { TextInput } from 'react-native-paper';
          <MessageOutlined style={{color:"#b0a7a7",fontSize:25}}/>
          import {MessageOutlined,UserOutlined ,
             SearchOutlined,UserAddOutlined,
             AppstoreOutlined,ClockCircleOutlined,ContactsOutlined,UsergroupAddOutlined,PhoneOutlined,VideoCameraOutlined} from '@ant-design/icons';

var data = [] ;
var url =  "https://6554d45e63cafc694fe70d65.mockapi.io/api/phoneBooks";
       
   const Contact = ({navigation})=>{
    var [data , setData] = React.useState([]);
    var fc = () => {
        fetch(url)
        .then((response) => response.json())
        .then((json) =>{
            data=json;
            setData(data);
        });
    };
    React.useEffect(fc,[]);
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                <TouchableOpacity style={styles.btnicon}>
                       <SearchOutlined style={{color:'#fff',fontSize:30}}/>
                </TouchableOpacity>   
                    <TouchableOpacity style={styles.btntext} onPress={
                        () => <TextInput placeholder='Tìm kiếm'></TextInput>
                    }>
                         <Text style={styles.txtS}>Tìm kiếm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnicon}   onPress={()=>{
                        navigation.navigate("AddFriend");
                    }} >
                        <UserAddOutlined style={{color:'#fff', fontSize:30}}/>
                    </TouchableOpacity>
                    
                </View>
            <ScrollView style={{
                flex:9,
                backgroundColor:'grey',
                
            }}>
            <View style={{
                flex:8,
                
                backgroundColor:'#fff',
            
            }} >
                    
                    <View style={{
                    flexDirection:'row',
                    justifyContent:'space-around',
                    borderBottomWidth:"2px",
                    flex:1,
                    borderBottomColor:"#ededee",

                     }}>
                    <TouchableOpacity style={{  
                        backgroundColor:'#fff',
                        padding:20,
                        marginBottom:"1px",
                    
                        
                    }}>
                            <Text style={{
                                fontSize:'16px',
                                color:'grey',
                            }}>
                                Bạn bè
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                        backgroundColor:'#fff',
                        padding:20,
                       
                    }}>
                            <Text style={{
                                fontSize:'16px',
                                color:'grey',
                            }}>
                                Nhóm 
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                        backgroundColor:'#fff',
                        padding:20,
                       
                    }}>
                            <Text style={{
                                fontSize:'16px',
                                color:'grey',
                            }}>
                                OA 
                            </Text>
                        </TouchableOpacity>
                  </View>
                  {/* lo*/}
                  <View style={{
                    flex:2,
                  }}>
                    <TouchableOpacity
                  
                     style={{
                        flexDirection:'row',
                        backgroundColor:'#fff',
                        padding:5,
                    }}>
                        <View style={{
                            backgroundColor:'#129EFD',
                            borderRadius:'10px',
                            marginRight:10,

                        }}>
                        <UsergroupAddOutlined style={{
                            fontSize:'25px',
                            color:'#fff',
                            margin:5
                        }} />
                        
                        </View>
                        <Text style={{
                             fontWeight:'500',
                             marginTop:'5px',
                             fontSize:16,
                        }}>Lời mời kết bạn</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        flexDirection:'row',
                        backgroundColor:'#fff',
                        padding:5,
                    }}>
                        <View style={{
                            backgroundColor:'#129EFD',
                            borderRadius:'10px',
                            marginRight:10,
                        }}>
                        

                        <ContactsOutlined style={{
                             fontSize:'25px',
                             color:'#fff',
                             margin:5,
                        }}/>
                        </View>
                        <View>
                        <Text style={{
                            fontSize:16,
                            fontWeight:'500',
                            fontSize:16,
                        }}>Danh bạ máy</Text>
                        <Text style={{
                            fontWeight:'450',
                            color:'grey',
                        }}>Các liên hệ có ứng dụng Zalo</Text>
                        </View>
                    </TouchableOpacity>
                  </View>
            </View>
            <View style={{
               
                backgroundColor:'#fff',
                flexDirection:'row',
                height:'50px',
                
               
            }}>
                <TouchableOpacity style={{
                    flexDirection:'row',
                    padding:5,
                    borderColor:'grey',
                    borderWidth:'1px',
                    backgroundColor:'#fff',
                    borderRadius:'14px',
                    margin:5,
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <Text>Tất cả 108</Text>
                    
                </TouchableOpacity>
                <TouchableOpacity style={{
                    flexDirection:'row',
                    padding:5,
                    borderColor:'grey',
                    borderWidth:'1px',
                    backgroundColor:'#fff',
                    borderRadius:'14px',
                    margin:5,
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <Text>Mới truy cập 114</Text>
                  
                </TouchableOpacity>
            </View>
            {data.map((item) => {
                
        return (
            
          <TouchableOpacity
            style={{
              flexDirection: "row",
                padding:10,
            
              backgroundColor: "#fff",
            }}
            key={item.id}
          >
            <Image style={{
                width:60,
                height:60,
                borderRadius:"50%",
                
            }}
            source={item.avt}/>
            <View style={{
                backgroundColor:'#fff',
                width:'50%',
                marginLeft:'15px',
                alignItems:'center',
                justifyContent:'center',
            }}>
                
                <Text style={{
                    fontSize:18,
                    fontWeight:'500',
                }}>{item.name}</Text>
                
            </View>
            <TouchableOpacity style={{
                backgroundColor:'#fff',
                marginLeft:'15px',
                justifyContent:'center',
                alignItems:'center',
                
               
            }}>
                  <PhoneOutlined style={{
                    fontSize:30,
                    color:'#b0a7a7',
                  }}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={{
                backgroundColor:'#fff', 
                marginLeft:'15px',
                justifyContent:'center',
                alignItems:'center',
              
            }}>
               <VideoCameraOutlined style={{
                    fontSize:30,
                    color:'#b0a7a7',
               }}/>
            </TouchableOpacity>
          </TouchableOpacity>
        );
      })} 
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
        <TouchableOpacity    onPress={() => {
            navigation.navigate("ListChat");
          }}>
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
   const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        
        overflow: "hidden",
       
      },
      
      text:{
         fontSize:80,
         color:"#1faeeb",
     },
     header:{
      
         backgroundColor:'pink',
         flexDirection:'row',
         justifyContent:'flex-start',
         backgroundColor:'#129EFD',
         height:55,
     },
     group_list:{
         flex:8,
         backgroundColor:'#d9d9d9',
     },
     iconsearch:{
         width:'30px',
         height:'30px',
         resizeMode:'contain',
     },
     btnicon:{
         margin:10,
     },
     btntext:{
         backgroundColor:'#129EFD',
         width:'70%',
         height:"35px",
         marginTop:10,
         justifyContent:'center',
         marginLeft:10,
         borderRadius:10,
         padding:10,
 
         
     },
     btnSetting:{
         justifyContent:'center',
         marginLeft:'10px',
         
     },
     txtS:{
         color:'#87C6FF',
         fontSize:'16px',
     },
   });
   export default Contact ;