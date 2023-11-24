import * as React from 'react' ;
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    ScrollView,
   } from 'react-native';
import { UserSwitchOutlined , RightOutlined  
    ,SearchOutlined, LockOutlined ,PieChartOutlined,CloudOutlined ,AppstoreOutlined,MessageOutlined,
    ContactsOutlined,UserOutlined,ClockCircleOutlined,PropertySafetyOutlined,SoundOutlined,PhoneOutlined,ToolOutlined,InfoCircleOutlined
     ,QuestionCircleOutlined,LogoutOutlined,ArrowLeftOutlined} from '@ant-design/icons';


   const Settings = ({navigation})=>{
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                
                <TouchableOpacity style={styles.btnicon}>
                       
                      <SearchOutlined style={{fontSize:'30px' , color:'#fff'}}/>
                     </TouchableOpacity>   
                    <TouchableOpacity style={styles.btntext} onPress={
                        () => <TextInput placeholder='Tìm kiếm'></TextInput>
                    }>
                         <Text style={styles.txtS}>Cài đặt</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSetting} onPress={()=>navigation.navigate('Profile')}>
                      <ArrowLeftOutlined style={{fontSize:'30px' , color:'#fff'}}/>
                    </TouchableOpacity>
                  </View> 
                    <ScrollView>
                    <View style={styles.group_list}>
                        <View style={styles.view_imp}>
                            <TouchableOpacity style={styles.btnImp}>
                            <PropertySafetyOutlined style={{marginTop:5 , fontSize:30,color:'#129EFD'}} />
                                <View style={{marginLeft:15}}>
                                <Text style={{fontWeight:500 , fontSize:18,marginTop:5}}>Tài khoản và bảo mật</Text>
                                
                                </View>
                                <RightOutlined  style={{marginLeft:115 , marginTop:15}}/>
                            </TouchableOpacity>
                            <View style={styles.view_qrt}>
                            <TouchableOpacity style={styles.btn_qrt}>
                            <LockOutlined style={{fontSize:'30px',color:'#129EFD',marginTop:5}}/>
                                <Text  style={ {fontWeight:500 , fontSize:18 , marginLeft:15}}>Quyền riêng tư</Text>
                                <RightOutlined  style={{marginLeft:165 , marginTop:15}}/>
                            </TouchableOpacity>
                        </View>
                        </View>
                        <View style={styles.view_mid}>
                        <View style={styles.view_cloud}>
                            <TouchableOpacity style={styles.btn_clu}>
                                <CloudOutlined style={{fontSize:30 , color:'#129EFD',marginTop:5 }}/>
                                <View style={{marginLeft:15}}>
                                <Text  style={ {fontWeight:500 , fontSize:18}}>Sao lưu và khôi phục</Text>
                                <Text  style={{color:'grey' , fontWeight:500}}>Lưu trữ các tin nhắn quan trọng</Text>
                                </View>
                                <RightOutlined  style={{marginLeft:90 , marginTop:15}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view_data}>
                            <TouchableOpacity style={styles.btn_data}>
                            <PieChartOutlined style={{color:'#129EFD',fontSize:30,marginTop:5}}/>
                                <View style={{marginLeft:15}}>
                                <Text  style={ {fontWeight:500 , fontSize:18}}>Dung lượng và dữ liệu</Text>
                                <Text  style={{color:'grey' , fontWeight:500}}>Quản lý dữ liệu Zalo của bạn</Text>
                                </View>
                                <RightOutlined  style={{marginLeft:108 , marginTop:15}}/>
                            </TouchableOpacity>
                        </View>
                        </View>

                        <View style={styles.view_bot}>
                        <View style={styles.vew_scu}>
                            <TouchableOpacity style={styles.btn_scu}>
                                <SoundOutlined style={{
                                    color:'#129EFD',
                                    fontSize:30,
                                }} />
                                <Text  style={ {fontWeight:500 , fontSize:18 , marginLeft:15}}>Thông báo</Text>
                                <RightOutlined  style={{marginLeft:200 , marginTop:15}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view_qrt}>
                            <TouchableOpacity style={styles.btn_qrt}>
                            <MessageOutlined style={{fontSize:'30px',color:'#129EFD',marginTop:5}}/>
                                <Text  style={ {fontWeight:500 , fontSize:18 , marginLeft:15}}>Tin nhắn</Text>
                                <RightOutlined  style={{marginLeft:216 , marginTop:15}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view_qrt}>
                            <TouchableOpacity style={styles.btn_qrt}>
                            <PhoneOutlined style={{fontSize:'30px',color:'#129EFD',marginTop:5}}/>
                                <Text  style={ {fontWeight:500 , fontSize:18 , marginLeft:15}}>Cuộc gọi</Text>
                                <RightOutlined  style={{marginLeft:216 , marginTop:15}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view_qrt}>
                            <TouchableOpacity style={styles.btn_qrt}>
                            <ClockCircleOutlined style={{fontSize:'30px',color:'#129EFD',marginTop:5}}/>
                                <Text  style={ {fontWeight:500 , fontSize:18 , marginLeft:15}}>Nhật ký</Text>
                                <RightOutlined  style={{marginLeft:221 , marginTop:15}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view_qrt}>
                            <TouchableOpacity style={styles.btn_qrt}>
                            <ContactsOutlined style={{fontSize:'30px',color:'#129EFD',marginTop:5}}/>
                                <Text  style={ {fontWeight:500 , fontSize:18 , marginLeft:15}}>Danh bạ</Text>
                                <RightOutlined  style={{marginLeft:216 , marginTop:15}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view_qrt}>
                            <TouchableOpacity style={styles.btn_qrt}>
                            <ToolOutlined style={{fontSize:'30px',color:'#129EFD',marginTop:5}}/>
                                <Text  style={ {fontWeight:500 , fontSize:18 , marginLeft:15}}>Giao diện và ngôn ngữ</Text>
                                <RightOutlined  style={{marginLeft:100 , marginTop:15}}/>
                            </TouchableOpacity>
                        </View>

                        </View>

                        <View style={{
                            marginTop:'10px',
                            marginBottom:10
                        }}>
                        <View style={styles.view_qrt}>
                            <TouchableOpacity style={styles.btn_qrt}>
                            <InfoCircleOutlined style={{fontSize:'30px',color:'#129EFD',marginTop:5}}/>
                                <Text  style={ {fontWeight:500 , fontSize:18 , marginLeft:15}}>Thông tin về Zalo</Text>
                                <RightOutlined  style={{marginLeft:140 , marginTop:15}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view_qrt}>
                            <TouchableOpacity style={styles.btn_qrt}>
                            <QuestionCircleOutlined  style={{fontSize:'30px',color:'#129EFD',marginTop:5}}/>
                                <Text  style={ {fontWeight:500 , fontSize:18 , marginLeft:15}}>Liên hệ hỗ trợ</Text>
                                <RightOutlined  style={{marginLeft:169 , marginTop:15}}/>
                            </TouchableOpacity>
                        </View>
                       
                      
                        </View>
                        <View>
                        <View style={styles.view_qrt}>
                            <TouchableOpacity  onPress= {()=>{
                                navigation.navigate("AddAccount")
                            }} style={styles.btn_qrt}>
                            <UserSwitchOutlined style={{fontSize:'30px',color:'#129EFD',marginTop:5}}/>
                                <Text  style={ {fontWeight:500 , fontSize:18 , marginLeft:15}}>Chuyển tài khoản</Text>
                                <RightOutlined  style={{marginLeft:140 , marginTop:15}}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{alignItems:'center' , backgroundColor:'white',padding:10}} >
                            <TouchableOpacity style={{
                                width:'90%', 
                                height:55,
                                backgroundColor:'rgb(236,237,239)',
                                alignItems:'center',
                                justifyContent:'center',
                                borderRadius:'30px',
                                flexDirection:'row'}}
                                onPress={()=>navigation.navigate('Home')}
                                >    
                                    <LogoutOutlined style={{fontSize:'30px',marginRight:'10px'}} />
                                    <Text style={{fontSize:20}}>Đăng Xuất</Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                    </View>

                    </ScrollView>
               
                    <View
        style={{
          backgroundColor: "white",
          justifyContent: "space-around",
          flexDirection: "row",
          alignItems:'center',
          height:"55px",
        }}
      >
        <TouchableOpacity onPress={()=>navigation.navigate('ListChat')}>
          <MessageOutlined style={{ color: "#b0a7a7", fontSize: 25 }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Contact')}>
<ContactsOutlined style={{ color: "#b0a7a7", fontSize: 25 }} />
        </TouchableOpacity>

        <TouchableOpacity>
          <AppstoreOutlined style={{ color: "#b0a7a7", fontSize: 25 }} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Diary')}>
          <ClockCircleOutlined style={{ color: "#b0a7a7", fontSize: 25 }} />
        </TouchableOpacity>

        <TouchableOpacity  onPress={()=>navigation.navigate('Profile')}>
          <UserOutlined style={{ color: "#b0a7a7", fontSize: 25 }} />
        </TouchableOpacity>
      </View>    

         </View>

        );
   };
   const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        width: "100%",
        height: "100%",
        overflow: "hidden",
 
      },
      text:{
        fontSize:80,
        color:"#1faeeb",
    },
    header:{

        flexDirection:'row-reverse',
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
        
        borderRadius:10,
       

        
    },
    btnSetting:{
        justifyContent:'center',
        marginRight:20,
       
        
    },
    txtS:{
        color:'white',
        fontSize:'20px',
        
    },
    btnQr:{
        margin:15,
    },
    group_menu:{
        flex:1,
        backgroundColor:'#fff',

    },
    view_imp:{
        backgroundColor:'#fff',
        justifyContent:'center',
    },
    btnImp :{   
        flexDirection:'row',
        padding:'15px',
        borderBottomColor:'grey',
        borderBottomWidth:'1px',
    },
    view_avt:{
        marginLeft:10,
        marginRight:140,
    },
    img_avt:{
        resizeMode:'contain',
        width:'50px',
        height:'50px',
        
    },
    btn_song:{
        flexDirection:'row',
        padding:'15px',
       
    },
    btn_qr:{
        flexDirection:'row',
        padding:'15px',
       
    },
    view_song:{
        backgroundColor:'#fff',
        justifyContent:'center',
        marginTop:'10px',
    },
    view_qr:{
        backgroundColor:'#fff',
        justifyContent:'center',
        marginTop:'10px',
    },
    view_mid:{
        marginTop:10,
    },
    view_cloud:{
        backgroundColor:'#fff',
        justifyContent:'center',
        borderColor:'grey',
        borderBottomWidth:'1px',
       
    },
    view_data:{
        backgroundColor:'#fff',
        justifyContent:'center',
    },
    btn_clu:{
        flexDirection:'row',
        padding:'15px',
    },
    btn_data:{
        flexDirection:'row',
        padding:'15px',
    },
    view_bot:{
        marginTop:10,
    },
    vew_scu:{
        backgroundColor:'#fff',
        justifyContent:'center',
      
    },
    view_qrt:{
        backgroundColor:'#fff',
        justifyContent:'center',
        

    },
    btn_scu:{
        flexDirection:'row',
        padding:'15px',
        
        alignItems:'center',
    },
    btn_qrt:{
        flexDirection:'row',
        padding:'15px',
        alignItems:'center',
    }
   });
   export default Settings ;