import React, { useState, useEffect } from 'react';
import { Text, TextInput, TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';
import AppBar from 'components/appbar/AppBar';
import styles from './styles';
import colors from 'assets/colors';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';



function SettingsScreen(props) {
    const [displayName, setDisplayName] = useState('');
    const [isAdmin, setIsAdmin] = useState('');
    const [order, setOrder] = useState({});
    const user = auth().currentUser;

    // Lifecycle hook to run on componentDidMount/componentDidUpdate/componentWillUnmount
    // https://reactjs.org/docs/hooks-effect.html
    useEffect(() => {
        setupCurrentUser(user);
    }, [])


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
                .then(() => { console.log('Updated Display Name') })
                .catch(() => { console.log('Unable to Update Display Name') });
        } else {
            console.log('No change to Display Name so nothing was updated');
        }
    };

    const openDrawer = () => {
        props.navigation.openDrawer();
    };

    // Don't render the page until data arrives
    if (!user || !order) {
        return <div />
    }

    return (
        <View style={styles.container}>
            <AppBar onMenuPress={openDrawer} />
            <View style={styles.inputContainer}>
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
                <TouchableHighlight style={styles.submitButton} onPress={submitForm}>
                    <Text style={styles.sumbitText}>Submit</Text>
                </TouchableHighlight>

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
            </View>
        </View>
    );
}

SettingsScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default SettingsScreen;
