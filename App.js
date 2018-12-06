import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  state = {
    placeName: ''
  };

  placeNameCHangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
        value={this.state.placeName}
        onChangeText={this.placeNameCHangedHandler}
        style={{width: 300, borderColor: "black", borderWidth: 1}}
        placeholder="an awesome place" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
