import {View, StyleSheet} from 'react-native';
import React from 'react';
import SearchBar from './SearchBar';
import Leaderboard from './Leaderboard';

const MainComponent = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Leaderboard />
    </View>
  );
};

export default MainComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#eee',
  },
});
