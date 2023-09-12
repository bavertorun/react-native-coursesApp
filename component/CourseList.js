import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CourseList({ courseTitles }) {
    console.log(courseTitles);
    return (
        <View>
            <FlatList
                data={courseTitles}
                renderItem={({ item }) => (
                   <View style={styles.course}>
                     <Text style={styles.courseText}>{item.text}</Text>
                   </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    course:{
        width: '100%',
        heiight: 140,
        backgroundColor: 'gray',
        marginTop: 10,
        borderRadius: 10,
        padding: 10,
    },
    courseText:{
        alignSelf: 'center',
        color: '#fff',
        fontWeight: 'bold',
    }
})