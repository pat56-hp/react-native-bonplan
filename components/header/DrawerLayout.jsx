import { View, Text, DrawerLayoutAndroid } from 'react-native'
import React from 'react'
import Home from '@/app/(tabs)'

export default function DrawerLayout({children, ref}) {
    
  return (
    <DrawerLayoutAndroid 
        ref={ref}
        drawerWidth={300}
        renderNavigationView={() => <Home />}
    >
        {children}
    </DrawerLayoutAndroid>
  )
}