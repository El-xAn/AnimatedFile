import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import FirstSplash from '../screens/FirstSplash'
import SecondSplash from '../screens/SecondSplash'

const Stack = createStackNavigator();

export default StackNav = () =>  {
    return(
        <Stack.Navigator headerMode={'none'} initialRouteName={'FIRST'}>
            <Stack.Screen name='FIRST' component={FirstSplash} />
            <Stack.Screen name='SECOND' component={SecondSplash} />
        </Stack.Navigator>
    )
}
