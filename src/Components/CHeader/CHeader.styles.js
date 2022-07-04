import Colors from '../../Utility/Colors';

export default {
    container: {
        backgroundColor: 'white',
        borderWidth: 0.2,
        borderColor: Colors.grey400,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 5,
    },
    headerContainer: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconAddSection: {
        width: 25,
        height: 25
    }
};
