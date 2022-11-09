import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import PostListItem from './src/components/PostListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <PostListItem></PostListItem>
      </ScrollView>
      
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
});
