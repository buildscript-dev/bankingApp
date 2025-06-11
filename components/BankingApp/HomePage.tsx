

import { Alert, Button, FlatList, Image, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'

const HomePage = () => {
  return (
    //fist layer
    <ScrollView>
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
<View style={{ height: 180 }}>
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      paddingHorizontal: 0,
    }}
  >
    {[...Array(4)].map((_, i) => (
      <View
        key={i}
        style={[
          styles.ListCard,
          { marginLeft: i === 0 ? 0 : 16 }, // 👈 only margin after the first card
        ]}
      >
        <Image
          style={styles.cardImage}
          resizeMode="contain"
          source={{
            uri: [
              'https://www.neofinancial.com/_next/image?url=https%3A%2F%2Fstatic.production.neofinancial.com%2Fmarketing-web%2Fcredit%2Fcredit-neo-mastercard.png&w=640&q=75',
              'https://pngimg.com/d/credit_card_PNG23.png',
              'https://icm.aexp-static.com/Internet/internationalcardshop/en_sg/images/cards/gold-card.png',
              'https://www.neofinancial.com/_next/image?url=https%3A%2F%2Fstatic.production.neofinancial.com%2Fmarketing-web%2Fcredit%2Fcredit-neo-mastercard.png&w=640&q=75'
            ][i],
          }}
        />
      </View>
    ))}
  </ScrollView>
</View>



//Transaction
<View style={styles.transactionCard}>
  {/* Header */}
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
    <Text style={styles.heading}>Transactions</Text>
    <Text style={[styles.heading, { fontSize: 18 }]}>See all</Text>
  </View>

  {/* Transaction List */}
  {[
    {
      title: "Starbucks Coffee",
      date: "October 17, 09:00 PM",
      amount: "-$44.80",
      cashback: "+$1.65",
      img: "https://upload.wikimedia.org/wikipedia/sco/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1017px-Starbucks_Corporation_Logo_2011.svg.png"
    },
    {
      title: "Burger King",
      date: "October 16, 06:00 PM",
      amount: "-$139.99",
      cashback: "+$8.52",
      img: "https://pngimg.com/d/burger_king_PNG9.png"
    },
    {
      title: "Nike",
      date: "October 16, 04:32 PM",
      amount: "-$99,999.99",
      cashback: "+$499.99",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp6cl5dkoqtKOcROZ82P6uvsOwsvuHzldWxw&s"
    },
    {
      title: "Apple Store",
      date: "October 16, 02:49 PM",
      amount: "-$899.99",
      cashback: "+$9.99",
      img: "https://cdn-icons-png.flaticon.com/256/0/747.png"
    },
    {
  title: "McDonald's",
  date: "June 10, 01:30 PM",
  amount: "-$12.49",
  cashback: "+$0.62",
  img: "https://i.pinimg.com/474x/84/fe/da/84fedab95e89c9fa770aabd2850e989e.jpg"
},
{
  title: "Netflix Subscription",
  date: "June 9, 08:00 AM",
  amount: "-$15.99",
  cashback: "+$1.10",
  img: "https://static.vecteezy.com/system/resources/thumbnails/017/396/804/small_2x/netflix-mobile-application-logo-free-png.png"
},
{
  title: "Adidas",
  date: "June 8, 03:22 PM",
  amount: "-$129.99",
  cashback: "+$6.50",
  img: "https://cdn-icons-png.freepik.com/256/731/731962.png"
},
{
  title: "Spotify Premium",
  date: "June 7, 07:00 AM",
  amount: "-$9.99",
  cashback: "+$0.50",
  img: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/01/Spotify_Logo_CMYK_Green.png"
},
{
  title: "Amazon",
  date: "June 6, 06:15 PM",
  amount: "-$259.00",
  cashback: "+$9.25",
  img: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-768x432.png"
}

  ].map((tx, i) => (
    <View key={i} style={styles.transactionItem}>
      {/* Left Side: Image + Info */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={styles.txImage}
          source={{ uri: tx.img }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{tx.title}</Text>
          <Text style={{ fontSize: 14, color: 'grey' }}>{tx.date}</Text>
        </View>
      </View>

      {/* Right Side: Amount + Cashback */}
      <View style={{ alignItems: 'flex-end' }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{tx.amount}</Text>
        <TouchableWithoutFeedback onPress={() => Alert.alert("CashBack")}>
          <View style={styles.cashBackBtn}>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>{tx.cashback}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  ))}
</View>




</View>

</ScrollView>
  );
}

export default HomePage
 

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#FAF6E9',
  },
  miniCardList:{
    height: 140,
    width: 140,
    padding: 4,
    borderRadius: 25,
    backgroundColor: 'white',
    borderWidth: 4
  },








  transactionCard:{
     width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  transactionItem: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 15,
  },
  txImage: {
  height: 45,
  width: 45,
  borderColor: 'grey',
  borderWidth: 1,
  borderRadius: 10,
},
  cashBackBtn: {
    backgroundColor: '#A0C878',
    width: 60,
    height: 20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
    scrollContainer: {
    paddingHorizontal: 16,
  },
 ListCard: {
  width: 270,
  borderRadius: 20,
  backgroundColor: 'white',
  height: 170,
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 4,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
},

   cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
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