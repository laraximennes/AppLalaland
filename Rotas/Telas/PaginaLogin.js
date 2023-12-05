import React, {useState} from 'react';
import { View, Text, ImageBackground, Image, StatusBar, TouchableOpacity, TextInput} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import estiloInicial from '../../estilos/estiloInicial';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { useNavigation, useRoute } from '@react-navigation/native';

const PaginaLogin = () =>{
  const [nomeUsuarioLogin, setNomeUsuarioLogin] = useState('');
  const [senhaUsuarioLogin, setSenhaUsuarioLogin] = useState('');
  const navigation = useNavigation();
  const route = useRoute();

  const {nomeUsuario, emailUsuario, senhaUsuario} = route.params ? route.params : {};

  const verificarLogin = () =>{
    if(nomeUsuarioLogin === "" && senhaUsuarioLogin === ""){
      window.alert("Importante: Para efetuar o login, é imprescindível preencher todos os campos obrigatórios. Apenas com todas as informações corretamente preenchidas você poderá concluir o processo de login com sucesso.");
    }else if(nomeUsuarioLogin === ""){
      window.alert("Para prosseguir com o login, é fundamental preencher todos os campos obrigatórios, incluindo o nome de usuário. Não se esqueça de fornecer o nome de usuário que já foi cadastrado por você");
    }else if(senhaUsuarioLogin === ""){
      window.alert("Para prosseguir com o login, é fundamental preencher todos os campos obrigatórios, incluindo a sua senha de acesso. E não se esqueça de fornecer a sua senha de acesso que já foi cadastrado por você na tela de Cadastro");
    }else if(nomeUsuarioLogin === nomeUsuario && senhaUsuarioLogin === senhaUsuario){
      navigation.navigate('PaginaInicial', {nomeUsuarioLogin});
    }else{
      window.alert("Não foi possível fazer login, parece que essas credênciais fornecidas pelo formulário de Login não existe");
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
      <ImageBackground style={estiloInicial.imagemFundoLogin} source={require('../../imagens/imagem_login_topo.jpeg')}>
        <View style={estiloInicial.headerLogin}>
          <Text style={estiloInicial.textoLogin}>LA LA LAND | LOGIN</Text>
        </View>
      </ImageBackground>

      <View style={estiloInicial.containerForm}>
        <LinearGradient
              colors={["#020202", "#101010"]}
              style={estiloInicial.conteudoForm}
            >
          <View style={estiloInicial.boxForm}>
            <View style={estiloInicial.headerContainer}>
                <LinearGradient
                colors={["#321e7c", "#08063a"]}
                style={estiloInicial.headerComponente}
              >
                <Text style={estiloInicial.textoInicio}>FAÇA LOGIN EM SUA CONTA</Text>
              </LinearGradient>
            </View>
            <Text style={estiloInicial.descricaoLogin}>Faça o seu login e fique por dentro de todas as nossas novidades sobre o Quiz!</Text>
            
            <View style={estiloInicial.conteudoDados}>
              <Text style={estiloInicial.textoCampo}>Nome de Usuário <Text style={estiloInicial.simboloTexto}>*</Text></Text>
              <TextInput 
                value={nomeUsuarioLogin}
                onChangeText={nomeUsuarioLoginVerificar => setNomeUsuarioLogin(nomeUsuarioLoginVerificar)}
                style={estiloInicial.inputFormulario}
              />

              <Text style={estiloInicial.textoCampo}>Senha de Acesso <Text style={estiloInicial.simboloTexto}>*</Text></Text>
              <TextInput 
                value={senhaUsuarioLogin}
                onChangeText={senhaUsuarioLoginVerificar => setSenhaUsuarioLogin(senhaUsuarioLoginVerificar)}
                style={estiloInicial.inputFormulario}
                secureTextEntry={true}
              />

              <TouchableOpacity style={estiloInicial.btnEsqueceuSenha}>
                <Text style={estiloInicial.textoEsqueceuSenha}>Esqueceu sua Senha?</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={verificarLogin} style={estiloInicial.btnContainer}>
                 <LinearGradient
                  colors={["#321e7c", "#08063a"]}
                  style={estiloInicial.btnLogin}
                >
                  <Text style={estiloInicial.textoBtnLogin}>CONTINUAR COM LOGIN</Text>
                </LinearGradient>
              </TouchableOpacity>

              <View style={estiloInicial.conteudoCriarConta}>
                <Text style={estiloInicial.textoCriarConta}>Não possui uma Conta?</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('PaginaCadastro')} style={estiloInicial.btnCadastrar}>
                    <Text style={estiloInicial.textoBtnConta}>Criar uma Agora!</Text>
                  </TouchableOpacity>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </Animatable.View>
  );
}

export default PaginaLogin;