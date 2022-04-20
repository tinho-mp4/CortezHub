import React, { useState } from 'react';
import {
  StatusBar,
  Dimensions,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import Games from '../Components/Games';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';




const Container = styled.ScrollView`
	flex: 1;
	background-color: #00031c;
`;

const Poster = styled.ImageBackground`
	width: 100%;
	height: ${(Dimensions.get('window').height * 40) / 200}px; `;

const Gradient = styled(LinearGradient)`
	height: 100%;`;





const News = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Poster source={require('../assets/images/fortnitebg.png')}>
          <Gradient
            locations={[0, 0.2, 0.6, 0.93]}
            colors={[
              'rgba(0,0,0,0.5)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0,0,0.0)',
              'rgba(0,0.3,28,1)',
            ]}></Gradient>
        </Poster>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white',
            paddingBottom: 20,
            lineHeight: 30,
            marginTop: -5,
          }}>
          {'NEWS'}
        </Text>
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Card>
              <Card.Content>
                <Title>An Elden Ring scientist did the math: The Erdtree is taller than the Alps</Title>
              </Card.Content>
              <Card.Cover source={require('../assets/images/NewsImages/1.png')}/>
              <Text style={styles.paragraph}>
                The pile of patch notes released by Bandai Namco covers a huge number of interactions, rebalances and adjustments. From shortening animation times on status effects to buffing The Grafted Blade Greatsword, there is a lot to dig into...
              </Text>
            </Card>
          </View>


          <View style={styles.container}>
            <Card>
              <Card.Content>
                <Title>Overwatch 2 Making Overwatch 2's Sojourn was hard because 'railguns are kinda overpowered'</Title>
              </Card.Content>
              <Card.Cover source={require('../assets/images/NewsImages/2.png')}/>
              <Text style={styles.paragraph}>
                Blizzard has been thinking about adding a railgun to the Overwatch weapon pool for a long time, but struggled with how to balance around such a powerful, precise weapon. The first prototype resembled a classic Quake 2 railgun with high damage, hitscan precision, low recoil, and no scope required...
              </Text>
            </Card>
          </View>


          <View style={styles.container}>
            <Card>
              <Card.Content>
                <Title>Kingdom Hearts 4 Announced, Watch The First Trailer</Title>
              </Card.Content>
              <Card.Cover source={require('../assets/images/NewsImages/3.jpg')} />
              <Text style={styles.paragraph}>
                Square Enix has announced that development is underway on Kingdom Hearts IV, the next entry in the long-running Disney RPG series. The news came as part of a 20th-anniversary celebration event and included the release of the very first trailer, which you can watch below...
              </Text>
            </Card>
          </View>



          <View style={styles.container}>
            <Card>
              <Card.Content>
                <Title>‘Horizon Forbidden West’ studio explains its ‘God Of War’ easter eggs</Title>
              </Card.Content>
              <Card.Cover style={styles.image} source={require('../assets/images/NewsImages/4.jpg')} />
              <Text style={styles.paragraph}>
Throughout the Forbidden West players can find totems based on Kratos, Atreus and Brok and Sindri, with the Leviathan Axe and Kratos’ home also present. This type of reference is very similar to how the Iki island downloadable content (DLC) for Ghost Of Tsushima had multiple references to other first-party PlayStation titles...
              </Text>
            </Card>
          </View>

          <View style={styles.container}>
            <Card>
              <Card.Content>
                <Title>It's Official, Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles Is Getting New Fighter DLC</Title>
              </Card.Content>
              <Card.Cover style={styles.image} source={require('../assets/images/NewsImages/5.jpeg')}  />
              <Text style={styles.paragraph}>
                Sega has now officially confirmed this Character Pack DLC for Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles will be coming this Summer. It will include six characters across a series of periodic updates. Sega will reveal more about this DLC in the coming months...
              </Text>
            </Card>
          </View>
        </SafeAreaView>
      </Container>

      
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    paddingBottom: 70,
    paddingRight: 5,
    paddingLeft: 5,
    color: 'white',
  },
  paragraph: {
    fontSize: 12,
    fontWeight: 'bold',
    padding: 20,
  },
  image: {
    padding: 8,
    top: 10,
    width: '100%', 
    height: 150,
  },
  text_container:{
    backgroundColor:'#00031c',
    color:'white',
  }
});

export default News;
