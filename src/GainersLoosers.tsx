import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import Api from './service/Api';

const GainersLoosers = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [gainers, setGainers] = useState({});

  const loadData = async () => {
    const gainersData = await Api.get();
    setGainers(gainersData);
    setLoaded(true);
  };

  useEffect(() => {
    if (!loaded) {
      loadData();
    }
  }, [loaded]);
  return <Text>{JSON.stringify(gainers)}</Text>;
};

export default GainersLoosers;
