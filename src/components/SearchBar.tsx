import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {searchUser} from '../redux/actions';

const SearchBar = () => {
  const [username, setUsername] = useState<string>('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchUser(username));
  };

  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.button_text}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: '#bcbcbc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
    flex: 1,
  },
  button: {
    backgroundColor: '#0e8dff',
    height: 40,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_text: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default SearchBar;
