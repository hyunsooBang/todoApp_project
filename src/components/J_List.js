import React, {Component,useState,useEffect} from 'react';
import {Image,FlatList,View,Text,TouchableOpacity,  StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import picListData from '../J_picListData';
import { PicButton } from './IconButton';
import { _handleUpdateToDoPress } from '../ToDo';
//import DraggableFlatList from 'react-native-draggable-flatlist'
class FlatListItem extends Component{
    render() {
        return(
          <View style ={{flex:1,marginRight: 30,justifyContent: 'center', alignItems: 'center'}}>
              <Image source={{uri:this.props.item.imageUrl ,width : 30 , height: 30}}></Image>
              {//</View>Text>{this.props.item.key}</Text>}
             }
          </View>

        );
    }
}
class J_List extends Component {
    render() {
        return (
           <View style={{flex: 1,  marginTop: 22 , justifyContent: 'center'}}>
               <FlatList
                    data ={picListData}
                    horizontal = {true}
                    renderItem = {({item,index})=>{
                        //console.log(`Item=${JSON.stringify(item)}, index= ${index}`)
                        return(
                            <PicButton type = {item.img}/>                            
                        );
                    }}
               />
           </View>
        );
    }
}

{/*class checkbox extends Component {

    render() {
        const [isSelected, setSelection] = useState(false);
        return (
            <View style={styles.container}>
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}/>
                    <Text style={styles.label}>todo</Text>
                </View>
            </View>
            );
        
    }
}
*/}

// onCheck = {items, i}
//     let item = this.state.listArray
//     item[i].checked = item[i].checked ? ! item[i].checked : true
//     this.setState({listArray:item})
// }


export const CheckObject = ({flag,item}) => {

    const [toggleCheckBox, setToggleCheckBox] = useState(flag);

    const [isSelected, setSelection] = useState(flag);
    const obj = {id: item.id,startDay:item.Start,endDay:item.End,cate:item.Cate,toDo:item.ToDo,Flag:!toggleCheckBox}
    return (
        //   <CheckBox
        //     value={isSelected}
        //     onValueChange={setSelection}
        //     onPress={_handleUpdateToDoPress({id: item.id,startDay:item.Start,endDay:item.End,cate:item.Cate,toDo:item.ToDo,Flag:!isSelected})}
        //   />
          <CheckBox
          disabled={false}
          value = {toggleCheckBox}
          onValueChange={setToggleCheckBox}
          onPress={_handleUpdateToDoPress(obj)}
        />
    );
  };

export function Todo_List({navigation,data,dataLoading}){
    var ListData = data;
    var listArray = Object.values(ListData);
    const [listdata, setlistData] = useState(listArray);

    if(typeof dataLoading != "undefined" ){
        dataLoading('List');
    }

    return (
       <View style={{flex: 1,  marginTop: 0, justifyContent: 'center'}}>
           
         
           <FlatList
                data ={listArray}
                horizontal = {false}
                renderItem = {({item,index})=>{
                    const Day = new Date(item.End.seconds*1000);
                    var checked = listArray[index].Flag;
                    
                 //   console.log(`Item=${JSON.stringify(item)}, index= ${index}`,Day.getDate())
                    return(  
                      <TouchableOpacity onPress={() => navigation.navigate('toDo',{item})}> 
                      <View style={{paddingTop:3,paddingBottom:3}}>
                      <View style={{ backgroundColor:'#e9bd15', borderRadius:10, padding:20,  width: 310,  flexDirection: "row" }}>
                          
                            <CheckObject flag={checked} item = {item}></CheckObject>
                          <Text styles={styles.todo}>{item.ToDo} </Text>
                          <Text styles={styles.duedate}> Due Date {Day.getMonth()+1}.{Day.getDate()}</Text>
                      </View>
                      </View>
                      </TouchableOpacity>
                    );
                }}
           />
       </View>
    );



            }

            const styles = StyleSheet.create({
                container: {
                    flex:1,
                    alignItems: "center",
                    justifyContent: "center",
                },
                checkboxContainer: {
                    flexDirection: "row",
                    marginBottom: 20,
                },
                checkbox: {
                   // alignSelf: "center",
                },
                //화면에 리스트 뜨면 다시 style 설정! 
                todo: {
                    fontSize: 10,
                    fontWeight: '500',
                    alignSelf: "center",
                },
                duedate: {
                    fontSize: 10,
                    alignSelf: "center",
                },
            })
                
export default J_List;