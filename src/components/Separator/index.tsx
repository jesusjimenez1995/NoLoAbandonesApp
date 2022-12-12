import { View, StyleSheet } from 'react-native'
import React from 'react'

const Separator = () => {
  return (
    <View style={[styles.separator]}>
    </View>
  )
};

const styles = StyleSheet.create({
    separator:{
        width:"100%",
        height: 1,
        backgroundColor: "#d3d3d3",
        marginTop: 15
    }
});

export default Separator;