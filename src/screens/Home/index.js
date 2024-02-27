import {Image, Text, View, StyleSheet, TouchableOpacity, FlatList, ScrollView } from "react-native";
import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";
import { MOVIESWATCHING } from "../../utils/moviesWatching";
import MovieTheWhell from "../../assets/movies/the_wheel_of_time.png";
import { MoviesCard } from "../../components/MoviesCards";
import { MOVIESCRIME } from "../../utils/moviesCrimes";
import { MOVIESWATCH } from "../../utils/moviesWatch";
import PlayVideo from "../../assets/movies/imgplay.png";

export const Home = () => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image styles={styles.PrimeVideoLogoImg} source={PrimeVideoLogo}/>
                <Image style={styles.AmazonLogoImg} source={AmazonLogo}/>
            </View>

            <View style={styles.category}>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Tv Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categoryText}>Movies</Text>
                </TouchableOpacity><TouchableOpacity>
                    <Text style={styles.categoryText}>Kids</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>
            <TouchableOpacity style={styles.MovieImageThumbnail}>
               <Image source={MovieTheWhell} style={styles.movieImage} /> 
            </TouchableOpacity>

            <Text style={styles.movieText}>Continue Watching</Text>
            <FlatList
                data={MOVIESWATCHING}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <MoviesCard moviesURL={item.moviesURL} />}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
            />
            
            <View style={styles.movieContainer}>
                <TouchableOpacity style={styles.playButton}>
                    <Image source={PlayVideo} style={styles.playIcon} />
                </TouchableOpacity>
            </View>
            
            <Text style={styles.movieText}>Crime movies</Text>
            <FlatList
                data={MOVIESCRIME}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <MoviesCard moviesURL={item.moviesURL} />}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
            />
            <TouchableOpacity>
                <Image source={PlayVideo} />
            </TouchableOpacity>

            <Text style={styles.movieText}>Watch in your language</Text>
            <FlatList
                data={MOVIESWATCH}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <MoviesCard moviesURL={item.moviesURL} />}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
            />
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232F3E",
        alignItems: "flex-start",
    },

    header: {
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "center",
    },

    AmazonLogoImg: {
        marginTop: -32,
        marginLeft: 30,
    },

    category: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
        marginBottom: 15,
    }, 

    movieText: {
        color: "#ffff",
        fontSize: 18,
        fontWeight: "700",
        padding: 19,
    },

    categoryText: {
        fontSize: 14,
        fontWeight: "700",
        color: "#FFFF",
    },

    MovieImageThumbnail: {
        width: "100%",
        alignItems: "center",
    },

    contentList: {
        paddingLeft: 18,
        paddingRight: 30,
    },

    playButtonContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -25 }, { translateY: -25 }],
    },

    playButton: {
        width: 50,
        height: 50,
    },
});