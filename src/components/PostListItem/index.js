import { Text, View, Image, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const PostListItem = ({post}) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: post.image}}
                    style={styles.image}
                />
            </View>
        
            <View>
                <Text style={styles.title} numberOfLines={1}>{post.title}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.location}>
                    {post.province}{post.location}
                </Text>
                <Text style={styles.date}>
                   {post.date}
                </Text>
            </View>
            <View style={[styles.row,styles.iconsContainer]}>
                <Ionicons name="md-heart" size={32} color="black" style={styles.loveIcon}/>
                <Ionicons name="md-chatbubbles-outline" size={32} color="black" />
            </View>

        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        padding: 0,
        backgroundColor: 'rgba(185, 181, 185, 0.22)'
    },
    imageContainer: {
        padding: 0
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        padding: 20,
    },
    row: {
        flexDirection: 'row'
    },
    location: {
        paddingLeft: 20,
        flex: 1
    },
    date: {
        paddingRight: 20
    },
    iconsContainer:{
        padding: 20
    },
    loveIcon:{
        flex: 1
    }
})

export default PostListItem;