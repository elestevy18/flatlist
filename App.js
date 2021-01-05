import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

const friendsArray = [
  {name : "Krunal", key:1},
  {name : "Sb",key:2},
  {name : "kevin",key:3},
  {name : "zyou",key:4},
  {name : "eli",key:5},
  {name : "aida",key:6},
  {name : "sk",key:7},
  {name : "lokesh",key:8},
  {name : "alok c",key:9}
];

 const App = () => {
  return (
   <SafeAreaView>
      <FlatList 
              data={friendsArray}
              renderItem = { ({item}) => {
                  return <View style={{
          
                    flex: 1,
                    flexDirection: "row"
                    }}>
                    
                    <Image
        source={{uri: "https://i.picsum.photos/id/912/200/300.jpg?hmac=wRzqCXn4iQFYYTjMpB_LljooIBYELbMYz8kUuWS-toc"}}
        style={{width: 50, height: 50, borderRadius: 10}}
      />
      <View>
                   <Text styles={styles.title}
                    style={{ fontSize: 18, fontStyle: 'italic' }}> {item.name}
                    </Text>
                    <Text styles={styles.title}
                    style={{ fontSize: 12 }}> {item.name}  Lorem Ipsum characteristics of this rows contents.
                    </Text>
                    </View>
                    
                    </View>;
          }}
        />
        </SafeAreaView>
    );
// Attempt from what I found on Youtube
    // <View style={styles.container}>
    //   {/* <FlatList 
    //   keyExtractor={(item) => item.id}
    //   data = {people}
    //   renderItem={({ item }) => (
    //     <Text style={styles.item}>{item.name}</Text>
    //   )}
    //   /> */}
    //   <StatusBar style="auto" />
    // </View>
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    fontSize: 18,
    justifyContent: 'center',
  },
});
