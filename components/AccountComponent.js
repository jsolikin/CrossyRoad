import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, List, Switch } from 'react-native-paper';

function AccountComponent() {
  const [notificationEnabled, setNotificationEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Account" titleStyle={{ fontSize: 24 }} />
      </Appbar.Header>
      <List.Section>
        <List.Subheader>Notifications</List.Subheader>
        <List.Item
          title="Enable Notifications"
          right={() => (
            <Switch
              value={notificationEnabled}
              onValueChange={() => setNotificationEnabled(!notificationEnabled)}
            />
          )}
        />
      </List.Section>

      <List.Section>
        <List.Subheader>Account</List.Subheader>
        <List.Item title="Edit Profile" left={() => <List.Icon icon="account" />} />
        <List.Item title="View History" left={() => <List.Icon icon="history" />} />
        <List.Item title="Clear History" left={() => <List.Icon icon="eraser" />} />
      </List.Section>

      <List.Section>
        <List.Subheader>Privacy</List.Subheader>
        <List.Item title="Privacy Policy" left={() => <List.Icon icon="shield" />} />
        <List.Item title="Terms and Conditions" left={() => <List.Icon icon="file" />} />
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default AccountComponent;
