import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import P1 from './pages/First-page'
import P2 from './pages/second-page'
import P3 from './pages/third-page'

function HomeScreen({navigation}){
  const [nome, setNome] = useState();
  const [senha, setSenha] = useState();
  const check = ()=>{
      if(nome === "adm" && senha === "123"){
        navigation.navigate('Pag2')
        return "Login efetuado com sucesso";
      }else{
          return "Insira os dados corretamente"
      }
  }

  return (
      <View style={styles.container}>
        <View>
          <P1/>
        </View>    
          <Text style={styles.styleTitle}>Insira seu login</Text>
          <TextInput 
              style={styles.styleBoxText}
              placeholder="Digite seu login"
              autoFocus={true} 
              keyboardType={'text'}
              onChangeText = {text => setNome(text)}
          />
          
          <Text
              style={styles.styleTitle}>Insira sua senha
          </Text>
          
          <TextInput
              style={styles.styleBoxText}
              placeholder="Digite sua senha"
              autoFocus={true}
              keyboardType={'numeric'}
              onChangeText= {text => setSenha(text)}
          />
          
          <Button 
              title='Entrar'
              onPress={()=> alert(check())}
          />

          <View>
          </View>
      
      </View>
      )
}
function PageTwoScreen({navigation}){
  return (
    <View style={styles.container}>
      <View>
      <P2/>
      </View>
      <View>
        <Button
        title="Home"
        onPress={()=> alert("Home")}
        />
      </View>
      <br/>
      <View>
        <Button
        title="Pagina 3"
        onPress={()=> navigation.navigate("Pag3")}
        />
      </View>
    </View>
    
  )
}
function PageThreeScreen(){
  return(
    <View style={styles.container}>
      <View>
        <P3/>
      </View>
    </View>
  )
}
const Stack = createNativeStackNavigator();
export default function App(){
  return(
    // <View style={styles.container}>
    //   <Text>a</Text>
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Pag1" component={HomeScreen}/>
        <Stack.Screen name="Pag2" component={PageTwoScreen}/>
        <Stack.Screen name="Pag3" component={PageThreeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleBoxText: {
    margin:10,
    borderWidth: 1,
    borderColor:'#000',
    color: '#000',
    borderRadius:5,
    paddingLeft: 25,
    height: 30
},
styleTitle: {
    fontSize: 25,
    fontFamily: 'sans-serif',
}
});
