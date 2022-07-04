import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import CText from '../CText';
import styles from './CButtonRegular.styles';
import PropTypes from 'prop-types';

const CButtonRegular = (props) => {
    const { onPress, title, height, color, textColor } = props;
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.buttonContainer(height, color)}>
                <CText color={textColor || 'white'} bold>
                    {title}
                </CText>
            </View>
        </TouchableOpacity>
    );
};

CButtonRegular.propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string,
    height: PropTypes.number,
    color: PropTypes.string,
    textColor: PropTypes.string,
};

export default CButtonRegular;
