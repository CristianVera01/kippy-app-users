import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, KeyboardAvoidingView, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { router } from 'expo-router';
import CustomTextInput from '@/presentation/components/shared/CustomTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useLoginMutation } from '@/presentation/hooks/auth/useLoginMutation';

const loginSchema = yup.object().shape({
  email: yup.string().email('Ingresa un correo electrónico válido').required('Este campo es requerido'),
  password: yup.string().required('Este campo es requerido'),
});

const LoginPage = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const { loginMutation } = useLoginMutation();

  return (
    <KeyboardAvoidingView
      behavior='height'
      className='h-screen'
    >
      <ScrollView>
        <View
          className='flex justify-center bg-white h-screen px-5'
        >
          <Text className='text-4xl font-bold text-primary'>¡Bienvenido!</Text>
          <Text className='text-slate-500 text-lg mt-2'>Ingresa tus datos para iniciar sesión en Kippy</Text>
          <Formik
            validationSchema={loginSchema}
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={(values, { resetForm }) => {
              loginMutation.mutate(values);
              resetForm();
            }}
          >
            {
              ({ values, handleChange, handleSubmit, handleBlur, errors }) => (
                <View className='mt-10 flex flex-col gap-4 w-full'>
                  <CustomTextInput
                    label='Correo electrónico'
                    placeholder='Ej: user@example.com'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    textContentType='emailAddress'
                    required
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    error={errors.email}
                    startContent={
                      <IonIcons name='mail-outline' size={24} color='rgba(0, 0, 0, 0.5)' />
                    }
                  />
                  <CustomTextInput
                    label='Contraseña'
                    placeholder='Ingresa tu contraseña...'
                    autoCapitalize='none'
                    autoCorrect={false}
                    required
                    secureTextEntry={!passwordVisible}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    error={errors.password}
                    startContent={
                      <IonIcons name='lock-closed-outline' size={24} color='rgba(0, 0, 0, 0.5)' />
                    }
                    endContent={
                      <Pressable
                        onPress={() => setPasswordVisible(!passwordVisible)}
                      >
                        {
                          passwordVisible ?
                            <IonIcons name='eye-off-outline' size={24} color='rgba(0, 0, 0, 0.5)' /> :
                            <IonIcons name='eye-outline' size={24} color='rgba(0, 0, 0, 0.5)' />
                        }
                      </Pressable>
                    }
                  />
                  <View
                    className='flex justify-center items-end'
                  >
                    <Pressable
                      onPress={() => router.push('/auth/forgot-password')}
                    >
                      <Text className='text-slate-500 font-bold'>¿Olvidaste tu contraseña?</Text>
                    </Pressable>
                  </View>
                  <TouchableOpacity
                    className='bg-primary rounded-md w-full h-[50px] flex items-center justify-center mt-10'
                    activeOpacity={0.9}
                    onPress={() => handleSubmit()}
                  >
                    <Text className='text-white text-md text-center font-bold'>Iniciar sesión</Text>
                  </TouchableOpacity>
                </View>
              )
            }
          </Formik>
          <View
            className='w-full mt-10 flex items-center justify-center'
          >
            <Pressable
              onPress={() => router.push('/auth/signup')}
            >
              <Text className='text-slate-500 font-bold'>¿Aún no tienes cuenta? Regístrate aquí</Text>
            </Pressable>
          </View>
          <StatusBar style="dark" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default LoginPage