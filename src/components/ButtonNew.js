import React from "react";
import { View, Text, StyleSheet } from 'react-native';

import {Ionicons} from '@expo/vector-icons'

export default function ButtonNew({ focused }){
    return(
        <View style={ [styles.container, 
            { backgroundColor: focused ? '#0E2433' : '#ffff00' },
            { borderColor: focused ? '#ffff00' : '#0E2433' }
            ] }>
            <Ionicons name='add' size={45} color={focused ? '#ffff00' : '#0E2433' } />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5,
        marginBottom: 30,
        
    }
})