import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background: #ffa83f;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const InputArea = styled.View`
  padding: 40px;
  width: 100%;
`;

export const CustomButton = styled.TouchableOpacity`
  height: 60px;
  background-color: #1e2b42;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #ffffff;
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 0px;
  margin-bottom: 10px;
`;

export const SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: #1e2b42;
`;

export const SignMessageButtonTextBold = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #1e2b42;
  margin-left: 5px;
`;
