import React, { Component } from "react";
import { Text, View } from 'react-native';

class ShowResults extends Component {
    render() {
        var results = this.props.results;

        return Object.keys(results).map((obj, i) => {
            return (
                <View>
                    <Text />
                    <Text>HIV: {results[obj].hiv}</Text>
                    <Text>SYPHILIS: {results[obj].syphilis}</Text>
                    <Text>Date: {results[obj].date}</Text>
                    <Text>ID: {results[obj].id}</Text>
                    <Text />
                </View>
            )
        })
    };
}

export { ShowResults };
