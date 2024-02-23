import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import routes from './routes';

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name={routes.LISTING} component={ListingsScreen} options={{headerShown: false}}/>
    <Stack.Screen name={routes.LISTING_DETAILS} component={ListingDetailsScreen} options={{headerShown: false}}/>
  </Stack.Navigator>
);

export default FeedNavigator;