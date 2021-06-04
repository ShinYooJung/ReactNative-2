import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, FlatList, Image, StyleSheet, Text, ScrollView, View } from 'react-native';

export default class App extends React.Component {
  componentDidMount() {
        fetch('https://raw.githubusercontent.com/example0312/weather-crawler/e3168f2b4e316691f8ab385f738783976eef7f0d/availableCityNames')
        .then(response => response.json())
        .then(console.log);
      }
  renderItem({ name }) {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{name}</Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList style={styles.container}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => this.renderItem(item)}
          data={this.fruits}
        />

        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'orange',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
