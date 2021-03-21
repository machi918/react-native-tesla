import React from 'react';
import {Text, View, ImageBackground } from 'react-native';
import styles from './Styles'
import StyledButton from '../StyledButton/index'

const CarItem = (props)=>{

    const {name, tagline, image} = props;

    return(
        <View style = {styles.carContainer}>

            <ImageBackground 
            source={image}
            style = {styles.image}>
            </ImageBackground>
        
            <View style={styles.titles}>
                <Text style = {styles.title}>{name}</Text>
                <Text style = {styles.subtitle}>{tagline}</Text>
            </View>

            <View style={styles.buttonsContainer}>
            <StyledButton type={'primary'} content={'Custom Order'}></StyledButton>
            <StyledButton type={'secondary'} content={'Existing Inventory'}></StyledButton>
            </View>

        </View>
    )
};

export default CarItem;