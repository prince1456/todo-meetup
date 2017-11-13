import React, {Component} from 'react'
import moment from 'moment'
import {Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import Card from './card'


 export default class App extends Component {
     state = {
         note: '',
         notes: [],
     }

     handlePress () {
        if ( this.state.note) {
            this.state.notes.push({
                note: this.state.note,
                date: moment().format("LL")
            })
            this.setState({notes: this.state.notes, note: ''})
        }
     }
     deleteNote(i){
         this.state.notes.splice(i, 1)
         this.setState({notes: this.state.notes})
     }

    render() {
        const notes = this.state.notes.map((note, i) => {
            return (
                <Card 
                key={i}
                keyVal={i}
                note={note}
                onPress={() => this.deleteNote(i)}
                />
            )
        })
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1,width: '40%', marginLeft: 10}}
                    value= {this.state.note}
                    placeholder={"its note"}
                    onChangeText={(note) => this.setState({note})}
                    />
                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={ () => this.handlePress()}
                        >
                            <Text style={{fontSize: 25, color: 'white'}}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={{backgroundColor: 'transparent'}}>{this.state.note}</Text>
                    <ScrollView>
                        {notes}
                    </ScrollView>
                    </View>
                <View style={styles.footer}>
                    <Text>footer</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        flex:1,
        backgroundColor: 'red',
        width: '100%',
        justifyContent: 'center',
        
    },
    content:{
        flex:5,
        width: '100%',
    },
    footer:{
        flex:1,
        backgroundColor: 'black',
        width: '100%',
    },
    button:{
        width: 80,
        height:80,
        borderRadius: 40,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems:'center',
        position: 'absolute',
        top: 40,
        right:40,
        zIndex: 1000
    },
})