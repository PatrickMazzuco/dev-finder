import React from 'react';
import { WebView } from 'react-native-webview';

export default Profile = ({ navigation }) => {
  const githubUsername = navigation.getParam('githubUsername');
  return (
    <WebView
      style={{ flex: 1 }}
      source={{ uri: `https://github.com/${githubUsername}` }}
    />
  );
};
