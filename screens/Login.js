import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from 'react-native-paper';

export default function LoginScreen() {
  const navigation = useNavigation();

  const [emailFilled, setEmailFilled] = useState(false);
  const [passwordFilled, setPasswordFilled] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      // email or password is not filled, show error message
      setEmailFilled(true);
      setPasswordFilled(true);
      return;
    }
    
    // email and password are filled, handle login logic here
    // Check if the email and password are correct
    if (email === 'min@admin.com' && password === 'abc123') {
      // Navigate to the Dashboard screen
      navigation.navigate('Dashboard');
    } else {
      // Show an error message for an incorrect email or password
      alert('Incorrect email or password');
    }
  };



  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
    // handle forgot password logic
  };

  const handleSignUp = () => {
    navigation.navigate('Signup');
    //handle signup logic
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>MSRN</Text>
      <TextInput
        style={[styles.input, emailFilled && !email && styles.inputError]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        onBlur={() => setEmailFilled(true)}
      />

      <TextInput
        style={[styles.input, passwordFilled && !password && styles.inputError]}
        placeholder="Password"
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={setPassword}
        onBlur={() => setPasswordFilled(true)}
      />
      {emailFilled && !email && (
      <Text style={styles.errorText}>Email is required</Text>
      )}
      {passwordFilled && !password && (
        <Text style={styles.errorText}>Password is required</Text>
      )}
      <View style={styles.row}>
        <TouchableOpacity onPress={handleRememberMe}>
          {rememberMe ? (
            <Text style={styles.rememberMeText}>✓ Remember me</Text>
          ) : (
            <Text style={styles.rememberMeText}>Remember me</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUpButton}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 12,
    width: '80%',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 4,
    padding: 12,
    width: '80%',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 16,
  },
  inputError: {
    borderBottomColor: "red",
    borderBottomWidth: 2,
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
  rememberMeText: {
    color: '#007AFF',
  },
  forgotPasswordText: {
    color: '#007AFF',
  },
  signUpContainer: {
    flexDirection: 'row',
  },
  signUpText: {
    marginRight: 4,
  },
  signUpButton: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});
