import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
	Image,
	TextInput,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import { Link } from "expo-router";

const CustomHeader = () => {
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<TouchableOpacity onPress={() => {}}>
					<Image
						source={require("../assets/images/bike.png")}
						style={styles.bike}
					/>
				</TouchableOpacity>

				<TouchableOpacity style={styles.titleContainer}>
					<Text style={styles.title}>Delivery · Now</Text>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<Text style={styles.subtitle}>London</Text>
						<Ionicons name="chevron-down" size={20} color={Colors.primary} />
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={styles.profileButton}>
					<Ionicons name="person-outline" size={20} color={Colors.primary} />
				</TouchableOpacity>
			</View>
			<SearchBar />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#fff",
	},
	container: {
		height: 60,
		backgroundColor: "#fff",
		flexDirection: "row",
		gap: 20,
		alignItems: "center",
		justifyContent: "space-between",
		paddingHorizontal: 20,
	},
	bike: {
		width: 30,
		height: 30,
	},
	titleContainer: {
		flex: 1,
	},
	title: {
		fontSize: 14,
		color: Colors.medium,
	},
	subtitle: {
		fontSize: 18,
		fontWeight: "bold",
	},
	profileButton: {
		backgroundColor: Colors.lightGrey,
		padding: 10,
		borderRadius: 50,
	},
	searchContainer: {
		height: 60,
		backgroundColor: "#fff",
	},
	searchSection: {
		flexDirection: "row",
		gap: 20,
	},
	searchField: {},
	optionButton: {
		padding: 10,
		borderRadius: 50,
	},
});

const SearchBar = () => (
	<View style={styles.searchContainer}>
		<View style={styles.searchSection}>
			<View style={styles.searchField}>
				<TextInput placeholder="Search" />
			</View>

			<Link href={"/"} asChild>
				<TouchableOpacity style={styles.optionButton}>
					<Ionicons name="options-outline" size={20} color={Colors.primary} />
				</TouchableOpacity>
			</Link>
		</View>
	</View>
);

export default CustomHeader;
