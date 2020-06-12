import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CreateInvoice from './src/Screens/CreateInvoice';
import InvoiceList from './src/Screens/InvoiceList';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"InvoiceList"}>
        <Stack.Screen name="CreateInvoice" component={CreateInvoice} />
        <Stack.Screen name="InvoiceList" component={InvoiceList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
