import { View, Text, StyleSheet } from 'react-native';

export default function DashboardScreen() {

    return (
        <View style={styles.container}>
            <Text>Dashboard Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    }
});