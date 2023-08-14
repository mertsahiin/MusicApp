import { StyleSheet } from "react-native";
 export default StyleSheet.create({
    container : {
        flexDirection : 'row',
        
    },
    image : {
        width : 100,
        height : 100,
        borderRadius : 50,
        marginTop:5 ,
        marginBottom: 5,
        

    },
    inner_container : {
        padding: 10,
        justifyContent : 'center',
        flex : 1

    },
    title : {
        fontWeight : 'bold',
        fontSize : 27,
    },
    info_container : {
        flex: 1,
        flexDirection : 'row',
        alignItems : 'center'
    },
    year : {
        fontSize: 12,
        color : 'gray',
        fontWeight : 'bold',
        marginLeft : 10
    },
    content_container:{
        flexDirection: 'row',
        
    },
    sold_out_container : {
        
        borderWidth : 1,
        borderColor : 'red',
        borderRadius: 5,
        padding: 4,
        
    },
    sold_out_title: {
        color :'red',
        fontSize: 13
        
    },


 })