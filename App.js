import { View,StatusBar } from 'react-native'
import React from 'react'
import Navigation from './src/navigations/Navigation'
import AnimatedBtLoader from './src/components/Authtication/login/AnimatedBtLoader'
import Cart from './src/components/Modules/cart/Cart'
import SplashScreen from './src/components/Authtication/splash/SplashScreen'
import Notification from './src/components/Modules/notifications/Notification'

const App = () => {
  return (
    <View style={{flex:1}}>
       <StatusBar
        animated={true}
        backgroundColor="black"
      />
     <Navigation />    
    </View>
  )
}

export default App