import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';

function Header(props) {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.header}>Control y Estado</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#1C3643',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 21,
    color: 'white',
  },
});

export default Header;
