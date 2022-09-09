import React, { useState } from 'react';
import { Formik } from 'formik';
import { ActivityIndicator, Alert, Text } from 'react-native';
import { colors } from '../../components/colors';
const { primary } = colors;


// custom components
import MainContainer from '../../components/Containers/MainContainer';
import KeyboardAvoidingContainer from '../../components/Containers/KeyboardAvoidingContainer';
import RegularText from '../../components/Texts/RegularText';
import StyledTextInput from '../../components/Inputs/StyledTextInput';
import MsgBox from '../../components/Texts/MsgBox';
import RegularButton from '../../components/Buttons/RegularButton';
import PressableText from '../../components/Texts/PressableText';
import RowContainer from '../../components/Containers/RowContainer';


//firebase importation
import { authentication, db } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

//from the validation component
import { 
    isValidEmail,
    isValidObject,
    updateError
 } from '../../components/Validation/ValidationMethod';

export default window.SignUpScreen = ({navigation}) => {

    const [ message, setMessage ] = useState('');
    const [ isSuccessMessage, setIsSuccessMessage ] = useState(false);

    const [ userInfor, setUserInfor ] = useState({
        Email: '',
        Password: ''
    })

    const { Email, Password } = userInfor;

    const [ error, setError ] = useState('')

    const handleOnChange = (value, fieldName ) => {
        setUserInfor({...userInfor, [fieldName]: value})
    }

    const isValidForm = () => {
        if(!isValidObject(userInfor)) {
            return updateError('All fields are required*', setError)
        }

        if (!isValidEmail(Email)) {
            return updateError('Invalid email*', setError)
        }

        if (!Password.trim() || Password.length < 8) {
            return updateError('Invalid password*', setError)
        }
        return true;
    }

    const handleLogIn = () => {
        if(isValidForm()) {
        //calling backend
        signInWithEmailAndPassword(authentication, Email, Password)
            .then((response) => {
                const user = response.user;
                console.warn('Signed In', user.email)
                navigation.navigate('LindoMenuScreen')
            })
            .catch ((error) => {
                setMessage('Sign In Successfully.');
                Alert.alert (error.message);
            })     
        }
    }

    const onSignUpPress = () => {
        navigation.navigate('SignUp')
    }

    return(
        <MainContainer>
            <KeyboardAvoidingContainer>
                <RegularText style={{marginBottom: 25}}>Enter your account credentials</RegularText>

                <Formik>
                    <>
                    <StyledTextInput 
                        label="Email Address" 
                        icon="email-variant"
                        placeholder="email@gmail.com"
                        keyboardType="email-address"
                        onChangeText={(value) => (handleOnChange(value, 'Email'))}
                        //onBlur={handleBlur('email')}
                        value={Email}
                        style={{marginBottom: 25}}
                        autoCapitalize="none"
                    />

                    <StyledTextInput 
                        label="Password" 
                        icon="lock-open"
                        placeholder="* * * * * * * *"
                        onChangeText={(value) => (handleOnChange(value, 'Password'))}
                        //onBlur={handleBlur('password')}
                        value={Password}
                        isPassword={true}
                        style={{marginBottom: 25}}
                    />

                    {error ? <Text style={{ color: 'red',
                    fontSize: 18, textAlign: 'center'}}>{error}</Text> : null}

                    <MsgBox
                        style={{ marginBottom: 25}}
                        success={isSuccessMessage}
                    >
                        { message || ' '}
                    </MsgBox>

                            {/* {!isSubmitting && <RegularButton onPress={handleSubmit}>Login</RegularButton>}
                            {isSubmitting && (
                                <RegularButton disabled={true}>
                                    <ActivityIndicator size='small' color={primary}/>
                                </RegularButton>
                            )} */}

                    <RegularButton
                        onPress={() => handleLogIn (Email, Password)}
                    >LogIn</RegularButton>

                    <RowContainer>
                        <PressableText onPress={onSignUpPress}>Create New Account Here</PressableText>
                        <PressableText onPress={() => {}}>Forgot Password</PressableText>
                    </RowContainer>
                    </>
                </Formik>
            </KeyboardAvoidingContainer>
        </MainContainer>
    )
}