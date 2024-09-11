import {StyleSheet, View, TextInput, Text } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

export default function LigneOne() {
  return (
    <BlurView intensity={70} style={styles.barre}>
        <Text style={styles.titre}>Ma Position</Text>
        <Text style={styles.ville}>Abidjan</Text>

         <View style={{justifyContent:"center",alignContent:"center", flexDirection:"row"}}>
          <Text style={styles.degre}>24</Text>
          <Text style={styles.degre}>°</Text>
         </View>

         <View style={{justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
          <Text style={{color:"white", fontWeight:"bold",marginVertical:3}}>Eclaircie</Text>
             <View style={{flexDirection:"row"}}>

              <View style={{flexDirection:"row",paddingRight:10}}>
               <Ionicons name='arrow-down' style={{paddingVertical:2, color:"white"}}/>
               <Text style={{color:"white"}}>20°</Text>
              </View>


              <View style={{flexDirection:"row"}}>
               <Ionicons name='arrow-up' style={{paddingVertical:2, color:"white"}}/>
               <Text style={{color:"white"}}>32°</Text>
              </View>

             </View>
         </View> 
    </BlurView>

  );
}

const styles = StyleSheet.create({
  barre:{
    marginVertical:10,
    height:200,
    width:300,
    justifyContent:"center",
    alignSelf:"center",
    borderRadius:20,
    overflow:"hidden",
  },
  
  titre:{
    fontWeight:"bold",
    fontSize:30,
    color:"white",
    alignSelf:"center"
  },

  ville:{
    fontWeight:"bold",
    fontSize:20,
    alignSelf:"center",
    color:"white"
    
  },

  degre:{
    fontWeight:"100",
    fontSize:60,
    color:"white"
  },

  indication:{
    color:"white"
  },

  indicationMarge:{
    color:"white",
    paddingRight:5
  }

});