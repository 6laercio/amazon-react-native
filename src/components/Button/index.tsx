import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';

interface ButtonProps {
  text: string;
  onPress(): void;
  styleOptions?: {
    [propName: string]: string | number;
  };
}

const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  styleOptions,
}: ButtonProps) => {
  return (
    <Pressable style={[styles.root, styleOptions]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default Button;
