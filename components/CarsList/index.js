import React from 'react';
import {ScrollView, Dimensions} from 'react-native';
import styles from './styles'
import cars from './cars'
import CarItem from '../CarItem'

const CarsList = (props)=>{

    return(
        <ScrollView 
        style={styles.container} 
        snapToAlignment={'start'} 
        decelerationRate={'fast'} 
        snapToInterval={Dimensions.get('window').height}
        bounces={false}
        showsVerticalScrollIndicator={false}>
            {
                cars.map((item,index)=>{
                    return(
                        <CarItem key = {index} name={item.name} tagline = {item.tagline} image={item.image} ></CarItem>
                    )
                })
            }

        </ScrollView>
    )

}

export default CarsList
