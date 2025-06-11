

import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type wallet = {
    icon: string,
    lable: string,
}


const WalletTile = ({icon, label, showArrow = true}) => {
  return (
   <View style={styles.tileWrapper}>
         <View style={[styles.tileSheet, { flexDirection: 'row', justifyContent: 'space-between' }]}>

        {/* Left side: Icon + Label */}
   <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={icon} style={styles.icon} />
          <Text style={styles.subHeading}>{label}</Text>
       </View>

               {/* Right side: Optional Arrow */}
{showArrow && (
          <Image
            source={require('../BankingApp/BankingAssets/Images/arrow.png')}
            style={styles.icon}
          />
        )}   </View>
   </View>
  )
}

export default WalletTile

    const styles = StyleSheet.create({
  tileWrapper: {
    marginBottom: 16, // spacing between tiles
  },
  tileSheet: {
    padding: 14,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  icon: {
    height: 22,
    width: 22,
    marginRight: 10,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});
