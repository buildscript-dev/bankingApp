import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={[styles.container, {alignItems: 'center'}]}>
    <Image style={styles.profilePic} source={{uri: 'https://wallpapers.com/images/hd/madara-uchiha-anime-portrait-zh86vpccia78m4ct.png'}}/>
<View style={styles.profileCard}>
<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", padding: 20}}>
    <Text style={styles.heading}>Personal info</Text>
    <Text style={[styles.heading, {fontSize: 20}]}>Edit</Text>
</View>
<View style={{padding: 20,}}>
<ProfileTile icon={require('../BankingAssets/Images/person.png')} label='Name' details='Madara Uchiha'/>
<ProfileTile icon={require('../BankingAssets/Images/email.png')} label='E-mail' details='uchihaMadara80k@gmail.com'/>
<ProfileTile icon={require('../BankingAssets/Images/call.png')} label='Phone number' details='+1 201 555-0123'/>
<ProfileTile icon={require('../BankingAssets/Images/home.png')} label='Home address' details='Uchiha Clan District, Hidden Leaf Village, Land of Fire '/>
</View>

</View>
    </View>
  )
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#FAF6E9',
  },
    profilePic: {
        height: 150,
        width: 150,
        padding: 10,
        borderColor: 'white',
        borderWidth: 7,
        borderRadius: 100,
    },
    profileCard: {
        borderRadius: 18,
        marginTop: 40,
        height: 400,
        width: '100%',
        backgroundColor: 'white'
    },
      heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
      subHeading:{
    fontSize: 18,
    color: 'black'
  },
  labelTxt:{
fontSize: 16,
color:'grey'
  },
  detailTxt: {
fontSize: 17,
  },

    tileWrapper: {
    // marginBottom: 16, // spacing between tiles
  },
  tileSheet: {
    // padding: 14,
    // borderRadius: 12,
    // backgroundColor: '#fff',
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: 6,
    // elevation: 3,
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
})



type ProfileTileProps = {
  icon: any; // 👈 for require() images (use `ImageSourcePropType` for better safety)
  label: string;
  details: string;
};


const ProfileTile:React.FC<ProfileTileProps> = ({icon, label, details}) => {
 return (
   <View style={styles.tileWrapper}>
         <View style={[styles.tileSheet, { flexDirection: 'row', alignItems: 'center', marginBottom: 20 }]}>
        {/* Left side: Icon + Label */}
          <Image source={icon} style={styles.icon} />


     {/* Right side: Optional Arrow */}
   <View style={{flexDirection: 'column', alignItems: 'start', marginLeft: 8}}>
          <Text style={styles.labelTxt}>{label}</Text>
          <Text style={styles.detailTxt}>{details}</Text>
  </View>
         </View>

   </View>
  )


}