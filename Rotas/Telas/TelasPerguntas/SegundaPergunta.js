import React, {useState} from 'react';
import { View, Text, ImageBackground, Image, StatusBar, TouchableOpacity, TextInput} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import estiloInicial from '../../../estilos/estiloInicial';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useNavigation, useRoute } from '@react-navigation/native';

const SegundaPergunta = () => {
  const navigation = useNavigation(); 
  const route = useRoute();
  const { pontuacao } = route.params ? route.params : {};

  const respostaCerta = () => {
    const novaPontuacao = pontuacao+1;
    navigation.navigate('TerceiraPergunta', {pontuacao: novaPontuacao});
  }

  const respostaErrada = () => {
    const novaPontuacao = pontuacao+0;
    navigation.navigate('TerceiraPergunta', {pontuacao: novaPontuacao});
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
            <Text style={estiloInicial.textoHeader}>Perguntas: 2 / 5</Text>
            <Text style={estiloInicial.textoHeader}>Pontos: {pontuacao}</Text>
          </LinearGradient>
        </View>

        <Image source={require('../../../imagens/imagensPerguntas/imagemSegundaPergunta.jpg')} style={estiloInicial.containerPergunta}></Image>
        <View style={estiloInicial.conteudoPergunta}>
          <Text style={estiloInicial.textoPergunta}>Qual é a cidade em que se passa a história do filme?</Text>
        </View>

        <View style={estiloInicial.conteudoBotoes}>
          <TouchableOpacity onPress={respostaErrada} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>a) Nova York</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>b) Paris</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaCerta} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>c) Los Angeles</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>d) Londres</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>e) Chicago</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

export default SegundaPergunta;