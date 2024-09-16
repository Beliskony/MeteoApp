import Corpus from '@/components/acceuil/Corpus';
import Indices from '@/components/acceuil/Indices';
import LigneOne from '@/components/acceuil/LigneOne';
import Precipitations from '@/components/acceuil/Precipitations';
import Prevision from '@/components/acceuil/Prevision';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ImageBackground, ScrollView } from 'react-native';

const getBackgroundImage = () => {
  const hour = new Date().getHours();

  if (hour >= 6 && hour < 12) {
    return require("../assets/images/morningSun.jpeg");
  } else if (hour >= 12 && hour < 18) {
    return require("../assets/images/afternoonSun.jpeg");
  } else if (hour >= 18 && hour < 21) {
    return require("../assets/images/backgroundSoir.jpg");
  } else {
    return require("../assets/images/nuit.jpeg");
  }
};
const backgroundImage = getBackgroundImage();

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent={true} backgroundColor="transparent" />
      
      <ImageBackground blurRadius={10} source={backgroundImage} style={styles.imageBackground}>

        <View style={styles.overlay}>
              <LigneOne></LigneOne>
          <ScrollView>
              <View>
                 <Corpus></Corpus>
              </View>
             
                <Prevision></Prevision>

                <Precipitations></Precipitations>

                <Indices></Indices>
          </ScrollView>
        </View>


      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',  // Centrer le contenu verticalement
    alignItems: 'center',       // Centrer le contenu horizontalement
  },
  overlay: {
    flex: 1,
    height:"70%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Superposition semi-transparente pour mieux voir le contenu
    width: '100%',
  },
});
