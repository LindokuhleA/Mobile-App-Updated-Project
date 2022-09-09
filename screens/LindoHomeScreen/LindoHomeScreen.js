import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar, ScrollView, TouchableOpacity, Image, } from 'react-native';
import {COLOURS, Items} from '../../components/Lindo/database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default window.Home = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);

  //get called on screen loads
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get data from DB

  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == 'product') {
        productList.push(Items[index]);
      } else if (Items[index].category == 'accessory') {
        accessoryList.push(Items[index]);
      }
    }

    setProducts(productList);
    setAccessory(accessoryList);
  };

  //create an product reusable card

  const ProductCard = ({data}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductInfo', {productID: data.id})}
        style={{
          width: '48%',
          marginVertical: 14,
        }}
      >
        
        <View
          style={{
            width: '100%',
            height: 100,
            borderRadius: 10,
            backgroundColor: COLOURS.white, //changing items background color
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 8,
          }}
        >
          {data.isOff ? (
            <View
              style={{
                position: 'absolute',
                width: '25%',
                height: '24%',
                backgroundColor: COLOURS.canvapink,
                top: 0,
                left: 0,
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.white,
                  fontWeight: 'bold',
                  letterSpacing: 1,
                }}
              >
                {data.offPercentage}Klaris
              </Text>
            </View>
          ) : null}
          
          <Image
            source={data.productImage}
            style={{
              width: '80%',
              height: '80%',
              resizeMode: 'contain',
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 12,
            color: COLOURS.glossyred,
            fontWeight: '600',
            marginBottom: 2,
          }}
        >
          {data.productName}
        </Text>

        {data.category == 'accessory' ? (
          data.isAvailable ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <FontAwesome
                name="circle"
                style={{
                  fontSize: 12,
                  marginRight: 6,
                  color: COLOURS.green,
                }}
              />

              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.green,
                }}
              >
                Available
              </Text>
            </View>
                ) : (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <FontAwesome
                name="circle"
                style={{
                  fontSize: 12,
                  marginRight: 6,
                  color: COLOURS.glossyred,
                }}
              />

              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.glossyred,
                }}
              >
                Not Available
              </Text>

            </View>
          )
        ) : null}
        <Text>R{data.productPrice}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.backgroundLight, //changing the background colour
      }}
    >
      <StatusBar backgroundColor={COLOURS.palepink} barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
            backgroundColor: COLOURS.palepink,
          }}
        >
          <TouchableOpacity>
            <Entypo
              name="shopping-bag"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundMedium,
                padding: 12,
                borderRadius: 10,
                backgroundColor: COLOURS.white,
              }}
            />
          </TouchableOpacity>

          {/* Linking MyCart Page */}
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <MaterialCommunityIcons
              name="cart"
              style={{
                fontSize: 18,
                color: COLOURS.backgroundMedium,
                padding: 12,
                borderRadius: 0,
                borderWidth: 0,
                borderColor: COLOURS.backgroundLight,
                backgroundColor: COLOURS.white,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginBottom: 10,
            padding: 16,
            backgroundColor: COLOURS.backgroundLight,
          }}
        >
          <Text
            style={{
              fontSize: 26,
              color: COLOURS.glossyred,
              fontWeight: '500',
              letterSpacing: 1,
              marginBottom: 10,
              textAlign: 'center'
            }}
          >
            SHOPPING
          </Text>
        </View>

        <View
          style={{
            padding: 16,
            backgroundColor: COLOURS.palepink,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: COLOURS.black,
                  fontWeight: '500',
                  letterSpacing: 1,
                }}
              >
                Clarifying Serum
              </Text>

              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.blue,
                  fontWeight: '400',
                  opacity: 0.5,
                  marginLeft: 10,
                }}
              >
                41
              </Text>
            </View>

            <Text
              style={{
                fontSize: 14,
                color: COLOURS.black,
                fontWeight: '400',
              }}
            >
              See All
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
               
            }}
          >
            {products.map(data => {
              return <ProductCard data={data} key={data.id} />
            })}
          </View>
        </View>

        <View
          style={{
            padding: 16,
            backgroundColor: COLOURS.palepink,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: COLOURS.black,
                  fontWeight: '500',
                  letterSpacing: 1,
                }}
              >
                Moisturizing Milk
              </Text>

              <Text
                style={{
                  fontSize: 14,
                  color: COLOURS.blue,
                  fontWeight: '400',
                  opacity: 0.5,
                  marginLeft: 10,
                }}
              >
                78
              </Text>
            </View>

            <Text
              style={{
                fontSize: 14,
                color: COLOURS.black,
                fontWeight: '400',
              }}
            >
              See All
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}
          >
            {accessory.map(data => {
              return <ProductCard data={data} key={data.id} />
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
