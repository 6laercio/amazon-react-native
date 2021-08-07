import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      {/* Render Product Component */}
      <ProductItem item={products[0]} />
      <ProductItem item={products[1]} />
      <ProductItem item={products[2]} />
      <ProductItem item={products[3]} />
      <ProductItem item={products[4]} />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default HomeScreen;
