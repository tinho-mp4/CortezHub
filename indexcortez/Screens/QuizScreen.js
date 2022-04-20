import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Navigator,
  Dimensions,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import {useNavigation} from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';





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


const QuizScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      
      <Container>
        <Poster source={require('../assets/images/callofdutybg.jpg')}>
          <Gradient
            locations={[0, 0.3, 0.4, 0.93]}
            colors={[
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0.3,28,1)',
            ]}></Gradient>

        </Poster>

      <Text style={{fontSize: 30, fontWeight: "bold", color: 'white', paddingBottom: 20, lineHeight: 30, marginTop: -5}}>{"Quiz"}</Text>
      
      <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: "bold", color: 'white', textAlign: 'center', justifyContent:"center", paddingBottom: 90 }}>Want to test you're knowledge? Try out the new quiz feature</Text>
          <TouchableOpacity
            style={styles.button}
            onPress = {() => navigation.navigate('QuizHome')}>
              <Text style = {{color: 'white'}}>Start Quiz</Text>
          </TouchableOpacity>
      </View>
      </Container>


    </>
    
  );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    marginBottom: 50,
    paddingHorizontal: 10,
    backgroundColor: "#00031c",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#0053ab",
    padding: 10,
    color: 'white',
  },
});

export default QuizScreen;