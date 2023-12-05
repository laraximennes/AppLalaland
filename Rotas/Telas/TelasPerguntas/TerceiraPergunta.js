import React, {useState} from 'react';
import { View, Text, ImageBackground, Image, StatusBar, TouchableOpacity, TextInput} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import estiloInicial from '../../../estilos/estiloInicial';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useNavigation, useRoute } from '@react-navigation/native';

const TerceiraPergunta = () => {
  const navigation = useNavigation(); 
  const route = useRoute();
  const { pontuacao: novaPontuacao } = route.params ? route.params : {};

  const respostaCerta = () => {
    const novaPontuacao2 = novaPontuacao+1;
    navigation.navigate('QuartaPergunta', {novaPontuacao: novaPontuacao2});
  }

  const respostaErrada = () => {
    const novaPontuacao2 = novaPontuacao+0;
    navigation.navigate('QuartaPergunta', {novaPontuacao: novaPontuacao2});
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
            <Text style={estiloInicial.textoHeader}>Perguntas: 3 / 5</Text>
            <Text style={estiloInicial.textoHeader}>Pontos: {novaPontuacao}</Text>
          </LinearGradient>
        </View>

        <Image source={require('../../../imagens/imagensPerguntas/imagemTerceiraPergunta.jpg')} style={estiloInicial.containerPergunta}></Image>
        <View style={estiloInicial.conteudoPergunta}>
          <Text style={estiloInicial.textoPergunta}>Que prêmio La La Land ganhou na cerimônia do Oscar?</Text>
        </View>

        <View style={estiloInicial.conteudoBotoes}>
          <TouchableOpacity onPress={respostaErrada} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>a) Melhor Filme</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>b) Melhor Diretor</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>c) Melhor Ator</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaErrada} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>d) Melhor Atriz</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={respostaCerta} style={estiloInicial.btnResposta}>
            <Text style={estiloInicial.textoResposta}>e) Melhor Trilha Sonora</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

export default TerceiraPergunta;