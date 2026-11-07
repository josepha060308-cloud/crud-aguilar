import { View, Text, StyleSheet, ScrollView, Image, useWindowDimensions } from 'react-native'
import React from 'react'

const index = () => {
  const {width}=useWindowDimensions();
  return (

    <View style={styles.container}>
      <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={{flexGrow:0}}
      >  

      <Image
      source={require("../../assets/images/banner1.png")}
      style={{width:width, height:200}}
      resizeMode='contain'
      />

      <Image
      source={require("../../assets/images/banner2.png")}
      style={{width:width, height:200}}
      resizeMode='contain'
      />

      <Image
      source={require("../../assets/images/banner3.png")}
      style={{width:width, height:200}}
      resizeMode='contain'
      />

      </ScrollView>
      <Text>INICIO</Text>
      <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, voluptatum! Porro, culpa in. Quaerat similique delectus excepturi, commodi, amet porro repellendus sequi nobis a inventore labore necessitatibus. Voluptatem, voluptas sapiente?
      Quidem eaque temporibus dicta. Praesentium impedit assumenda nisi suscipit. Repellendus aliquid error unde nesciunt natus ullam voluptate facere, harum sunt voluptas assumenda, quisquam ea ab expedita architecto ratione, corrupti nostrum.</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
  },
});
