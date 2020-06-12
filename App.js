import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CreateInvoiceScreen from './src/Screens/CreateInvoiceScreen';
import InvoiceListScreen from './src/Screens/InvoiceListScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"InvoiceList"}>
        <Stack.Screen name="CreateInvoice" component={CreateInvoiceScreen} />
        <Stack.Screen name="InvoiceList" component={InvoiceListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
