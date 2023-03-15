import React from 'react';
import { View, Text } from 'react-native';
import { Appbar } from 'react-native-paper';

const Dashboard = () => {
  const _handleMore = () => console.log('Shown more');

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={_handleMore} />
        <Appbar.Content title="Dashboard" />
      </Appbar.Header>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome to the Dashboard! Hello Im live
        </Text>
      </View>
    </View>
  );
};

export default Dashboard;
