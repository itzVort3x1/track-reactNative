import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const SigninScreen = ({navigation}) => {
     return (
          <View>
               <Text style={{ fontSize: 48}}>SigninScreen</Text>
               <Button title="signup" onPress={() => { navigation.navigate('Signup')}}></Button>
               <Button title="go to main flow" onPress={() => { navigation.navigate('Home')}}></Button>
          </View>
     );
}

const style = StyleSheet.create({});

export default SigninScreen;