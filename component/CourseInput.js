import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function CourseInput({ setModalVisible, modalVisible, onAddCourse }) {

    const [enteredCourseText, setEnteredCourseText] = useState('')

    const addCourseHandler = () => {
        onAddCourse(enteredCourseText);
        setEnteredCourseText('')
    }

    return (
        <Modal animationType="slide" visible={modalVisible}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Yeni Kurs Ekle!"
                    onChangeText={(text) => setEnteredCourseText(text)} value={enteredCourseText} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="İptal Et" color="red"
                            onPress={() => setModalVisible(false)} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Ekle" color="blue"
                            onPress={addCourseHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        padding: 15,
    },
    textInput: {
        borderWidth: 1,
        width: '100%',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        width: '45%',
        margin: 10,
    },
});