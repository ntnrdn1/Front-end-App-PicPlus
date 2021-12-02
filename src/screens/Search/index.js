import React, {useState, useEffect} from 'react';
import {RefreshControl} from 'react-native';
import InputArea from '../../components/SignInput';
import SearchIcon from '../../assets/search.svg';
import Api from '../../services/Api';
import Loading from '../../components/Loading';
import PhotographerItem from '../../components/PhotographerItem';
import {
  Container,
  Scroller,
  SearchArea,
  ListArea,
  ContentArea,
  PhotographerInfos,
  PhotographerName,
  ErrorText,
  ErrorArea,
} from './styles';

export default () => {
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [listPhotographers, setListPhotographers] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getPhotographers = async () => {
    setLoading(true);
    setListPhotographers([]);

    let res = await Api.getPhotographers();
    if (res.error === '') {
      setListPhotographers(res.data);
      setLoading(false);
    } else {
      // eslint-disable-next-line no-alert
      alert('Erro: ' + res.error);
    }
  };

  const onRefresh = () => {
    setRefreshing(false);
    getPhotographers();
  };

  useEffect(() => {
    getPhotographers();
  }, []);

  return (
    <Container>
      <Scroller
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <SearchArea>
          <InputArea
            IconSvg={SearchIcon}
            value={searchValue}
            onChangeText={(value) => setSearchValue(value)}
            placeholder="Digite o nome do barbeiro"
          />
        </SearchArea>

        <ContentArea>
          {loading === true ? (
            <Loading />
          ) : (
            // mostra a lista de barbeiros
            <ListArea>
              {listPhotographers.map((item, key) => {
                <PhotographerItem key={key} data={item} />;
              })}
            </ListArea>
          )}
        </ContentArea>
      </Scroller>
    </Container>
  );
};
