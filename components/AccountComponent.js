// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { Card, Button } from 'react-native-paper';

// const AccountComponent = () => {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Card>
//           <Card.Title title="Account" />
//           <Card.Content>
//             <Text>Hello!</Text>
//           </Card.Content>
//           <Card.Actions>
//             <Button mode="outlined" onPress={() => console.log('History pressed')}>
//               History
//             </Button>
//             <Button mode="outlined" onPress={() => console.log('Edit pressed')}>
//               Edit Profile
//             </Button>
//             <Button mode="outlined" onPress={() => console.log('Delete pressed')}>
//               Delete
//             </Button>
//           </Card.Actions>
//         </Card>
//       </View>
//     );
//   };
  
//   export default AccountComponent;
  
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, List, Switch } from 'react-native-paper';

<View style={styles.container}>
      <List.Section>
        <List.Header>Account</List.Header>
        <List.Subheader>Account</List.Subheader>
        <List.Item title="Edit Profile" left={() => <List.Icon icon="account" />} />
        <List.Item title="View History" left={() => <List.Icon icon="history" />} />
      </List.Section>

      <List.Section>
        <List.Subheader>Privacy</List.Subheader>
        <List.Item title="Privacy Policy" left={() => <List.Icon icon="shield" />} />
        <List.Item title="Terms and Conditions" left={() => <List.Icon icon="file" />} />
      </List.Section>
    </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default AccountComponent;
