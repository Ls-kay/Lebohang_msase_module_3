import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const Dashboard = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <Button
                onPress={() => navigation.navigate('Personal')}
                title="Todo list"
                />                
            </View>
        </SafeAreaView>
    );
}

export default Dashboard