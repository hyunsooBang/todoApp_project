import { StyleSheet } from 'react-native';
import {theme} from './theme';

export const viewStyles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: theme.background,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    card:{
        backgroundColor: '#fff',
        flex:1,
        borderRadius:10,
        margin:20,
        width:340,
    },
    box: {
        marginLeft:290,
        flexDirection: 'row',
    },
    box2:{
        marginLeft:240,
        flexDirection: 'row',
    },
    

    header: {
        width:'100%',
        
        height:50,
        backgroundColor: theme.background,
        
        // backgroundColor: '#ff9a9a',
      },
      content: {
       // flex: 1,
        height: 610,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:30,
        //paddingTop:30,
        justifyContent: 'center',
      // backgroundColor: '#d6ca1a',
      },
      footer: {
        width:'100%',
        height:'10%',
        alignItems: 'flex-end',
        paddingBottom:50,
        // backgroundColor: '#1ad657',
      },
      test: {
        flex: 1,
        backgroundColor: theme.background,
        width: '100%',
        alignItems: 'center',
        justifyContent:'flex-start',
      }
  });
  
export const textStyles = StyleSheet.create({
    title: {
        fontSize:30,
        fontWeight: '600',
        color: theme.main,
        alignItems: 'flex-start',
        marginTop: 10,
        marginLeft: 0,
    },
    main: {
        fontSize:17,
        fontWeight: '500',
        color: theme.main,
        alignItems: 'flex-start',
        marginTop:20,
        marginLeft: 20,
    },
    
});

export const barStyles = StyleSheet.create({
    statusbar: {
        backgroundColor: theme.background,
    },
});

export const Montlystyles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: theme.background,
        alignItems: "center",
        paddingHorizontal: 20,
    },
    wrapper: {
        backgroundColor:theme.background,
        alignItems: "center",
        padding: 20
    },
    title: {
        fontSize: 23,
        fontWeight: "bold",
        color: "#848484",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 15,
        color: "gray",
    },
  });

export const taskStyles=StyleSheet.create({
    container: {
        margin:10,
        marginLeft:0,
        padding:5,
        marginTop:20,
       
    },
    column:{
        flexDirection: 'row',
        margin:10,
        marginLeft:0,
        padding:5,
        marginTop:20,
        
        
    },
    text:{
        flex:1,
        fontSize:23,
        fontWeight: '500',
        color: theme.cate,
        marginTop: 10,
        marginLeft: 20,
        width: 150,
        textAlignVertical: 'center',
    },
});
export const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        color: '#9b111e',
        height: 40, 
        width: 170, 
        textAlign:'center',
        //backgroundColor: theme.itemBackground, 
        borderWidth: 1, 
        borderColor:theme.itemBackground,
        borderRadius: 10,
        padding: 10
    },
    inputAndroid: {
        fontSize: 16,
        color: '#9b111e',
        height: 40, 
        width: 170, 
        textAlign:'center',
        //backgroundColor: theme.itemBackground, 
        borderWidth: 1, 
        borderColor:theme.itemBackground,
        borderRadius: 10,
        padding: 10
    },
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        //backgroundColor: '#868e96',
        marginRight: 0,
        
    },

});

