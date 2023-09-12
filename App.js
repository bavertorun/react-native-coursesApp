import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CourseList from './component/CourseList';
import CourseInput from './component/CourseInput';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);
  const [courses, setCourses] = useState([])

  const addCourse = (courseTitle) => {
    setCourses((currentCourses) => [
      ...currentCourses,
      { text: courseTitle, id: Math.random().toString() },
    ])
    setModalVisible(false)
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Button title='Kurs Ekle' color='red' onPress={() => setModalVisible(true)} />
        <CourseInput setModalVisible={setModalVisible} modalVisible={modalVisible} onAddCourse={addCourse} />
        <CourseList courseTitles={courses}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  }
});
