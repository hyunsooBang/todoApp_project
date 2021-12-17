import React from 'react';
import { StyleSheet,StatusBar,SafeAreaView, Text, View, Keyboard ,Image } from 'react-native';
import { viewStyles, textStyles} from './styles';
import { TouchableWithoutFeedback } from 'react-native';
import {SignText} from './components/signInput';
import {images} from './images';
// import {IconButton} from './components/IconButton';
import {ShowTrafficSign} from './components/J_trafficSign';
import { IconButton} from 'react-native-paper';
import { goBack } from './J_index';
import {DB} from './utils/firebase'

//루트 없어지고
const showSign= ({navigation, route}) => {
  
  // if(route != undefined){
  // 
  // }

  //여기를 아예 파베로 바꾸고
  const date = new Date();
  const doDate =(date.getFullYear()).toString()+'_'+(date.getMonth()).toString()+'_'+(date.getDate()).toString();
  const signRef = DB.collection('TodaySign').doc(doDate);
  console.log(signRef.get());
  const doc = signRef.get();
  if(!doc.exists){
    console.log('No such document!');
  } else {
    console.log('Document data:', doc.data());
  }

  const {id, text, tSign , pSign } = route.params;

  let picImages = [images.sPic1,images.sPic2,images.sPic3,images.sPic4,images.sPic5]
  
  //  let trafficSign = parseInt(tSign);
  //  let picSign = parseInt(pSign);

  // console.log("showSign "+id+" "+pSign+" "+text);

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
   
    <SafeAreaView style={viewStyles.container}>
      <StatusBar barStyle="light-content" style={textStyles.statusBar}/>
      <View style = {viewStyles.header}>
      <IconButton  icon = {images.back} onPress ={() => {goBack({navigation});}}/>  
      </View>
     
      <View style = {viewStyles.content}> 
      
      <Text style={textStyles.title}>Today's Sign</Text>
      <SignText value={text}/>
      <View style = {styles.trafficSignShow}>

        <ShowTrafficSign trafficSign={tSign} />

        {tSign==0&&<Image source={picImages[pSign]} style={styles.picRed}/>}
        {tSign==1&&<Image source={picImages[pSign]} style={styles.picYellow}/>}
        {tSign==2&&<Image source={picImages[pSign]} style={styles.picGreen}/>}

      </View>
     
      </View>
 
     <View style = {viewStyles.footer}> 
     <View >
       <IconButton  icon = {images.edit} onPress={() => navigation.navigate('makeSign')}/>
     </View> 
     </View> 
      
    </SafeAreaView>
    </TouchableWithoutFeedback>

    
  );
}

const styles = StyleSheet.create({
  trafficSignShow: {
    position: 'relative',
   
  },
 
  picRed: {
    position: 'absolute',
    padding:10,
    marginLeft:16,
    marginTop:26,
    tintColor: 'black',
    width: 30,
    height: 30,
  
    resizeMode: 'contain', 
  },
  picYellow: {
    position: 'absolute',
    padding:10,
    marginLeft:56,
    marginTop:26,
    tintColor: 'black',
    width: 30,
    height: 30,
  
    resizeMode: 'contain', 
  },
  picGreen: {
    position: 'absolute',
    padding:10,
    marginLeft:96,
    marginTop:26,
    tintColor: 'black',
    width: 30,
    height: 30,
  
    resizeMode: 'contain', 
  },
  
  
});

export default showSign;

