export default {
    textSection: (color, bold, size) => ({
        color: color || 'black',
        fontWeight: bold ? 'bold': 'normal',
        fontSize: size || 14
    })
};
