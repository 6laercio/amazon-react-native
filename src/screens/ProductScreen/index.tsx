import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options
      ? product.options[0].toLowerCase().replace(/\s/g, '-')
      : null,
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>
      {/* Image carousel */}

      {/* Option selector */}
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map((option, i) => (
          <Picker.Item
            key={i}
            label={option}
            value={option.toLowerCase().replace(/\s/g, '-')}
          />
        ))}
      </Picker>

      {/* Price */}
      <Text style={styles.price}>
        from {product.price}{' '}
        {product.oldPrice && (
          <Text style={styles.oldPrice}>{product.oldPrice}</Text>
        )}
      </Text>

      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Quantity selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      {/* Buttons */}
      <Button
        text="Add To Cart"
        onPress={() => console.warn('Add To Cart')}
        styleOptions={styleOptions.button}
      />
      <Button text="Buy Now" onPress={() => console.warn('Buy Now')} />
    </View>
  );
};

export default ProductScreen;

const styleOptions = StyleSheet.create({
  button: {
    backgroundColor: '#ffd838',
  },
});
