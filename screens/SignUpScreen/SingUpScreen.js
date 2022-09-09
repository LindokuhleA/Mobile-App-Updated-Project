import React, { useState } from 'react';
import { Formik } from 'formik';
import { ActivityIndicator, Alert } from 'react-native';
import { colors } from '../../components/colors';
const { primary } = colors;
import { Text } from 'react-native';


// custom components
import MainContainer from '../../components/Containers/MainContainer';
import KeyboardAvoidingContainer from '../../components/Containers/KeyboardAvoidingContainer';
import RegularText from '../../components/Texts/RegularText';
import StyledTextInput from '../../components/Inputs/StyledTextInput';
import MsgBox from '../../components/Texts/MsgBox';
import RegularButton from '../../components/Buttons/RegularButton';
import PressableText from '../../components/Texts/PressableText';


//From the validation components
import { 
    isValidEmail,
    isValidObject,
    updateError
} from '../../components/Validation/ValidationMethod';

import { useNavigation } from '@react-navigation/native';
import { authentication, db } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
//import MessageModel from '../../components/Models/MessageModel';

export default window.SignUpScreen = () => {

    const [ error, setError ] = useState('');

    const navigation = useNavigation();

    const [ message, setMessage ] = useState('');
    const [ isSuccessMessage, setIsSuccessMessage ] = useState(false);

    const [ userInfo, setUserInfo ] = useState({
        FullName: '',
        Email: '',
        Password: '',
        ConfirmPassword: '',
    })

    const { FullName, Email, Password, ConfirmPassword } = userInfo;

    const handleChange = ( value, fieldName ) => {
        setUserInfo({
            ...userInfo, [fieldName] : value
        })
    }

    const SingInOnPress = () => {
        navigation.navigate('SignIn')
    }

    const handleSignUp = () => {
        //setMessage(null);
            if(isValidForm()) {
            //call backend
            createUserWithEmailAndPassword( authentication, Email, Password)
                .then((response) => {
                    const user = response.user;
                    console.warn('Registered', user.email);

                    navigation.navigate('SignIn')

                    //setSubmitting(false);
            })
            .catch ((error) => {
                setMessage('Sign Up Unsuccessfully.');
                Alert.alert(error.message);
            })
        }
    }

    const isValidForm = () => {
        if(!isValidObject(userInfo)) {
            return updateError('All fields are required*', setError);
        }
        if(!FullName.trim() || FullName.length < 3){
            return updateError('Invalid username, it should have more than 3 of characters*', setError);
        }
        if(!isValidEmail(Email)){
            return updateError('Invalid email, e.g email.@gmail.com*', setError);
        }
        if(!Password.trim() || Password.length < 8) {
            return updateError('Short password, Must have atleast 8 of characters*', setError);
        }
        if (Password !== ConfirmPassword) {
            return updateError('Password do not match*', setError);
        }
        
        return true;
    }

    return(
        <MainContainer>
            <KeyboardAvoidingContainer>
                <RegularText style={{marginBottom: 25}}>Register your account</RegularText>

                <Formik>
                    <>
                        <StyledTextInput 
                            label="Full Name(s)" 
                            icon="account"
                            placeholder="Enter your full name(s)"
                            onChangeText={(value) => (handleChange(value, 'FullName'))}
                            //onBlur={handleBlur('fullName')}
                            value={FullName}
                            style={{marginBottom: 20}}
                        />

                        <StyledTextInput 
                            label="Email Address" 
                            icon="email-variant"
                            placeholder="email@gmail.com"
                            keyboardType="email-address"
                            onChangeText={(value) => (handleChange(value, 'Email'))}
                            //onBlur={handleBlur('email')}
                            value={Email}
                            style={{marginBottom: 20}}
                            autoCapitalize="none"
                        />

                        <StyledTextInput 
                            label="Password" 
                            icon="lock-open"
                            placeholder="* * * * * * * *"
                            onChangeText={(value) => (handleChange(value, 'Password'))}
                            //onBlur={handleBlur('password')}
                            value={Password}
                            isPassword={true}
                            style={{marginBottom: 20}}
                        />


                        <StyledTextInput 
                            label="Confirm Password" 
                            icon="lock-open"
                            placeholder="* * * * * * * *"
                            onChangeText={(value) => (handleChange(value, 'ConfirmPassword'))}
                            //onBlur={handleBlur('confirmPassword')}
                            value={ConfirmPassword}
                            isPassword={true}
                            style={{marginBottom: 20}}
                        />

                        {error ? <Text style={{ color: 'red',
                        fontSize: 18, textAlign: 'center'}}>{error}</Text> : null}

                        <MsgBox
                            style={{ marginBottom: 25}}
                            success={isSuccessMessage}
                        >
                            { message || ' '}
                        </MsgBox>

                        <RegularButton 
                            onPress={() => handleSignUp (Email, Password)}
                        >Sign Up</RegularButton>

                        <PressableText style={{ paddingVertical: 15 }} onPress={SingInOnPress}>Do Have An Account, Sign In</PressableText>
                    </>
                </Formik>

            </KeyboardAvoidingContainer>
        </MainContainer>
    )
}