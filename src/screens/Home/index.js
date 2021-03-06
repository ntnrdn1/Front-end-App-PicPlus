import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Platform, RefreshControl} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';
import MyLocationIcon from '../../assets/my_location.svg';
import SearchIcon from '../../assets/search.svg';
import PhotographerItem from '../../components/PhotographerItem';
import Loading from '../../components/Loading';
import Api from '../../services/Api';
import {
  Container,
  HeaderArea,
  HeaderTitle,
  LocationArea,
  LocationFinder,
  LocationInput,
  Scroller,
  SearchButton,
  ListArea,
  ContentArea,
} from './styles';

export default () => {
  const navigation = useNavigation();

  const [locationText, setLocationText] = useState('');
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [listPhotographers, setListPhotographers] = useState([]);
  const [loadingOpacity, setLoadingOpacity] = useState({opacity: 1});
  const [refreshing, setRefreshing] = useState(false);

  // captura a localizacao do usuario
  const handleLocationFinder = async () => {
    setCoords(null);
    let result = await request(
      Platform.os === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    );
    if (result === 'granted') {
      setLoading(true);
      setLocationText('');
      setListPhotographers([]);

      Geolocation.getCurrentPosition((info) => {
        setCoords(info.coords);
        getPhotographers();
      });
    }
  };

  const getPhotographers = async () => {
    setLoading(true);
    setListPhotographers([]);

    let lat = null;
    let long = null;

    if (coords) {
      lat = coords.latitude;
      long = coords.longitude;
    }

    let res = await Api.getPhotographers(lat, long, locationText);
    if (res.error === '') {
      if (res.loc) {
        setLocationText(res.loc);
      }
      setListPhotographers(res.data);
      setLoading(false);
    } else {
      // eslint-disable-next-line no-alert
      alert('Erro: ' + res.error);
    }
  };

  useEffect(() => {
    getPhotographers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRefresh = () => {
    setRefreshing(false);
    getPhotographers();
  };

  const handleLocationSearch = () => {
    setCoords([]);
    getPhotographers();
  };

  return (
    <Container>
      <Scroller
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>
            Encontre o seu fot??grafo favorito!
          </HeaderTitle>
          <SearchButton onPress={() => navigation.navigate('Search')}>
            <SearchIcon width="26" height="26" fill="#FFF" />
          </SearchButton>
        </HeaderArea>

        <LocationArea>
          <LocationInput
            placeholder="Onde voce esta?"
            placeholderTextColor="#fff"
            value={locationText}
            onChangeText={(text) => setLocationText(text)}
            onEndEditing={handleLocationSearch}
          />
          <LocationFinder onPress={handleLocationFinder}>
            <MyLocationIcon width="24" height="24" fill="#fff" />
          </LocationFinder>
        </LocationArea>

        <ContentArea>
          {loading === true ? (
            <Loading />
          ) : (
            // mostra a lista de barbeiros
            <ListArea>
              {listPhotographers.map((item, key) => (
                <PhotographerItem key={key} data={item} />
              ))}
            </ListArea>
          )}
        </ContentArea>
      </Scroller>
    </Container>
  );
};
