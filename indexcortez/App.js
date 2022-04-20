import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';




import question from './assets/images/question.png';

//Screen
import HomeScreen from './Screens/Home.js';
import QuizScreen from './Screens/QuizScreen.js';
import NewsScreen from './Screens/News.js';
import QuizMain from './Screens/Quiz.js';

// Font Awesome Icons...
import { FontAwesome5 } from '@expo/vector-icons';
import { useRef } from 'react';

const Tab = createBottomTabNavigator();


import { useFonts } from 'expo-font';



// Hiding Tab Names...
export default function App() {

  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  const [loaded] = useFonts({
    Euclid: require('./assets/fonts/Euclid-Circular-A.ttf'),
  });

  if (!loaded) {
    return null;
  }

  
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: 'white',
            position: 'absolute',

            // Max Height...
            height: 60,
            borderTopStartRadius: 20,
            borderTopEndRadius: 20,
            borderBottomStartRadius: 1,
            borderBottomEndRadius: 1,
            paddingHorizontal: 20,
          },
        }}>

        {
          // Tab Screens....
          // Tab ICons....
        }
        <Tab.Screen
          name={'Home'}
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: 'absolute',
                  top: 20,
                }}>
                <FontAwesome5
                  name="home"
                  size={20}
                  color={focused ? '#678fcc' : 'gray'}></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}></Tab.Screen>

        <Tab.Screen
          name={'QuizScreen'}
          component={QuizScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <View
                  style={{
                    width: 55,
                    height: 55,
                    backgroundColor: '#001542',
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 30,
                  }}>
                  <Image
                    source={question}
                    style={{
                      width: 22,
                      height: 22,
                      tintColor: 'white',
                    }}></Image>
                </View>
            ),
          }}></Tab.Screen>

        <Tab.Screen
          name={'News'}
          component={NewsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  // centring Tab Button...
                  position: 'absolute',
                  top: 20,
                }}>
                <FontAwesome5
                  name="newspaper"
                  size={20}
                  color={focused ? '#678fcc' : 'gray'}></FontAwesome5>
              </View>
            ),
          }}
          listeners={({ navigation, route }) => ({
            // Onpress Update....
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3.6,
                useNativeDriver: true,
              }).start();
            },
          })}></Tab.Screen>

      

          <Tab.Screen
            name="QuizHome"
            component={QuizMain}
              options={{
                tabBarButton: () => null,
                tabBarVisible: false, // if you don't want to see the tab bar
              }}
           />
      </Tab.Navigator>





      <Animated.View
        style={{
          width: getWidth() - 20,
          height: 2,
          backgroundColor: '#678fcc',
          position: 'absolute',
          bottom: 78,
          // Horizontal Padding = 20...
          left: 35,
          borderRadius: 20,
          transform: [{ translateX: tabOffsetValue }],
        }}></Animated.View>


    </NavigationContainer>
    
  );
}

function getWidth() {
  let width = Dimensions.get('window').width;

  // Horizontal Padding = 20...
  width = width - 20;

  // Total five Tabs...
  return width / 5;
}


