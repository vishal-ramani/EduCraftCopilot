// mobile/src/screens/CreateCourseScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';
import { createCourse } from '../services/courseService';

const CreateCourseScreen = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [language, setLanguage] = useState('English');
    const [modules, setModules] = useState([]);

    const handleSubmit = async () => {
        const courseData = { title, description, language, modules };
        const token = await AsyncStorage.getItem('token'); // Assuming JWT token is stored in AsyncStorage
        try {
            const newCourse = await createCourse(courseData, token);
            console.log('Course Created:', newCourse);
            // Navigate or update UI accordingly
        } catch (error) {
            console.error('Error Creating Course:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Title:</Text>
            <TextInput 
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                required
            />
            <Text style={styles.label}>Description:</Text>
            <TextInput 
                style={styles.textarea}
                value={description}
                onChangeText={setDescription}
                required
                multiline
            />
            <Text style={styles.label}>Language:</Text>
            <Picker
                selectedValue={language}
                onValueChange={(itemValue) => setLanguage(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="English" value="English" />
                <Picker.Item label="Hindi" value="Hindi" />
                <Picker.Item label="Tamil" value="Tamil" />
                <Picker.Item label="Bengali" value="Bengali" />
                <Picker.Item label="Telugu" value="Telugu" />
                <Picker.Item label="Marathi" value="Marathi" />
                {/* Add more languages as needed */}
            </Picker>
            {/* Add modules input fields */}
            <Button title="Create Course" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20 },
    label: { fontSize: 16, marginBottom: 5 },
    input: { borderWidth: 1, padding: 10, marginBottom: 15 },
    textarea: { borderWidth: 1, padding: 10, height: 100, marginBottom: 15 },
    picker: { height: 50, width: '100%', marginBottom: 15 },
});

export default CreateCourseScreen;
