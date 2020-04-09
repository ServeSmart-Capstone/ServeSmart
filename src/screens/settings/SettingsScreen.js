import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from 'store/actions/userActions';
import { Text, TextInput, TouchableHighlight, View, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import AppBar from 'components/appbar/AppBar';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { emailValidator } from '../../helper/validators';
import { loginMapper } from '../../helper/loginMapper';

function SettingsScreen(props) {
    const [displayName, setDisplayName] = useState('');
    const [isAdmin, setIsAdmin] = useState('');
    const [createAccountEmail, setCreateAccountEmail] = useState('');
    const [createAccountPassword, setCreateAccountPassword] = useState('');
    const [createAccountName, setCreateAccountName] = useState('');
    const [modalText, setModalText] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [order, setOrder] = useState({});
    const user = auth().currentUser;

    // Lifecycle hook to run on componentDidMount/componentDidUpdate/componentWillUnmount
    // https://reactjs.org/docs/hooks-effect.html
    useEffect(() => {
        setupCurrentUser(user);
    }, [])

    const updateUserObject = user => {
        props.actions.loadUserData(user);
    };

    // Initialize User values from Firebase
    const setupCurrentUser = (_user) => {
        if (_user.displayName != '') {
            setDisplayName(_user.displayName);
        }

        // Get user object from Firestore based on authenticated user
        firestore().collection('users')
            .where('authid', '==', _user.uid)
            .get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.data().admin)
                    setIsAdmin(doc.data().admin.toString());
                });
            }).catch((err) => {
                console.log(`Error getting user from DB ${err}`);
            });

        // Get information about A specific Order
        firestore().collection('orders')
            .where('authid', '==', _user.uid)
            .get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.data());
                    setOrder(doc.data());
                })
            }).catch((err) => {
                console.log(`Error getting order from DB ${err}`);
            })
    }

    // Update Values back to Firebase if changed
    const submitForm = () => {
        if (user.displayName !== displayName) {
            user.updateProfile({ displayName })
                .then(() => { 
                    console.log('Updated Display Name');
                    let updatedUser = {
                        id: user.uid,
                        name: displayName,
                        email: user.email
                    }
                    updateUserObject(updatedUser);
                })
                .catch(() => { console.log('Unable to Update Display Name') });
        } else {
            console.log('No change to Display Name so nothing was updated');
        }
    };

    const createAccount = () => {
        if (!createAccountEmail || !createAccountPassword || !createAccountName) {
            console.log('Need to fill out all fields!');
            updateWarningModal('Need to fill out all fields!');
            return;
        }

        if (createAccountPassword.length < 6) {
            console.log('Password needs to be at least 6 numbers');
            updateWarningModal('Password needs to be at least 6 numbers');
            return;
        }

        if (!emailValidator(createAccountEmail)) {
            console.log('Email is not valid, try again');
            updateWarningModal('Email is not valid, try again');
            return;
        }

        auth().createUserWithEmailAndPassword(createAccountEmail, createAccountPassword).then((createdUser) => {
            console.log(createdUser)
            firestore().collection('users').doc(createAccountPassword)
                .set({
                    admin: false,
                    authid: createdUser.user.uid,
                    email: createAccountEmail,
                    name: createAccountName
                }).then(() => {
                    console.log('Success, created user');
                    setCreateAccountEmail('');
                    setCreateAccountPassword('');
                    setCreateAccountName('');
                });
        }).catch((err) => {
            console.log(err);
        })
    }

    const updateWarningModal = (text) => {
        setModalText(text);
        setModalVisible(true);
    }

    const openDrawer = () => {
        props.navigation.openDrawer();
    };

    // Don't render the page until data arrives
    if (!user || !order) {
        return <div />
    }

    return (
        <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset={-500} behavior="padding">
            <AppBar onMenuPress={openDrawer} />
            <ScrollView style={styles.inputContainer}>
                {/* {Each row contains text and a text input} */}
                <View style={styles.inputRow}>
                    <Text style={styles.textStyle}>Display Name</Text>
                    <TextInput style={styles.inputStyle}
                        placeholder={displayName ? displayName : "Enter display Name"}
                        onChangeText={(text) => setDisplayName(text)}
                        value={displayName}
                    ></TextInput>
                </View>
                {/* Admin Information is read only and only for testing */}
                <View style={styles.inputRow}>
                    <Text style={styles.textStyle}>Is Admin?</Text>
                    <TextInput style={styles.inputStyle}
                        placeholder={isAdmin ? isAdmin : "You're probably not an admin!"}
                        value={isAdmin}
                        editable={false}
                        autoCapitalize={'characters'}
                    ></TextInput>
                </View>
                <View style={styles.submitRow}>
                    <TouchableHighlight style={styles.submitButton} onPress={submitForm}>
                        <Text style={styles.sumbitText}>Submit</Text>
                    </TouchableHighlight>
                </View>

                {isAdmin ?
                    <View>
                        <View style={styles.adminHeader}>
                            <Text style={styles.textStyle}>
                                Admin Panel
                            </Text>
                        </View>
                        <View style={styles.inputRow}>
                            <Text style={styles.textStyle}>Email</Text>
                            <TextInput style={styles.inputStyle}
                                placeholder={'Enter Email'}
                                value={createAccountEmail}
                                onChangeText={(text) => setCreateAccountEmail(text)}
                            ></TextInput>
                        </View>
                        <View style={styles.inputRow}>
                            <Text style={styles.textStyle}>Password</Text>
                            <TextInput style={styles.inputStyle}
                                placeholder={'Enter Password (6 digits or more)'}
                                secureTextEntry={true}
                                onChangeText={(text) => setCreateAccountPassword(text)}
                                value={createAccountPassword}
                            ></TextInput>
                        </View>
                        <View style={styles.inputRow}>
                            <Text style={styles.textStyle}>Name</Text>
                            <TextInput style={styles.inputStyle}
                                placeholder={'Enter your name'}
                                onChangeText={(text) => setCreateAccountName(text)}
                                value={createAccountName}
                            ></TextInput>
                        </View>
                        <View style={styles.submitRow}>
                            <TouchableHighlight style={styles.submitButton} onPress={createAccount}>
                                <Text style={styles.sumbitText}>Create User</Text>
                            </TouchableHighlight>
                        </View>
                        {/* <View style={{ flex: 1 }} /> */}
                    </View>
                    : null}

                <View style={{ marginTop: 22 }}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <View style={styles.warningModalStyle}>
                            <View>
                                <Text style={styles.sumbitText}>{modalText}</Text>

                                <TouchableHighlight
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}>
                                    <Text style={styles.sumbitText}>Hide Modal</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Modal>
                </View>



                {/* Grab some metadata about an order from Firestore */}
                {/* <View style={styles.inputRow}>
                    <Text style={styles.textStyle}># of Guests</Text>
                    <Text style={styles.textStyle}>{order.guests}</Text>
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.textStyle}>Subtotal</Text>
                    <Text style={styles.textStyle}>${order.subtotal}</Text>
                </View> */}

                {/* Loop Through information in the order and display it on the screen from Firestore */}

                {/* {order.order.map((prop, key) => {
                    return (
                        <View style={styles.inputRow} key={key}>
                            <Text style={styles.textStyle}>Item: {prop.item}</Text>
                            <Text style={styles.textStyle}>Price: ${prop.price}</Text>
                            <Text style={styles.textStyle}>Seat: {prop.seat}</Text>
                        </View>
                    );
                })} */}
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

SettingsScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    actions: PropTypes.shape({
        loadUserData: PropTypes.func.isRequired,
    }).isRequired,
};

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch),
    };
}

export default connect(null, mapDispatchToProps)(SettingsScreen);
