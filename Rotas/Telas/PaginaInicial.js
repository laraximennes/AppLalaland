import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, StatusBar, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import estiloInicial from '../../estilos/estiloInicial';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useRoute } from '@react-navigation/native';

const PaginaInicial = (props) =>{
  const navigation = useNavigation();
  const {nomeUsuario} = props.route.params ? props.route.params : {};

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
      <ScrollView>
         <ImageBackground style={estiloInicial.imagemFundoLogin} source={require('../../imagens/imagemFundoTelaPrincipal.jpg')}>
            <View style={estiloInicial.headerLogin}>
              <Text style={estiloInicial.textoLogin}>LA LA LAND | INÍCIO</Text>
            </View>
          </ImageBackground>

          <View style={estiloInicial.boasVindas}>
            <Text style={estiloInicial.textoBoasVindas}>Olá, seja muito bem vindo(a):</Text>
            <Text style={estiloInicial.nomeUsarioEstilo}> Lara </Text>
          </View>

          <View style={estiloInicial.procurarConteudo}>
            <TextInput
              placeholder="O que deseja pesquisar Hoje?"
              style={estiloInicial.inputBuscarConteudo}
              placeholderTextColor="#cccccc"
            />
            <Icon name="search" style={estiloInicial.iconeSearch} />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('PrimeiraPergunta')}>
            <View style={estiloInicial.sabiaMais}>
              <LinearGradient
                    colors={["#020202", "#08063a"]}
                    style={estiloInicial.saibaMaisContainer}
                  >
                  <Text style={estiloInicial.textoSaibaMais}>Saiba Mais Sobre o nosso Quiz</Text>
                  <Text style={estiloInicial.descricaoSaibaMais}>Descubra tudo sobre o nosso Quiz! Clique no botão e mergulhe em um mundo de conhecimento e diversão. Prepare-se para desafios emocionantes e aproveite uma experiência única. Não perca essa oportunidade!</Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>

          <View style={estiloInicial.categorias}>
            <View style={estiloInicial.headerCategoria}>
              <Text style={estiloInicial.textoCategoria}>Categoria Principal</Text>
              <TouchableOpacity>
                <Text style={estiloInicial.tituloVerCategoria}>Mais Categorias</Text>
              </TouchableOpacity>
            </View>

            <View style={estiloInicial.cardQuizContainer}>
              <View style={estiloInicial.cardQuizSingle}>
                <Image style={estiloInicial.imagemQuizCategoria} source={require('../../imagens/imagemIcones/matematicaQuiz.png')}/>
                <Text style={estiloInicial.textoCategoriaQuiz}>Matemática</Text>
              </View>

              <View style={estiloInicial.cardQuizSingle}>
                <Image style={estiloInicial.imagemQuizCategoria} source={require('../../imagens/imagemIcones/geografiaQuiz.png')}/>
                <Text style={estiloInicial.textoCategoriaQuiz}>Geográfia</Text>
              </View>

              <View style={estiloInicial.cardQuizSingle}>
                <Image style={estiloInicial.imagemQuizCategoria} source={require('../../imagens/imagemIcones/historiaQuiz.png')}/>
                <Text style={estiloInicial.textoCategoriaQuiz}>História</Text>
              </View>

              <View style={estiloInicial.cardQuizSingle}>
                <Image style={estiloInicial.imagemQuizCategoria} source={require('../../imagens/imagemIcones/informaticaQuiz.png')}/>
                <Text style={estiloInicial.textoCategoriaQuiz}>Informática</Text>
              </View>

              <View style={estiloInicial.cardQuizSingle}>
                <Image style={estiloInicial.imagemQuizCategoria} source={require('../../imagens/imagemIcones/quimicaQuiz.png')}/>
                <Text style={estiloInicial.textoCategoriaQuiz}>Química</Text>
              </View>

              <View style={estiloInicial.cardQuizSingle}>
                <Image style={estiloInicial.imagemQuizCategoria} source={require('../../imagens/imagemIcones/sportsQuiz.png')}/>
                <Text style={estiloInicial.textoCategoriaQuiz}>Esportes</Text>
              </View>
            </View>
          </View>
      </ScrollView>
    </Animatable.View>
  );
}

export default PaginaInicial;