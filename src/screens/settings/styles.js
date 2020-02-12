import { StyleSheet } from 'react-native';
import colors from 'assets/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightBlue,
    },
    inputContainer: {
        padding: 10
    },
    inputRow: {
        flexDirection: 'row',
    },
    textStyle: {
        flex: 1,
        textAlign: 'center',
        color: 'white',
        fontSize: 26,
    },
    inputStyle: {
        flex: 3,
        borderColor: 'black',
        borderRadius: 4,
        backgroundColor: 'white',
        marginRight: 40
    },
    submitButton: {
        width: '10%',
        backgroundColor: 'white',
        borderColor: colors.black,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10
    },
    sumbitText: {
        textAlign: 'center'
    }
});

export default styles;
