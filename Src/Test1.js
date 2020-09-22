import React from 'react';
import {Button, View, Text} from 'react-native';

export default class Test1 extends React.Component {
  static navigationOptions = ({navigation}) => ({
    header: null,
  });
  constructor() {
    super();
    this.state = {};
  }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then((responseJson)=> {
                this.setState({
                    loading: false,
                    dataSource: responseJson
                })
            })
            .catch(error=>console.log(error)) //to catch the errors if any
    }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>

      </View>
    );
  }
}
