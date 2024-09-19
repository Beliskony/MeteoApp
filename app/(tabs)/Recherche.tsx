
import React, { useState,useEffect } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text, Alert, ScrollView,ImageBackground } from 'react-native';
import { BlurView } from 'expo-blur';
import LigneOneDeuxDeux from '@/components/recherche/LigneOneDeux';
import CorpusDeux from '@/components/recherche/CorpusDeux';
import PrevisionDeux from '@/components/recherche/PrevisionDeux';

const getBackgroundImage = () => {
    const hour = new Date().getHours();
  
    if (hour >= 6 && hour < 12) {
      return require("../../assets/images/morningSun.jpeg");
    } else if (hour >= 12 && hour < 18) {
      return require("../../assets/images/afternoonSun.jpeg");
    } else if (hour >= 18 && hour < 21) {
      return require("../../assets/images/backgroundSoir.jpg");
    } else {
      return require("../../assets/images/nuit.jpeg");
    }
  };
  const backgroundImage = getBackgroundImage();
  

export default function Recherche() {
    const [inputValue, setInputValue] = useState(''); 
    const [city, setCity] = useState<string | null>(null);
  
    const handleSearch = ()=> {
        if (inputValue.trim()!== ''){
            setCity(inputValue);
        }
    };
  
  return (
    
    <View style={{flexDirection:"column", height:"100%", flex:1}}>
        <ImageBackground blurRadius={10} source={backgroundImage} style={styles.imageBackground}>
      <View style={styles.Header}>
         <TextInput 
            placeholder='Entrez Une Ville'
            value={inputValue}
            onChangeText={setInputValue}
           style={{width:350, alignSelf:"center", fontWeight:"bold", fontSize:18, paddingHorizontal:40, color:"black",
            opacity:1
           }}/>
           
       </View>

       <View>
       <BlurView intensity={50} style={styles.container}>
            <TouchableOpacity onPress={handleSearch}>
                <Text style={{fontSize:18}}>Rechercher</Text>
            </TouchableOpacity>
        </BlurView>
       </View>

          <View>
              {city &&<LigneOneDeuxDeux city={city}/>}
          </View>
        <ScrollView>
            <View>
                {city &&<CorpusDeux city={city} />}
            </View>
            {city &&<PrevisionDeux city={city} />}

        </ScrollView>
        </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
    Header:{
        margin:15,
        height:40,
        backgroundColor:"white",
        borderRadius:15,
        justifyContent:"center",
        alignContent:"center"
    },
    container:{
        overflow:"hidden",
        display:"flex",
        borderWidth:2,
        backgroundColor:"white",
        borderRadius:20,
        height:40,
        width:120,
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center"
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',  // Centrer le contenu verticalement
        alignItems: 'center',       // Centrer le contenu horizontalement
      },
});
