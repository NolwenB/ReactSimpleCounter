import { Button, StyleSheet, Text, View, Pressable, Animated, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
class ButtonGrids extends Component {
    constructor(props) {
        super(props);
    }
    createButton(number) {
        return (
        <Pressable
        key={number}
        style={styles.button}
        android_ripple={{color: "#fff"}}
        onPress={() => {this.props.onPress(number)}}>
            <Text style={styles.buttontext}>
                {"+" + number}
            </Text>
        </Pressable>
        );
    }
    render() {
        let buttons = [1,5,10,20]
        return (
            <View style={styles.buttons}>
                {buttons.map(button => this.createButton(button))}
            </View>
        )
    }
}
class PushupMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }
    updateCounter(number) {
        const newState = {count: this.state.count + number};
        this.setState(newState);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containercenter}>
                    <Text style={styles.number}>{this.state.count}</Text>
                    <StatusBar style="auto" />
                </View>
                <ButtonGrids onPress={(value) =>this.updateCounter(value)}/>
            </View>
        )
    }
}

const translationY = new Animated.Value(0);
const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent : 'space-between',
    },
    button: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#444c73',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 5,
        marginHorizontal: 15,
        marginVertical: 20,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#2d3145',
    },
    buttontext: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
    container: {
        flex: 1,
        backgroundColor: '#ddd',
    },
    containercenter: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    number: {
        fontSize: 64,
        fontWeight: 'bold',
        letterSpacing: 2,
        color: '#333',
    }
  });

export {PushupMenu};