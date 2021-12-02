import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #ffa83f;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const SearchArea = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const PhotographersArea = styled.ScrollView``;

export const PhotographerItem = styled.TouchableOpacity`
  background-color: #2e2866;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 15px;
  flex-direction: row;
`;

export const PhotographerImage = styled.Image`
  width: 88px;
  height: 88px;
  border-radius: 20px;
`;

export const PhotographerInfos = styled.View`
  margin-left: 20px;
  justify-content: space-between;
`;

export const PhotographerName = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: #fff;
`;

export const ErrorArea = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ErrorText = styled.Text`
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
`;

export const ListArea = styled.View`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const ContentArea = styled.SafeAreaView`
  flex: 1;
`;
