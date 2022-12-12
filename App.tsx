import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import PostListItem from './src/components/PostListItem';
import Separator from './src/components/Separator';
import axios from 'axios';



export default function App() {

  const API_URL = 'http://192.168.18.132:4000/api/posts/latestPosts';
  const [data, setPostsData] = useState<any[]>([]);
  const [loading,setLoading] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(()=>{

  },[]);

  const getPostsFromApi = async () => {

    if(loading) return;

    setLoading(true);
   
    const response = await axios.get(API_URL+'?page='+page+'&size=2');
    setPostsData([...data,...response.data.content]);
    setPage(page+1);
    setLoading(false);
  };



  useEffect(() => {
    getPostsFromApi();
  }, []);

  //const [posts, setPosts] = useState(postList);

  return (
    <View style={styles.container}>
      <FlatList data={data} keyExtractor={(item) => item.id}
        onEndReached={getPostsFromApi}
        onEndReachedThreshold={0.1}
        contentContainerStyle={{ padding: 0 }}
        ItemSeparatorComponent={() => (
          <Separator></Separator>
        )}
        renderItem={({ item }) => {
          return (
            <View>
              <PostListItem post={item}/>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemList: {
    marginTop: 50
  }
});
