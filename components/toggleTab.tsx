import React, { useRef, useState } from 'react';
import { TouchableOpacity, View, Text, Animated } from 'react-native';
import styles from './styles';

function ToggleTab(props) {
  const [selectedId, setSelectedId] = useState(0);
  const moveAnim = useRef(new Animated.Value(0)).current;

  const move = (index: number) => {
    Animated.timing(moveAnim, {
      toValue: 150 * index,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleSelect = (index: number) => {
    if (index === selectedId) {
      return;
    }
    move(index);
    setSelectedId(index);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.mask, { transform: [{ translateX: moveAnim }] }]}
      />
      <View style={styles.buttonGroupContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleSelect(0)}>
          <Text
            style={[
              styles.buttonText,
              selectedId === 0 && styles.buttonTextActive,
            ]}>
            {'A'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleSelect(1)}>
          <Text
            style={[
              styles.buttonText,
              selectedId === 1 && styles.buttonTextActive,
            ]}>
            {'B'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ToggleTab;
