import React, {useState} from 'react';
import { View, Text, ImageBackground, Image, StatusBar, TouchableOpacity, TextInput} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import estiloInicial from '../../../estilos/estiloInicial';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useNavigation, useRoute } from '@react-navigation/native';

const QuartaPergunta = () => {
  const navigation = useNavigation(); 
  const route = useRoute();
  const { novaPontuacao: novaPontuacao2 } = route.params ? route.params : {};

  const respostaCerta = () => {
    const novaPontuacao3 = novaPontuacao2+1;
    navigation.navigate('QuintaPergunta', {novaPontuacao2: novaPontuacao3});
  }

  const respostaErrada = () => {
    const novaPontuacao3 = novaPontuacao2+0;
    navigation.navigate('QuintaPergunta', {novaPontuacao2: novaPontuacao3});
  }

   let [fontsLoaded] = useFonts({
    'LaLaLandBold':require('../../../estilos/fontes/Yasashii-Bold.ttf'),
    'SundayRomantic':require('../../../estilos/fontes/SundayRomantic.otf'),
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return(
      <View style={estiloInicial.conteudoPrincipal}>
        <StatusBar hidden />
        <View style={estiloInicial.headerPerguntas}>
          <LinearGradient
            colors={["#020202", "#08063a"]}
            style={estiloInicial.headerPerguntasContainer}
          >
            <Text style={estiloInicial.textoHeader}>Perguntas: 4 / 5</Text>
            <Text style={estiloInicial.textoHeader}>Pontos: {novaPontuacao2}</Text>
          </LinearGradient>
        </View>

        <Image source={require('../../../imagens/imagensPerguntas/imagemQuartaPergunta.jpg')} style={estiloInicial.containerPergunta}></Image>
        <View style={estiloInicial.conteudoPergunta}>
          <Text style={estiloInicial.textoPergunta}>Qual é o tema principal do filme "La La Land"?</Text>
        </View>

        <View style={estiloInicial.conteudoBotoes}>
          <TouchableOpacity onPress={respostaErrada} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>a) Ficção Científica</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>b) Drama de Época</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaCerta} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>c) Musical Romântico</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>d) Suspense Psicológico</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>e) Comédia de Ação</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

export default QuartaPergunta;