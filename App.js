import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, Picker} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import RNPickerSelect from 'react-native-picker-select';

const mapboxAccessToken =
  'pk.eyJ1IjoiZGF2aWR3aW5hbGRhIiwiYSI6ImNraWg1dHhsZDEzMTgyd3F3YTBnN2J4NWoifQ.UxGrdErOGNdkBwUmIKOZbg';
MapboxGL.setAccessToken(mapboxAccessToken);

const App = () => {
  const [cCor, setCor] = useState([109.32199, -0.03109]);
  const [zoom, setZoom] = useState(4);
  const [selectedValue, setSelectedValue] = useState('kalbar');

  const Aceh = [95.323753,5.548290];
  const Sumut = [98.66667,3.58333];
  const Sumbar = [100.35427,-0.94924];
  const Sumsel = [104.7458,-2.91673];
  const Riau = [101.45,0.53333];
  const Lampung = [105.25803,-5.42544];
  const Bengkulu = [102.26554,-3.80044];
  const Kaltim = [116.82887,-1.26753];
  const Kalsel = [114.59075,-3.31987];
  const Kalbar = [109.32199,-0.03109];
  const Jambi = [103.61667,-1.6];
  const Jakarta = [106.84513,-6.21462];
  const DKI = [110.36083,-7.78278];
  const Jabar = [107.61861,-6.90389];
  const Jatim = [112.75083,-7.24917];
  const Jateng = [110.4203,-6.9932];
  const Banten = [106.71789,-6.28862];
  const Sulsel = [119.4221,-5.14];
  const Sulut = [124.84892,1.48218];
  const Sulteng = [119.8707,-0.8917];
  const Maluku = [128.18141,-3.69543];
  const Bali = [115.21667,-8.65];
  const NTT = [123.6075,-10.1718];
  const NTB = [116.11667,-8.58333];

  const startDestinationPoints = [Aceh, Sumut, Sumbar, Sumsel, Riau, Lampung, 
    Bengkulu, Kaltim, Kalsel, Kalbar, Jambi, Jakarta, DKI, Jabar, Jatim, Jateng,
    Banten, Sulsel, Sulut, Sulteng, Maluku, Bali, NTT, NTB];

  const testClick = (val) => {
    const data = val.split(',').map(x=>+x);
    setCor(data);
    setZoom(10);
  }

  const clearAll = () => {
    setCor([109.32199, -0.03109]);
    setZoom(4);
  } 

  return (
    <View style={styles.container}>
      <MapboxGL.MapView style={styles.map}>
        <MapboxGL.Camera zoomLevel={zoom} centerCoordinate={cCor} />
        {startDestinationPoints.map((point, index) => (
          <MapboxGL.PointAnnotation
            key={`${index}-PointAnnotation`}
            id={`${index}-PointAnnotation`}
            coordinate={point}>
            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: '#00cccc',
                borderRadius: 50,
                borderColor: '#fff',
                borderWidth: 3,
              }}
            />
          </MapboxGL.PointAnnotation>
        ))}
      </MapboxGL.MapView>
      <View style={styles.actionStat}>
        <Picker
          selectedValue={selectedValue}
          style={{ width: '100%', height: 50, color: 'white'}}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Kalimantan Barat" value="109.32199,-0.03109" />
          <Picker.Item label="Kalimantan Timur" value="116.82887,-1.26753" />
          <Picker.Item label="Kalimantan Selatan" value="114.59075,-3.31987" />
          <Picker.Item label="Aceh" value="95.323753,5.548290" />
          <Picker.Item label="Sumatra Utara" value="98.66667,3.58333" />
          <Picker.Item label="Sumatra Barat" value="100.35427,-0.94924" />
          <Picker.Item label="Sumatra Selatan" value="104.7458,-2.91673" />
          <Picker.Item label="Riau" value="101.45,0.53333" />
          <Picker.Item label="Lampung" value="105.25803,-5.42544" />
          <Picker.Item label="Bengkuli" value="102.26554,-3.80044" />
          <Picker.Item label="Jambi" value="103.61667,-1.6" />
          <Picker.Item label="Jakarta" value="106.84513,-6.21462" />
          <Picker.Item label="DKI Yogyakarta" value="110.36083,-7.78278" />
          <Picker.Item label="Jawa Barat" value="107.61861,-6.90389" />
          <Picker.Item label="Jawa Timur" value="112.75083,-7.24917" />
          <Picker.Item label="Jawa Tengah" value="110.4203,-6.9932" />
          <Picker.Item label="Banten" value="106.71789,-6.28862" />
          <Picker.Item label="Sulawesi Selatan" value="119.4221,-5.14" />
          <Picker.Item label="Sulawesi Utara" value="124.84892,1.48218" />
          <Picker.Item label="Sulawesi Tengah" value="119.8707,-0.8917" />
          <Picker.Item label="Maluku" value="128.18141,-3.69543" />
          <Picker.Item label="Bali" value="115.21667,-8.65" />
          <Picker.Item label="Nusa Tenggara Timur" value="123.6075,-10.1718" />
          <Picker.Item label="Nusa Tenggara Barat" value="116.11667,-8.58333" />
        </Picker>
        <View style={{width: '100%' ,display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{width: '48%'}}>
            <Button
              onPress={() => testClick(selectedValue)}
              title="Show Now"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
              
            />
          </View>
          <View style={{width: '48%'}}>
            <Button
              onPress={() => clearAll()}
              title="Clear All"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  map: {
    flex: 1,
  },
  actionStat: {
    position: 'absolute',
    width: '100%',
    padding: 20,
    backgroundColor: 'rgba(44, 62, 80,0.7)',
    bottom: 0,
  }
});

export default App;