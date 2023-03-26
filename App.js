import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, BackHandler } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

const App = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.front);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} ratio="16:9">
                <View style={styles.buttonContainer}>
                <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(type === CameraType.back ? CameraType.front : CameraType.back);
                        }}>
                        <Text style={styles.text}> Flip </Text>
                </TouchableOpacity>
                </View>
                
            </Camera>
            <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.buttonExit}
                        onPress={() => {
                            BackHandler.exitApp();
                        }}>
                        <Text style={styles.text}> Exit </Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        width: 360,
        height: 640,
        margin: 20,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
        
    },
    button: {
        // flex: 0.1,

        alignSelf: 'flex-end',
        alignItems: 'center',
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "green"
    },
    buttonExit: {
        // flex: 0.1,
        alignSelf: 'flex-start',
        alignItems: 'center',
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "red"
    },

    text: {
        fontSize: 24,
        color: 'black',
    },
});

export default App;