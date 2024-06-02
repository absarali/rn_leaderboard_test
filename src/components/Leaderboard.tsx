import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, Text, View, StyleSheet, Alert} from 'react-native';
import {RootState} from '../redux/reducers';
import {SET_ERROR} from '../redux/actions';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.header_text}>Name</Text>
      <Text style={styles.header_text}>Rank</Text>
      <Text style={styles.header_text}>Bananas</Text>
    </View>
  );
};

const NoData = () => {
  return <Text style={styles.no_data}>No data to show!</Text>;
};

const Leaderboard = () => {
  const {leaderboard, error, searchedUser} = useSelector(
    (state: RootState) => state.leaderboard,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      Alert.alert(
        'Error',
        error,
        [
          {
            text: 'OK',
            onPress: () => {
              dispatch({
                type: SET_ERROR,
                payload: null,
              });
            },
          },
        ],
        {cancelable: false},
      );
    }
  }, [error]);

  return leaderboard?.length === 0 ? (
    NoData()
  ) : (
    <FlatList
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={Header}
      data={leaderboard}
      keyExtractor={item => item.uid}
      renderItem={({item, index}) => (
        <View
          style={[
            styles.item,
            item.name === searchedUser?.name && styles.highlight,
          ]}>
          <Text style={styles.item_text}>{item.name}</Text>
          <Text style={styles.item_text}>{item.rank}</Text>
          <Text style={styles.item_text}>{item.bananas} bananas</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  no_data: {
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 13,
    padding: 4,
    color: '#000',
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#0e8dff',
  },
  header_text: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16,
    padding: 4,
    color: '#fff',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
    backgroundColor: '#bcbcbc',
    paddingVertical: 8,
    fontWeight: '300',
  },
  item_text: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 13,
    padding: 4,
    color: '#000',
  },
  highlight: {backgroundColor: '#6aa84f'},
});

export default Leaderboard;
