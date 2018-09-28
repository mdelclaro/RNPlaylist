import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	KeyboardAvoidingView,
	Keyboard,
	TouchableWithoutFeedback
} from 'react-native';
// import { connect } from 'react-redux';

import { Formik } from 'formik';
import * as Yup from 'yup';

import ButtonWithBackground from './UI/ButtonWithBackground';
import InputValidation from './UI/InputValidation';
import HeadingText from './UI/HeadingText';
import MainText from './UI/MainText';

class LoginForm extends Component {
	render() {
		let headingText = null;

		//if (true) {
			headingText = (
				<MainText>
					<HeadingText>Home</HeadingText>
				</MainText>
			);
		//}
		return (
			<Formik
				initialValues={{ track: '', artist: '', album: '', genre: '' }}
				onSubmit={this.props.submitHandler}
				validationSchema={Yup.object().shape({
					track: Yup.string()
						.required('Insira o nome da música'),
					artist: Yup.string()
						.required('Insira o nome do artista'),
					album: Yup.string()
						.required('Insira o nome do álbum'),
					genre: Yup.string()
						.required('Insira o genêro')
				})}
				render={({
					values,
					handleSubmit,
					setFieldValue,
					errors,
					touched,
					setFieldTouched,
					isValid
				}) => (
						<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
							<KeyboardAvoidingView
								style={styles.container}
								behavior='padding'
							>
								{headingText}

								{/* Inputs Container */}

								<View style={styles.inputContainer}>
									<InputValidation
										placeholder='Título da Música'
										autoCapitalize='words'
										autoCorrect={false}
										value={values.track}
										onChange={setFieldValue}
										onTouch={setFieldTouched}
										name='track'
										error={touched.track && errors.track}
										style={styles.input}
									/>
									<InputValidation
										placeholder='Nome do Artista'
										autoCapitalize='words'
										autoCorrect={false}
										value={values.artist}
										onChange={setFieldValue}
										onTouch={setFieldTouched}
										name='artist'
										error={touched.artist && errors.artist}
										style={styles.input}
									/>
									<InputValidation
										placeholder='Nome do Álbum'
										autoCapitalize='words'
										autoCorrect={false}
										value={values.album}
										onChange={setFieldValue}
										onTouch={setFieldTouched}
										name='album'
										error={touched.album && errors.album}
										style={styles.input}
									/>
									<InputValidation
										placeholder='Gênero'
										autoCapitalize='words'
										autoCorrect={false}
										value={values.genre}
										onChange={setFieldValue}
										onTouch={setFieldTouched}
										name='genre'
										error={touched.genre && errors.genre}
										style={styles.input}
									/>
								</View>
								<ButtonWithBackground
									color='#29aaf4'
									onPress={handleSubmit}
									isDisabled={!isValid}
								>
									Submit
                </ButtonWithBackground>
							</KeyboardAvoidingView>
						</TouchableWithoutFeedback>
					)}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	backgroundImage: {
		width: '100%',
		flex: 1
	},
	input: {
		backgroundColor: '#eee',
		borderColor: '#bbb'
	},
	inputContainer: {
		// it controls the input width,
		// better approach. makes 
		// TextInputs reusable with 100% width
		width: '80%'
	},
	passwordContainer: {
		flexDirection: 'column',
		justifyContent: 'flex-start'
	},
	passwordWrapper: {
		width: '100%'
	}
});

// const mapStateToProps = state => {
//   return {
//     isLoading: state.ui.isLoading
//   };
// };

//export default connect(mapStateToProps)(LoginForm);
export default LoginForm;
