import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return pug`
    View(style=styles.container)
      Text(style=styles.text) Welcome 2 to Expo + Next.js 👋
  `;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
