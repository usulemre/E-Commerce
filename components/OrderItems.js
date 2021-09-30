import React from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'
import Color from '../constants/Color'

const OrderItems = (props) => {
    return (
        <View style={styles.OrderItem}>
            <View style={styles.TextContainer}>
                <Text style={styles.amount}>{props.amount}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <Button title='Show Details' color={Color.primary}/>
        </View>
    )
}

const styles = StyleSheet.create({
    OrderItem:{
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: "white",
        padding:10,
        margin:20,
        alignItems:'center'
    },
    TextContainer:{
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-between',
      marginBottom:10
    },
    amount:{
      fontSize:16,
      fontFamily:'opan-sans-bold',
    },
    date:{
        fontSize:14,
        fontFamily:'open-sans',
        color:'#888'
    }
});
export default OrderItems;

