import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,SafeAreaView , FlatList} from 'react-native';
import music_data from './music-data.json'
import SongCard from './src/SongCards'
import SearchBar from './src/SearchBar'



export default function App() {
  const [list , setList] = useState(music_data)
  const renderSong = ({item}) => <SongCard song = {item} />
  const renderSeperator = () => <View style = {styles.seperator} />
  const handleSearch = text => {
    const filteredList = music_data.filter(song =>{
       const searchedText = text.toLowerCase();
        const currenTitle = song.title.toLowerCase();

        return currenTitle.indexOf(searchedText) > -1;
      }
      );
      setList(filteredList);
  };

  return (
    <SafeAreaView style = {styles.container}>
    <View style={styles.container}>
      <SearchBar onSearch = {handleSearch} />
      <FlatList
       data={list} renderItem={renderSong} 
       keyExtractor={item => item.id}
       ItemSeparatorComponent={renderSeperator}
       />
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 12
  },
  seperator : {
    borderWidth : 1,
    borderColor : '#e0e0e0'
  }
});
