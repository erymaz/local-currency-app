import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import { Header, CancelBtn, Button } from "src/shared/uielements";
import { colors } from "src/theme/colors";
import { baseHeader, viewBase, wrappingContainerBase } from "src/theme/elements";

type TopUpSuccessProps = {
	navigation?: any
	route?: any
}

const styles = StyleSheet.create({
	headerText: {
		fontSize: 32,
		fontWeight: '400',
		lineHeight: 40
	},
	bottomView: {
		padding: 20,
		paddingBottom: 45
	},
});

const TopUpSuccessView = (props: TopUpSuccessProps) => {
	return (
		<View style={viewBase}>
			<Header
				rightComponent={<CancelBtn text="Close" onClick={() => props.navigation.navigate('Dashboard')} />}
			/>
			<ScrollView style={wrappingContainerBase}>
				<View style={ baseHeader }>
					<Text style={styles.headerText}>Congratulations! You have topped up</Text>
					<Text style={styles.headerText}>B$ 50.00</Text>
				</View>
					<Text>The BerkShares will soon be available in your wallet!</Text>
			</ScrollView>
			<KeyboardAvoidingView
				behavior={Platform.OS == "ios" ? "padding" : "height"} >
				<View style={styles.bottomView}>
					<Button
						type="darkGreen"
						title="Explore BerkShares"
						onPress={() => props.navigation.navigate("Dashboard")}
					/>
				</View>
			</KeyboardAvoidingView>
		</View>
	);
}

const TopUpSuccess = (props: TopUpSuccessProps) => {
	const navigation = useNavigation();
	return <TopUpSuccessView {...props} navigation={navigation} />;
}
export default TopUpSuccess