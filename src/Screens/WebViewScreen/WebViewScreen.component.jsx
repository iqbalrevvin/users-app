import React from 'react';
import { View } from 'react-native';
import styles from './WebViewScreen.style';
import { WebView } from 'react-native-webview';

const WebViewScreenComponent = () => (
    <WebView style={styles.content}
      source={{ uri: 'https://suitmedia.com/' }}
    />  
);

export default WebViewScreenComponent;
