import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './CTextInput.styles';

const CTextInput = (props) => {
    const { value, onChangeText, placeholder, keyboardType } = props;
    return (
        <TextInput
          style={styles.inputSection}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
        />

    );
};

CTextInput.propTypes = {
    value: PropTypes.string,
    onChangeText: PropTypes.func,
    placeholder: PropTypes.string,
    keyboardType: PropTypes.string,
};

export default CTextInput;
