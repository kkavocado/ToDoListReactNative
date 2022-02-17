import { DefaultTheme } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button, TouchableHighlight } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CloseButton from './CloseButton';
import DoneButon from './DoneButton';
import { useAppContext } from './AppContext';
import close from './close.png';
import calendar from './calendar.png';
import DatePicker from 'react-native-date-picker'
import { Dropdown } from 'react-native-element-dropdown';


const ToDoInput = ({ navigation }) => {
    const data = useAppContext()


    const dropdownData = [
        { label: 'Home', value: 'Home' },
        { label: 'Office', value: 'Office' },
        { label: 'School', value: 'School' },
        { label: 'Personal', value: 'Personal' },
    ];

    const [text, setText] = useState('');
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState('Home');


    const handleDone = () => {

        if (text != '') {
            console.log(text)
            console.log(date)
            var newArray = [...data.data];
            newArray.push({ title: text, date: date.toDateString(), project: selectedProject });
            data.setData(newArray);
            navigation.goBack()
        } else {
            alert("Please complete the information")
        }

    }

    const handleClose = () => navigation.goBack()

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <CloseButton renderImage={close} onPress={handleClose} />

            <View style={styles.textContainer}>
                <Text style={styles.text}>To-do</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Type Here"
                    onChangeText={(Text) => setText(Text)
                    }
                />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.text}>Project</Text>
                <View style={styles.pickerStyle}>

                    <Dropdown
                        data={dropdownData}
                        selectedTextStyle={styles.selectedText}
                        labelField='label'
                        valueField='value'
                        value={selectedProject}
                        maxHeight={190}
                        onChange={item => {
                            setSelectedProject(item.value);
                        }}

                    >

                    </Dropdown>
                </View>


            </View>

            <View style={styles.textContainer}>
                <Text style={styles.text}>Deadline</Text>

                <TouchableOpacity onPress={() => setOpen(true)} style={styles.calendarContainer}>
                    <Text style={styles.textInput}>{date.toDateString()}</Text>
                    <Image source={calendar} style={styles.calenderImage} />
                </TouchableOpacity>

                <DatePicker
                    modal
                    open={open}
                    date={date}
                    mode="datetime"
                    minimumDate={new Date()}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </View>


            <View style={{ flex: 1 }} />
            <DoneButon onPress={handleDone} buttonText={'Done'} />
        </SafeAreaView>
    )
}

export default ToDoInput

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: '#f5f9fa'
    },
    textContainer: {
        margin: 20,

    },
    text: {
        fontSize: 15,
        color: "grey",
        padding: 5
    },
    textInput: {
        height: 40,
        fontSize: 20,
        marginTop: 10,
        marginLeft: 5,
        color: "black",


    },
    dateTimeContainer:
    {
        margin: 20
    },
    calendarContainer:
    {
        flexDirection: "row",
        borderWidth: 0.5,
        borderRadius: 10,
        width: 200,
        borderColor: "black",
        alignItems: "flex-start",
        margin: 5
    },
    calenderImage: {
        width: 20,
        height: 20,
        margin: 14,
        marginHorizontal: 10
    },
    pickerStyle:
    {
        height: 50,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 10,
        margin: 5
    },
    selectedText: {
        fontSize: 20,
        color: 'black'
    }

})