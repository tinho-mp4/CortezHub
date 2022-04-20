import React from 'react';
import { StatusBar, Dimensions, Text, View, StyleSheet, TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import Games from '../Components/Games'
import {useNavigation} from '@react-navigation/native';

import Quiz from './QuizScreen';

const api1 = [
	require('../assets/images/valorant.png'),
	require('../assets/images/lol.png'),
	require('../assets/images/fortnite.png'),
	require('../assets/images/rocketleague.png'),
  require('../assets/images/roblox.png')
]

const api = [
	require('../assets/images/fifa22.jpg'),
	require('../assets/images/minecraft.png'),
	require('../assets/images/r6s.png'),
	require('../assets/images/gta.png'),
  require('../assets/images/asphalt.png')
]


const Container = styled.ScrollView`
	flex: 1;
	background-color: #00031c;
`;

const Poster = styled.ImageBackground`
	width: 100%;
	height: ${(Dimensions.get('window').height * 40) / 200}px;
  
`;

const Gradient = styled(LinearGradient)`
	height: 100%;
  `;




const Home = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      
      <Container>
        
        <Poster source={require('../assets/images/valorantbg.jpg')}>

          <Gradient
            locations={[0, 0.3, 0.4, 0.93]}
            colors={[
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0.3,28,1)',
            ]}></Gradient>

        </Poster>
      <Text style={{fontSize: 30, fontWeight: "bold", color: 'white', paddingBottom: 20, lineHeight: 30, marginTop: -5}}>{"PLAY NOW:" + `
` + "VALORANT"}</Text>
      <Games label={<Text style={{fontSize: 20, fontWeight: "bold", fontFamily: 'Euclid'}}>{'Play For Free' }</Text>} item={api1}/>
      <View style={styles.border}></View>
      <View style={styles.container}>

          <Text style={{fontSize: 20, fontWeight: "bold", color: 'white', textAlign: 'center', justifyContent:"center", paddingBottom: 20 }}>Want to test you're knowledge? Try out the new quiz feature</Text>
               <TouchableOpacity
                  style={styles.button}
                    onPress={() => navigation.navigate('QuizScreen')}>
                  <Text style={{color: 'white'}}>Try Quiz</Text>
                 </TouchableOpacity>
      </View>
      <View style={styles.border}></View>
      <Games label={<Text style={{fontSize: 20, fontWeight: "bold",  fontFamily: 'Euclid'}}>{'Trending Now' }</Text>} item={api}/>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    marginBottom: 10,
    paddingHorizontal: 5,
    backgroundColor: "#00031c",
  },
  border:{
    borderTopWidth: 2,
    borderColor: 'white',
    paddingTop: 8,
    paddingBottom: 8,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#0053ab",
    padding: 10,
    color: 'white',
    
  },
});



export default Home;

