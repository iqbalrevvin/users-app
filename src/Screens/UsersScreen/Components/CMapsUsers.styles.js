import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Utility/Colors';

const { width } = Dimensions.get('screen');

export default {
    container: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    markerImageSection: {
        width: 26,
        height: 28
    },
    userCardContainer: {
        position: 'absolute',
        backgroundColor: Colors.white,
        widht: '100%',
        paddingHorizontal: width-230,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center'
    },
    userAvatarContainer: {
        width: width-50,
        marginVertical: 15,
        alignItems: 'center'
    },
    infoAvatarImage: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    buttonContainer: {
        width: '100%',
        marginBottom: 25
    }
};
