import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { useQuery } from '@apollo/client'
import { FETCH_DATA } from '../graphql/LoginQueries';
import Icon from 'react-native-vector-icons/Entypo';
import Arrowleft from 'react-native-vector-icons/AntDesign'; 
import Spacer from '../components/Spacer';

const SignupScreen = ({navigation}) => {

     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [login, setLogin] = useState([]);

     const {data, loading, error} = useQuery(FETCH_DATA,{
          fetchPolicy: 'cache-and-network',
          onCompleted: loadData
     });

     function loadData(data){
          setLogin(data);
     }

     if(loading || error) return null;

     return (
          <View style={styles.container}>
               <Spacer>
                    <Text h3>{data.events[0].title}</Text>
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
                    <Button title="Sign Up"/>
               </Spacer>
               <Spacer />
               <Button icon={<Arrowleft name="arrowleft" size={24}/>} title="Back to Sign in" type="clear" onPress={() => {
                    navigation.navigate('Signin');
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

export default SignupScreen;