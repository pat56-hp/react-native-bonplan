import { Stack } from "expo-router";
import StackComponent from "@/components/stack/StackComponent";
import { SheetProvider } from "react-native-actions-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
    return (
        <GestureHandlerRootView>
            <SheetProvider>
                <StackComponent>
                    <Stack.Screen name='(tabs)' options={{ headerShown : false}} />
                    <Stack.Screen name='auth' options={{ headerShown : false}} />
                    <Stack.Screen name='index' options={{ headerShown : false}} />
                    {/* <Stack.Screen name='(drawer)' options={{ headerShown: false }} /> */}
                </StackComponent>
            </SheetProvider>
        </GestureHandlerRootView>
    )
}