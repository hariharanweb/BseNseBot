import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import Api, {APIResponse} from './service/Api';
import Entry from './components/Entry';

const GainersLoosers = ({type = 'loosers'}) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [data, setData] = useState<APIResponse>();

  useEffect(() => {
    (async () => {
      if (!loaded) {
        const jsonData = await Api.get(type);
        setData(jsonData);
        setLoaded(true);
      }
    })();
  }, [loaded, type]);

  return (
    loaded &&
    data && (
      <FlatList
        data={data.gainersAndLoosers}
        renderItem={({item}) => (
          <>
            <Entry entry={item} type={type} />
          </>
        )}
      />
    )
  );
};

export default GainersLoosers;
