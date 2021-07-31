import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import Spacer from '../components/Spacer';

const SigninScreen = ({navigation}) => {

     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     return (
          <View style={styles.container}>
               <Spacer>
                    <Text h2>Sign in</Text>
               </Spacer>
               <Input 
                    label="Email" 
                    value={email} 
                    onChangeText={setEmail} 
                    placeholder="xyz@mail.com" 
                    autoCapitalize="none"
                    autoCorrect={false}
                    leftIcon={<Icon name="mail" 
                    size={24} 
                    color='gray'/>}
               />
               <Spacer />
               <Input
                    secureTextEntry 
                    label="Password" 
                    value={password} 
                    onChangeText={setPassword}
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false} 
                    leftIcon={<Icon name="lock" 
                    size={24} 
                    color='gray'/>}
               />
               <Spacer>
                    <Button title="Sign in"/>
               </Spacer>
               <Spacer />
               <Button title="Don't have an account? Sign Up" type="clear" onPress={() => {
                    navigation.navigate('Signup');
               }}/>
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'center',
          marginBottom: 200
     }
});

export default SigninScreen;