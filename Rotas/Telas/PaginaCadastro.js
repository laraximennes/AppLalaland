import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, StatusBar, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import estiloInicial from '../../estilos/estiloInicial';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const PaginaCadastro = (/*{ navigation }*/) =>{

  const navigation = useNavigation();
  
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [emailUsuario, setEmailUsuario] = useState(''); 
  const [senhaUsuario, setSenhaUsuario] = useState(''); 

  const validarCadastro = () =>{
      if(nomeUsuario === "" && emailUsuario === "" && senhaUsuario === ""){
        window.alert("Importante: Para efetuar o cadastro, é imprescindível preencher todos os campos obrigatórios. Apenas com todas as informações corretamente preenchidas você poderá concluir o processo de cadastro com sucesso. Não deixe nenhum campo em branco e garanta seu acesso completo!");
      }else if(nomeUsuario === ""){
        window.alert("Atenção: Para prosseguir com o cadastro, é fundamental preencher todos os campos obrigatórios, incluindo o nome de usuário. Não se esqueça de fornecer um nome de usuário único e significativo, pois ele será sua identificação na plataforma. ");
      }else if(emailUsuario === ""){
        window.alert("Atenção: Para concluir o cadastro, é essencial preencher todos os campos obrigatórios, incluindo o endereço de email. Certifique-se de fornecer um endereço de email válido e ativo, pois será por meio dele que enviaremos informações importantes e atualizações relevantes.");
      }else if(senhaUsuario === ""){
        window.alert("Importante: Para finalizar o cadastro, é necessário preencher todos os campos obrigatórios, incluindo a senha. Escolha uma senha segura e única, contendo uma combinação de letras, números e caracteres especiais. Lembre-se de manter sua senha em segredo e evite compartilhá-la com terceiros.");
      }else{
        navigation.navigate('PaginaLogin', {nomeUsuario, emailUsuario, senhaUsuario});
      }
  }
  
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
      <ImageBackground style={estiloInicial.imagemFundoLogin} source={require('../../imagens/imagem_fundo_registro.jpg')}>
        <View style={estiloInicial.headerLogin}>
          <Text style={estiloInicial.textoLogin}>LA LA LAND | REGISTRO</Text>
        </View>
      </ImageBackground>

      <View style={estiloInicial.containerForm}>
        <LinearGradient
              colors={["#020202", "#101010"]}
              style={estiloInicial.conteudoForm}
            >
          <ScrollView style={estiloInicial.boxForm}>
            <View style={estiloInicial.headerContainer}>
                <LinearGradient
                colors={["#321e7c", "#08063a"]}
                style={estiloInicial.headerComponente}
              >
                <Text style={estiloInicial.textoInicio}>CRIE UMA CONTA NOVA AGORA!</Text>
              </LinearGradient>
            </View>
            <Text style={estiloInicial.descricaoLogin}>Crie sua conta agora e não perca nenhuma novidade sobre o quiz e garanta sua participação exclusiva!</Text>
            
            <View style={estiloInicial.conteudoDados}>
              <Text style={estiloInicial.textoCampo}>Nome de Usuário <Text style={estiloInicial.simboloTexto}>*</Text></Text>
              <TextInput 
                value={nomeUsuario}
                onChangeText={nomeUsuarioCadastro => setNomeUsuario(nomeUsuarioCadastro)}
                style={estiloInicial.inputFormulario}
              />

              <Text style={estiloInicial.textoCampo}>Endereço de E-mail <Text style={estiloInicial.simboloTexto}>*</Text></Text>
              <TextInput 
                value={emailUsuario}
                onChangeText={emailUsuarioCadastro => setEmailUsuario(emailUsuarioCadastro)}
                style={estiloInicial.inputFormulario}
              />

              <Text style={estiloInicial.textoCampo}>Senha de Acesso <Text style={estiloInicial.simboloTexto}>*</Text></Text>
              <TextInput 
                value={senhaUsuario}
                onChangeText={senhaUsuarioCadastro => setSenhaUsuario(senhaUsuarioCadastro)}
                style={estiloInicial.inputFormulario}
                secureTextEntry={true}
              />

              <TouchableOpacity onPress={validarCadastro} style={estiloInicial.btnContainer}>
                 <LinearGradient
                  colors={["#321e7c", "#08063a"]}
                  style={estiloInicial.btnLogin}
                >
                  <Text style={estiloInicial.textoBtnLogin}>REGISTRAR NOVA CONTA</Text>
                </LinearGradient>
              </TouchableOpacity>

              <View style={estiloInicial.conteudoCriarConta}>
                <Text style={estiloInicial.textoCriarConta}>Já possui uma Conta?</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('PaginaLogin')} style={estiloInicial.btnCadastrar}>
                    <Text style={estiloInicial.textoBtnConta}>Faça Login Agora!</Text>
                  </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    </Animatable.View>
  );
}

export default PaginaCadastro;