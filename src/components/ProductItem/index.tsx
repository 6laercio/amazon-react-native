import React from 'react';
import {Image, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductItem: React.FC<ProductItemProps> = ({item}: ProductItemProps) => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={{uri: item.image}} />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        {/* Rating */}
        <View style={styles.ratingContainer}>
          {Array.from(Array(5).keys(), (_, i) => (
            <FontAwesome
              key={i}
              style={styles.star}
              name={
                (i < Math.floor(item.avgRating) && 'star') ||
                (i < Math.round(item.avgRating) && 'star-half-o') ||
                'star-o'
              }
              size={18}
              color={'#e47911'}
            />
          ))}

          <Text>{item.ratings}</Text>
        </View>
        <Text style={styles.price}>
          from {item.price}{' '}
          {item.oldPrice && (
            <Text style={styles.oldPrice}>{item.oldPrice}</Text>
          )}
        </Text>
      </View>
    </View>
  );
};

export default ProductItem;
