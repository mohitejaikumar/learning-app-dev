/* eslint-disable prettier/prettier */
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// Yup input validation
const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Should be max of 16 characters')
    .required('Length is required'),
});
// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

export default function PasswordGenerator() {
  const [isPasswordGenerated, setisPasswordGenerated] = useState(false);
  const [password, setPassword] = useState('');
  const [isLowerCase, setisLowerCase] = useState(true);
  const [isUppercase, setisUppercase] = useState(false);
  const [isNumber, setisNumber] = useState(false);
  const [isSpecialCharacter, setisSpecialCharacter] = useState(false);

  const upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
  const specialChar = '!@#$%^&*()_+';
  const numbers = '0123456789';

  const generatePassword = (passwordLength: number) => {
    let allowedChars = '';
    if (isLowerCase) {
      allowedChars += lowerCaseChar;
    }
    if (isUppercase) {
      allowedChars += upperCaseChar;
    }
    if (isNumber) {
      allowedChars += numbers;
    }
    if (isSpecialCharacter) {
      allowedChars += specialChar;
    }
    const passwordResult = createPassword(allowedChars, passwordLength);
    // Trigger haptic feedback
    ReactNativeHapticFeedback.trigger('soft', options);
    setPassword(passwordResult);
    setisPasswordGenerated(true);
  };
  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  };
  const resetPasswordState = () => {
    setPassword('');
    setisLowerCase(true);
    setisNumber(false);
    setisPasswordGenerated(false);
    setisSpecialCharacter(false);
    setisUppercase(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      <SafeAreaView>
        <View>
          <Text style={styles.headingText}>PasswordGenerator</Text>
          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              generatePassword(+values.passwordLength);
            }}>
            {({
              values,
              isValid,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
            }) => (
              <>
                {/* Password Length Input Area */}
                <View style={styles.inputWrapper}>
                  <View style={styles.inputHeader}>
                    <Text>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.passwordLengthError}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>
                  <TextInput
                    style={styles.inputNumber}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    onBlur={handleBlur('passwordLength')}
                    placeholder="Ex. 8"
                    keyboardType="numeric"
                  />
                </View>
                {/* LowerCase Checkbox */}
                <View style={styles.checkbox}>
                  <Text>Include LowerCase</Text>
                  <BouncyCheckbox
                    isChecked={isLowerCase}
                    onPress={() => setisLowerCase(!isLowerCase)}
                    fillColor="#29AB87"
                  />
                </View>
                {/* UpperCase Checkbox */}
                <View style={styles.checkbox}>
                  <Text>Include UpperCase</Text>
                  <BouncyCheckbox
                    isChecked={isUppercase}
                    onPress={() => setisUppercase(!isUppercase)}
                    fillColor="#29AB87"
                  />
                </View>
                {/* Numeric Checkbox */}
                <View style={styles.checkbox}>
                  <Text>Include Numbers</Text>
                  <BouncyCheckbox
                    isChecked={isNumber}
                    onPress={() => setisNumber(!isNumber)}
                    fillColor="#29AB87"
                  />
                </View>
                {/* SpecialChar Checkbox */}
                <View style={styles.checkbox}>
                  <Text>Include Special Characters</Text>
                  <BouncyCheckbox
                    isChecked={isSpecialCharacter}
                    onPress={() => setisSpecialCharacter(!isSpecialCharacter)}
                    fillColor="#29AB87"
                  />
                </View>
                <View style={styles.actionBtn}>
                  <TouchableOpacity
                    disabled={!isValid}
                    //@ts-ignore
                    onPress={handleSubmit}
                    style={styles.generateBtn}>
                    <Text>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      handleReset();
                      resetPasswordState();
                    }}
                    style={styles.resetBtn}>
                    <Text>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {isPasswordGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Long Press to copy</Text>
            <Text selectable={true} style={styles.generatedPassword}>
              {password}
            </Text>
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  formContainer: {
    paddingHorizontal: 10,
  },
  passwordLengthError: {
    color: 'red',
  },
  inputNumber: {
    backgroundColor: '#7B8788',
    flexBasis: '20%',
    borderRadius: 10,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    padding: 10,
  },
  inputHeader: {
    flexBasis: '50%',
  },
  checkbox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: 10,
    padding: 5,
  },
  actionBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    marginTop: 10,
  },
  generateBtn: {
    backgroundColor: '#1BCA9B',
    borderRadius: 10,
    padding: 10,
  },
  resetBtn: {
    backgroundColor: '#74B9FF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  card: {
    backgroundColor: '#67E6DC',
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  cardElevated: {
    elevation: 10,
    shadowColor: '#192A56',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.8,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
    backgroundColor: '#75DA8B',
    padding: 10,
  },
});
