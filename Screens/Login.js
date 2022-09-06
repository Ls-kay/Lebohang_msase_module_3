import * as React from 'react';
import { Button, StyleSheet, View, Text, SafeAreaView, TextInput } from 'react-native';

const Login = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.input}>Enter username:</Text>
                <TextInput></TextInput>
                <Button
                onPress={() => navigation.navigate('Dashboard')}
                title="Login"
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

})

export default Login