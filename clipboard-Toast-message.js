import { Clipboard, ToastAndroid } from 'react-native';
// import Toast from 'react-native-simple-toast';

const copyToClipboard = ({ message }) => {
        Clipboard.setString(message);
        console.log(message);
        ToastAndroid.showWithGravity(
            "Copied",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM
        )
        // Toast.show('Copied', Toast.SHORT);
    };
