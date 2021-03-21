import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';
import styles from '../StyledButton/Styles';

const StyledButton = (props)=>{

    const type = props.type;
    const BColor = type === 'primary' ? '#171A20CC' : '#FFFFF6';
    const FColor = type === 'primary' ? '#FFFFFF' : '#171A20';


    const print = ()=>{
        console.log("HEYY");
    }

    return(
        <View style = {styles.container}>
            <Pressable
            style = {[styles.button,{backgroundColor:BColor,color:FColor}]}
            onPress ={()=>print()}>
                <Text style = {[styles.text,{color:FColor}]}>{props.content}</Text>
            </Pressable>
        </View>
    )
}

export default StyledButton

