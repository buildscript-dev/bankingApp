

import { Alert, Button, FlatList, Image, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

const HomePage = () => {
  return (
    //fist layer
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <View>
    <Text style={styles.heading}>Good morning, Ankit</Text>
      <Text style={styles.subHeading}>Welcome to NeoBank</Text>
     </View>
       <View style = {{ alignItems: 'center' }}>
         <TouchableHighlight>
        <Image style= {{height: 45, width: 45, borderColor: 'grey', borderWidth: 1, borderRadius: 10,  }} source={{uri:"https://icons.veryicon.com/png/o/miscellaneous/fine-fillet-icon/notification-bell.png"}}/>
      </TouchableHighlight>
       </View>
      </View>

// Card Layer
    <View style= {styles.card}>
    <Text style={styles.subHeading}>Your Balance</Text>
    <View style={{flexDirection: 'row' , justifyContent: 'space-between', alignItems: 'center'}}> 
    <Text style={{fontSize: 40, fontWeight: 'bold', marginBottom: 4}}>$3,200.00</Text>
    <Image style={{width:30, height: 30,}} source={{uri:'https://static.thenounproject.com/png/464129-200.png'}}/>
    </View>
    <TouchableHighlight 
               onPress={() => Alert.alert("You don't have Money!")} 
               underlayColor={'red'}
               activeOpacity={0.6} 
               style={styles.balanceBtn}>
    <Text style={[styles.heading, { color: 'white', fontSize: 16 }]}>Add Money</Text>
    </TouchableHighlight>
    </View>
      
      //Third Layer 
      <View style= {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15, marginBottom: 15}}>
<Text style={styles.heading}> Your Cards</Text>
<Text style={[styles.heading, {fontSize: 18}]}> + New Cards</Text>
      </View>

//ListCard 

<ScrollView horizontal= {true}>
<View style={styles.ListCard}>
<Image source={{uri: 'https://www.neofinancial.com/_next/image?url=https%3A%2F%2Fstatic.production.neofinancial.com%2Fmarketing-web%2Fcredit%2Fcredit-neo-mastercard.png&w=640&q=75'}}/>
</View>
<View style={styles.ListCard}>
    <Image source={{uri: 'https://pngimg.com/d/credit_card_PNG23.png'}}/>

</View>
<View style={styles.ListCard}>
<Image source={{uri: 'https://icm.aexp-static.com/Internet/internationalcardshop/en_sg/images/cards/gold-card.png'}}/>

</View>
<View style={styles.ListCard}>
<Image source={{uri: 'https://www.neofinancial.com/_next/image?url=https%3A%2F%2Fstatic.production.neofinancial.com%2Fmarketing-web%2Fcredit%2Fcredit-neo-mastercard.png&w=640&q=75'}}/>
</View>


</View>

    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#FAF6E9',
  },
  ListCard:{
    width: '80%',
    borderRadius: 20,
    backgroundColor: 'red',
    height: 180,
  },
  card:{
    marginTop: 20,
    padding: 20,
    borderRadius: 20,
    height: 170,
    width: '100%',
    backgroundColor: '#FFFDF6',
  },
  balanceBtn: {
  width: "100%",
  height: 50,
  backgroundColor: 'black',
  borderRadius: 25,
  justifyContent: 'center', 
  alignItems: 'center',     
},
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subHeading:{
    fontSize: 16,
    color: 'grey'
  },
  input: {
    borderWidth: 1,
    borderColor: '#666',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },
});