import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background: #ffa83f;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const HeaderProfile = styled.View`
  padding: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const UserImageProfile = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 40px;
`;

export const UserName = styled.Text`
  color: #ffffff;
  font-size: 17px;
  font-weight: bold;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  background-color: #1e2b42;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 3px;
  margin-bottom: 30px;
`;

export const InputArea = styled.View`
  padding: 40px;
  width: 100%;
`;
