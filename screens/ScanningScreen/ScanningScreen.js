import React, {useRef, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Pressable,
  Modal,
  Avatar,
  Image,
  Text,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {
//   getModel,
//   convertBase64ToTensor,
//   startPrediction,
// } from '../../helpers/tensor-helper';
// import {cropPicture} from '../../helpers/image-helper';


import {Camera, CameraType} from 'expo-camera';
//const RESULT_MAPPING = []; //Skin Type Array

// const App = () => {


  function Scanning() {

  const Cam ={uri: 'https://cdn1.vectorstock.com/i/1000x1000/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg'}
  const cameraRef = useRef();
  const [type, setType] = useState(CameraType.back);
  const [CameraPermission, setCameraPermission] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [presentedSkin, setPresentedSkin] = useState('');




  // if (!CameraPermission) {
  //    //Camera permissions are still loading
  //   return <View />;
  // }
  
  // if (!CameraPermission.granted) {
  //   // Camera permissions are not granted yet
  //   return (


  //     <View style={styles.container}>
        
  //       <Text style={{ textAlign: 'center' }}>
  //         We need your permission to show the camera
  //       </Text>
  //       <Button onPress={CameraPermission} title="Allow Permission" />
  //     </View>
  //   );
  // }






  function toggleCameraType() {
    setType((current) => (
      current === CameraType. back ? CameraType.front: CameraType.back
    ));
  }


  //Image Capture
  const handleImageCapture = async () => {
    setIsProcessing(true);
    const CameraPermission = await Camera.requestCameraPermissionsAsync();
    const imageData = await cameraRef.current.takePictureAsync({
      base64: true,
    });
    processImagePrediction(imageData);
  };

  //Image Processing Prediction
  const processImagePrediction = async (base64Image) => {
    // const {status} = await Camera.requestCameraPermissionsAsync();
    // await tf.ready();
    const croppedData = await cropPicture(base64Image, 300);
    const model = await getModel();
    const tensor = await convertBase64ToTensor(croppedData.base64);

    const prediction = await startPrediction(model, tensor);

    const highestPrediction = prediction.indexOf(
      Math.max.apply(null, prediction),
    );
    setPresentedSkin(RESULT_MAPPING[highestPrediction]); // Returns the highest probability of detected Skin Type
  };


  return (
    <View style={styles.container}>

      {/* <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera> */}

      <Modal visible={isProcessing} transparent={true} animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text>Your current Skin Type is {presentedSkin}</Text>
            {presentedSkin === '' && <ActivityIndicator size="large" />}
            <Pressable

              style={styles.dismissButton}
              onPress={() => {
                setPresentedSkin('');
                setIsProcessing(false);
              }}>
              <Text>Cancel The Scanning</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={Camera.Constants.Type.front}
        autoFocus={true}
        whiteBalance={Camera.Constants.WhiteBalance.auto}></Camera>
      <Pressable
      
        onPress={() => handleImageCapture()}
        style={styles.captureButton}>
                   
        </Pressable>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },


  camera: {
    marginTop:0,
    width: '100%',
    height: '100%',
  },


  captureButton: {
    position: 'absolute',
    left: Dimensions.get('screen').width / 2 - 50,
    bottom: 35 ,
    width: 100,
    zIndex: 100,
    height: 100,
    borderRadius: 50,
    borderColor:'red',
    borderWidth:6,
    backgroundColor: ('white'),
    opacity:0.50,
  },


  modal: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 200,
    borderRadius: 24,
    backgroundColor: 'gray',
  },
  dismissButton: {
    width: 170,
    height: 50,
    marginTop: 60,
    borderRadius: 10,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});

export default Scanning;
