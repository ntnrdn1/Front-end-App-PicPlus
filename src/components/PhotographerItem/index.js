import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Area,
  Avatar,
  InfoArea,
  UserName,
  SeeProfileButton,
  SeeProfileButtonText,
} from './styles';

import Stars from '../Stars';

export default ({data}) => {
  const navigation = useNavigation();

  const handleClickPhotographer = () => {
    navigation.navigate('Photographer', {
      id: data.id,
      avatar: data.avatar,
      name: data.name,
      stars: data.start,
    });
  };
  return (
    <Area onPress={handleClickPhotographer}>
      <Avatar source={{uri: data.avatar}} />
      <InfoArea>
        <UserName>{data.name}</UserName>
        <Stars stars={data.stars} showNumber={true} />

        <SeeProfileButton>
          <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
        </SeeProfileButton>
      </InfoArea>
    </Area>
  );
};
