import React, {StyleSheet, Text, View} from 'react-native';
import {GainersAndLooser} from '../service/Api';

const Entry = ({entry, type}: {entry: GainersAndLooser; type: string}) => {
  const positiveNegative = type === 'loosers' ? '-' : '+';
  const valueStyle =
    type === 'loosers' ? styles.negativeValue : styles.positiveValue;
  return (
    <View style={styles.entryContainer}>
      <View style={styles.entryDetails}>
        <Text style={styles.scripName}>{entry.scripname}</Text>
        <Text style={styles.scripLongName}>{entry.LONG_NAME}</Text>
      </View>
      <View style={styles.entryValue}>
        <Text style={styles.value}>{entry.trd_val}</Text>
        <Text
          style={
            valueStyle
          }>{`(${positiveNegative}${entry.change_percent})`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  entryContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderBlockColor: 'grey',
    borderBottomWidth: 1,
  },
  entryDetails: {
    flex: 1,
    flexDirection: 'column',
  },
  entryValue: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingRight: 8,
  },
  scripName: {
    fontSize: 12,
    paddingBottom: 8,
  },
  scripLongName: {
    fontSize: 16,
  },
  value: {
    fontSize: 20,
    paddingBottom: 8,
  },
  positiveValue: {
    color: 'green',
    fontSize: 12,
  },
  negativeValue: {
    color: 'red',
    fontSize: 12,
  },
});

export default Entry;
