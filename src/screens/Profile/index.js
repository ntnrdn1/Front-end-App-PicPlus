import React, {useContext} from 'react';
import {UserContext} from '../../contexts/UserContext';
import {Button} from 'react-native';
import Api from '../../services/Api';
import {useNavigation} from '@react-navigation/native';
import AccountIcon from '../../assets/account.svg';
import {
  Container,
  HeaderProfile,
  UserImageProfile,
  CustomButton,
  CustomButtonText,
  InputArea,
} from './styles';

/*****************************************************************************
  TODOS:
  [] header com: foto do usuario, ao lado esquerdo
  [] header com: infos do usuario (nome, avaliacao, cortes preferidos)
  [] content com: fotos de cortes, comentarios postados, barbeiros curtidos
******************************************************************************/

export default () => {
  const navigation = useNavigation();
  const {state: user} = useContext(UserContext);

  const handleLogoutClick = async () => {
    await Api.logout();
    navigation.reset({routes: [{name: 'SignIn'}]});
  };
  console.log(user);
  return (
    <Container>
      <InputArea>
        <HeaderProfile>
          {user.avatar !== '' ? (
            <UserImageProfile source={{uri: user.avatar}} />
          ) : (
            <AccountIcon width="24" height="24" fill="#FFFFFF" />
          )}
        </HeaderProfile>
        <CustomButton onPress={handleLogoutClick}>
          <CustomButtonText>SAIR</CustomButtonText>
        </CustomButton>
      </InputArea>
    </Container>
  );
};
