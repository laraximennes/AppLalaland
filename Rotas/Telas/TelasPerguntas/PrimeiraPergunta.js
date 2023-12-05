import React, {useState} from 'react';
import { View, Text, ImageBackground, Image, StatusBar, TouchableOpacity, TextInput} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import estiloInicial from '../../../estilos/estiloInicial';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useNavigation, useRoute } from '@react-navigation/native';

const PrimeiraPergunta = () => {
  const navigation = useNavigation(); 
  var pontuacao = 0;
  
  const respostaCerta = () =>{
    pontuacao++;
    navigation.navigate('SegundaPergunta', {pontuacao});
  }

  const respostaErrada = () =>{
    pontuacao;
    navigation.navigate('SegundaPergunta', {pontuacao});
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
            <Text style={estiloInicial.textoHeader}>Perguntas: 1 / 5</Text>
            <Text style={estiloInicial.textoHeader}>Pontos: 0</Text>
          </LinearGradient>
        </View>

        <Image source={require('../../../imagens/imagensPerguntas/imagemPrimeiraPergunta.jpg')} style={estiloInicial.containerPergunta}></Image>
        <View style={estiloInicial.conteudoPergunta}>
          <Text style={estiloInicial.textoPergunta}>Quem interpreta o papel principal de "La La Land"?</Text>
        </View>

        <View style={estiloInicial.conteudoBotoes}>
          <TouchableOpacity onPress={respostaErrada} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>a) Ryan Reynolds</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>b) Bradley Cooper</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaCerta} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>c) Emma Stone</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>d) Ryan Gosling</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>e) Jake Gyllenhaal</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

export default PrimeiraPergunta;