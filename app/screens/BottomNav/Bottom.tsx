import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageFive from './PageFive';


const MusicRoute = () => <PageOne/>;

const AlbumsRoute = () => <PageTwo/>;

const RecentsRoute = () =><PageThree/>;


const NotificationsRoute = () => <PageFive/>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline'},
    { key: 'albums', title: 'Profile', focusedIcon: 'account-tie', unfocusedIcon:'account-tie-outline'},
    { key: 'recents', title: 'My Post', focusedIcon: 'comment-processing', unfocusedIcon: 'comment-processing-outline' },
    { key: 'notifications', title: 'College', focusedIcon: 'bank', unfocusedIcon: 'bank-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}                                                                             
      onIndexChange={setIndex}
      renderScene={renderScene}
     barStyle={{backgroundColor:"black"}}
     activeColor='#DE3163' 
     inactiveColor='white'
    
      />
    
  );
};

export default MyComponent;