

import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WalletTile from './WalletTile'

const AddMoney = () => {
  return (
    <View style= {styles.container}>
      <Text style= {[styles.heading, {marginBottom: 20}] }>Select card</Text>


      //MiniCardList 
<View>
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
          styles.miniCardList,
          { marginLeft: i === 0 ? 0 : 16 }, // 👈 only margin after the first card
        ]}
      >
        <Image
          style={styles.cardImage}
          resizeMode="stretch"
          source={{
            uri: [
              'https://www.neofinancial.com/_next/image?url=https%3A%2F%2Fstatic.production.neofinancial.com%2Fmarketing-web%2Fcredit%2Fcredit-neo-mastercard.png&w=640&q=75',
              'https://pngimg.com/d/credit_card_PNG23.png',
              'https://icm.aexp-static.com/Internet/internationalcardshop/en_sg/images/cards/gold-card.png',
              'https://cardinfo.in/assets/images/indusind-bank-signature-exclusive-debitcard.png'
            ][i],
          }}
        />
      </View>
    ))}
  </ScrollView>
</View>


<Text style= {[styles.heading, {marginTop: 20, marginBottom: 20}]}>Add money to Neobank</Text>

    <View style={{ flex: 1, padding: 20 }}>
      <WalletTile icon={require('../BankingApp/BankingAssets/Images/wallet.png')}
      label={"Reserved Wallet"}/>
      <WalletTile icon={require('../BankingApp/BankingAssets/Images/deposit.png')}
      label={"Move your direct deposit"}/>
      <WalletTile icon={require('../BankingApp/BankingAssets/Images/transfer.png')}
      label={"Transfer from other bank"}/>
      <WalletTile icon={require('../BankingApp/BankingAssets/Images/applepay.png')}
      label={"Apple Pay"}/>
      <WalletTile icon={require('../BankingApp/BankingAssets/Images/dcCard.png')}
      label={"Debit/Credit Card"}/>
    </View>

</View>


  )
}

export default AddMoney


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
    subHeading:{
    fontSize: 18,
    color: 'black'
  },
  tileSheet:{
  width: '100%',
  height: 50,
  borderRadius: 20,
  paddingLeft: 20,
  paddingRight: 20,
alignItems: 'center',
  backgroundColor: 'grey',
  justifyContent: 'space-between'

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

  input: {
    borderWidth: 1,
    borderColor: '#666',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },
});