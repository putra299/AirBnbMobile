// created by Syura Utama Putra at 2022/08/22 09:32.
// 
// React Native Front End Lemonilo

import * as React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  StatusBar,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const DATA = [
  {
    id: '1',
    title: 'Abian Asemal, Indonesia',
    image:
      'https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg',
    distance: '962 Kilometers',
    date: 'Jul 2 - 7',
    price: '$360',
  },
  {
    id: '2',
    title: 'Abian Asemal, Indonesia',
    image:
      'https://a0.muscache.com/im/pictures/11bd9fc9-4ca9-4208-b449-bdc63a1969b9.jpg',
    distance: '962 Kilometers',
    date: 'Jul 2 - 7',
    price: '$360',
  },
  {
    id: '3',
    title: 'Sindun-myeon, Icheon-si, South Korea',
    image:
      'https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg',
    distance: '5,825 Kilometers',
    date: 'Aug 28 - Sep 2',
    price: '$80',
  },
  {
    id: '4',
    title: 'Tambon Nong Kae, Thailand',
    image:
      'https://a0.muscache.com/im/pictures/448bee34-7416-4262-a02f-b39e29d7ce4f.jpg',
    distance: '2,214 Kilometers',
    date: 'Aug 21 -26',
    price: '$112',
  },
  {
    id: '5',
    title: 'Selat, Indonesia',
    image:
      'https://a0.muscache.com/im/pictures/miso/Hosting-36165132/original/64a7e292-1cf6-4653-a6e3-75dd196038b7.jpeg',
    distance: '987 Kilometers',
    date: 'May 11 - 16',
    price: '$236',
  },
  {
    id: '6',
    title: 'Selat, Indonesia',
    image:
      'https://a0.muscache.com/im/pictures/miso/Hosting-24043648/original/425c52e1-3b95-4280-a2de-fbf9a1d3ca52.jpeg',
    distance: '987 Kilometers',
    date: 'May 11 - 16',
    price: '$236',
  },
];

const BoxContainer = () => {
  return (
    <View elevation={6} style={styles.boxContainer}>
      <Icon style={styles.iconSearch} name="search" size={20} color={'black'} />
    </View>
  );
};

const Title = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const Distance = ({distance}) => {
  return (
    <View>
      <Text style={styles.desc}>{distance}</Text>
    </View>
  );
};

const Date = ({date}) => {
  return <Text style={styles.desc}>{date}</Text>;
};

const Price = ({price}) => {
  return <Text style={styles.price}>{price}</Text>;
};

const Night = () => {
  return <Text style={{color: 'black', fontSize: 20}}>night</Text>;
};

const ImageVIew = ({image}) => {
  return (
    <Image
      style={styles.tinyLogo}
      source={{
        uri: image,
      }}
    />
  );
};

const Arctic = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const AmazingPools = () =>  {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 8}}>Profile</Text>
    </View>
  );
}

const Islands = () => {
  return (
    <View>
      <Text>Islands</Text>
    </View>
  );
}

const NationalsParks = () => {
  return (
    <View>
      <Text>NationalsParks</Text>
    </View>
  );
}

const TabTop = createMaterialTopTabNavigator();

const Dashboard = () => {
  const renderItem = ({item}) => (
    <View>
      <ImageVIew image={item.image} />
      <Title title={item.title} />
      <Distance distance={item.distance} />
      <Date date={item.date} />
      <Text style={{marginBottom: 24}}>
        <Price price={item.price} /> <Night night={item.night} />
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const TopNavBar = () => {
  return (
    <>
      <View style={{backgroundColor: 'white'}}>
        <BoxContainer />
      </View>
      <NavigationContainer>
        <TabTop.Navigator
          screenOptions={{
            tabBarScrollEnabled: true,
            tabBarIndicatorStyle: {
              backgroundColor: 'black',
            },
            tabBarItemStyle: {width: 'auto', minWidht: '100'},
          }}>
          <TabTop.Screen
            name="OMG!"
            component={Dashboard}
            options={{
              tabBarLabelStyle: {
                fontSize: 10,
                fontWeight: 'bold',
              },
              tabBarIcon: () => (
                <Image
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  source={{
                    uri: 'https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg',
                  }}
                />
              ),
            }}
          />
          <TabTop.Screen
            name="Arctic"
            component={Arctic}
            options={{
              tabBarLabelStyle: {
                fontSize: 10,
                fontWeight: 'bold',
              },
              tabBarIcon: () => (
                <Image
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  source={{
                    uri: 'https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg',
                  }}
                />
              ),
            }}
          />
          <TabTop.Screen
            name="Amazing Pools"
            component={AmazingPools}
            options={{
              tabBarLabelStyle: {
                fontSize: 10,
                fontWeight: 'bold',
              },
              tabBarIcon: () => (
                <Image
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  source={{
                    uri: 'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg',
                  }}
                />
              ),
            }}
          />
          <TabTop.Screen
            name="Islands"
            component={Islands}
            options={{
              tabBarLabelStyle: {
                fontSize: 10,
                fontWeight: 'bold',
              },
              tabBarIcon: () => (
                <Image
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  source={{
                    uri: 'https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg',
                  }}
                />
              ),
            }}
          />
          <TabTop.Screen
            name="Nationals Parks"
            component={NationalsParks}
            options={{
              tabBarLabelStyle: {
                fontSize: 10,
                fontWeight: 'bold',
              },
              tabBarIcon: () => (
                <Image
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  source={{
                    uri: 'https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg',
                  }}
                />
              ),
            }}
          />
        </TabTop.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  tinyLogo: {
    marginTop: 20,
    width: 350,
    height: 350,
    borderRadius: 14,
  },
  title: {
    marginTop: 10,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  desc: {
    fontSize: 20,
    color: '#808080',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30,
  },
  boxContainer: {
    backgroundColor: '#fff',
    shadowOpacity: 0.8,
    height: 60,
    margin: 10,
    borderRadius: 30,
  },
  iconSearch: {
    padding: 20,
  },
  iconSetting: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
  },
});

export default TopNavBar;
