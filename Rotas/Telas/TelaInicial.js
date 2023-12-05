import { View, Text, ImageBackground, Image, StatusBar, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import estiloInicial from '../../estilos/estiloInicial';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const TelaInical = () =>{
  
  const navigation = useNavigation(); 

  let [fontsLoaded] = useFonts({
    'LaLaLandBold':require('../../estilos/fontes/Yasashii-Bold.ttf'),
    'SundayRomantic':require('../../estilos/fontes/SundayRomantic.otf'),
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return(
    <Animatable.View animation="fadeInUp" delay={300} style={estiloInicial.conteudoPrincipal}>
      <StatusBar hidden />
      <ImageBackground style={estiloInicial.imagemFundo} source={require('../../imagens/imagemFundoTelaInicial.jpg')}>
        <View style={estiloInicial.titulosConteudo}>
          <Text style={estiloInicial.textoPrincipal}>LA LA LAND</Text>
          <TouchableOpacity onPress={() => navigation.navigate('PaginaLogin')} style={estiloInicial.btnInicio}>
            <LinearGradient
              colors={["#321e7c", "#08063a"]}
              style={estiloInicial.colorsBtn}
            >
              <Text style={estiloInicial.textoInicio}>CLIQUE PARA COMEÇAR</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Image style={estiloInicial.imagemPersonagens} source={require('../../imagens/personagensFundo.png')} />
        </View>
      </ImageBackground>
    </Animatable.View>
  );
}

export default TelaInical;