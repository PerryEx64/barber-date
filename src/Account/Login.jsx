import { Button, Input, Spinner, Text } from '@ui-kitten/components/ui';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Dimensions,
  Image,
  View
} from 'react-native';
import tailwind from 'twrnc';
import useGetDataUser from '../../hooks/useGetDataUser';
import { auth, signInWithGoogle } from '../../services/CloudConection';
import KeyBoardAvoidContainer from '../components/KeyboardAvoidContainer';
import CircleTop from './components/CircleTop';
import FooterLogin from './components/FooterLogin';

const GoogleIcon = (props) => (
  <Image source={require('../../assets/buttons/google-icon.png')} {...props} />
);

const Login = () => {
  const [loading, setLoading] = React.useState(false);
  const { getUser } = useGetDataUser();
  const widthScreen = Dimensions.get('window');
  const { control, handleSubmit } = useForm({
    defaultValues: {
      usuario: 'test@test.com',
      password: '12345678'
    }
  });

  const onSubmit = (data) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, data.usuario, data.password)
      .then((userCredential) => {
        getUser(userCredential);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.log('not found', error.message);

        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  };

  const onGoogleSubmit = () => {
    setLoading(true);
    signInWithGoogle(auth)
      .then((userCredential) => {
        getUser(userCredential);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.log('not found', error.message);

        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  };

  return (
    <KeyBoardAvoidContainer>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <CircleTop />
        <View style={{ marginHorizontal: 25 }}>
          <Text category='h5' style={{ marginBottom: 15 }}>
            {'Iniciar Sesion'}
          </Text>

          <Controller
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                label={'Usuario'}
                style={{ marginBottom: 10 }}
                placeholder='nombre de usuario'
                value={value}
                onChangeText={onChange}
                size='medium'
              />
            )}
            name='usuario'
          />

          <Controller
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                label={'Usuario'}
                disabled={loading}
                placeholder='nombre de usuario'
                value={value}
                onChangeText={onChange}
                secureTextEntry={true}
                size='medium'
              />
            )}
            name='password'
          />

          {loading == true ? (
            <View style={tailwind`self-center mt-5`}>
              <Spinner status='warning' />
            </View>
          ) : (
            <View>
              <Button
                disabled={loading}
                onPress={handleSubmit(onSubmit)}
                style={tailwind`mt-4`}
              >
                Iniciar Sesión
              </Button>
              <Button
                disabled={loading}
                onPress={onGoogleSubmit}
                style={tailwind`mt-4`}
                accessoryLeft={GoogleIcon}
              >
                Iniciar con Google
              </Button>
            </View>
          )}
        </View>

        <FooterLogin />

        <View style={tailwind`ml-5`}>
          <Image
            source={require('../../assets/circulo-login-down.png')}
            style={tailwind`${
              widthScreen.width > 800 ? 'w-86 h-86' : 'h-56 w-56'
            }`}
          />
        </View>
      </View>
    </KeyBoardAvoidContainer>
  );

};

export default Login;
