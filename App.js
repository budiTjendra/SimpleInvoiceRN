import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CreateInvoiceScreen from './src/Screens/CreateInvoiceScreen';
import InvoiceListScreen from './src/Screens/InvoiceListScreen';
import {ScreenName} from './src/Constants'

import { Provider as StoreProvider } from 'react-redux'
import store from './src/Redux/Store'

const Stack = createStackNavigator();

function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={ScreenName.invoiceList}
          screenOptions={{
            headerShown: true
          }}>
          <Stack.Screen name={ScreenName.createInvoice} component={CreateInvoiceScreen} />
          <Stack.Screen name={ScreenName.invoiceList} component={InvoiceListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}

export default App;
