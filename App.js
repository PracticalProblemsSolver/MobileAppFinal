import NavigationPanel from './components/NavigationPanel';
import { styles } from './styles';
import { SafeAreaView } from 'react-native';
import SideMenu from './components/SideMenu';
import { useState } from 'react';
import MenuButton from './components/MenuButton';

export default function App() {
  const [sideMenustate, setSideMenuState] = useState(false);

  return (
    <>
      <NavigationPanel>
        <MenuButton openFunction={() => setSideMenuState(sideMenustate ? false : true)}></MenuButton>
      </NavigationPanel>

      <SideMenu isOpen={sideMenustate}>
        
      </SideMenu>

      <SafeAreaView style={styles.mainContainer}>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Main" component={Main} />
              <Tab.Screen name="SpaceMap" component={SpaceMap} />
              <Tab.Screen name="SpaceNews" component={SpaceNews} />
              <Tab.Screen name='Profile' component={Profile} />
            </Tab.Navigator>
          </NavigationContainer>
        
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}