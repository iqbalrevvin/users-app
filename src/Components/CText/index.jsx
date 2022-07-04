import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import styles from './CText.styles';

const CText = (props) => {
    const {children, color, bold, size} = props;
    return(
        <Text style={styles.textSection(color, bold, size)}>
            {children}
        </Text>
    );
};

CText.propTypes = {
    children: PropTypes.any,
    color: PropTypes.string,
    bold: PropTypes.bool,
    size: PropTypes.number,
};

export default CText;
