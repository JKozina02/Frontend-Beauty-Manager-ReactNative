import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FractionalStar = ({ fill = 1 }) => {
  const widthPercent = `${fill * 100}%`;

  return (
    <View style={{ width: 20, height: 20, position: 'relative', overflow: 'hidden' }}>
      <Icon name="star-border" size={20} color="#FFD700" style={{ position: 'absolute' }} />
      <View style={{ width: widthPercent, overflow: 'hidden' }}>
        <Icon name="star" size={20} color="#FFD700" />
      </View>
    </View>
  );
};

export default FractionalStar;
