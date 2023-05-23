import { View, Text } from "react-native";

export default function Home({userInfo}){
    return(
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Profile</Text>
                <View>userInfo.name</View>
                <View>userInfo.surname</View>
            </View>
        </>
    );
}