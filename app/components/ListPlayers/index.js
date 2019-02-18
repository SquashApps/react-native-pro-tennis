import React, { Component } from "react";
import * as PropTypes from "prop-types";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col
} from "react-native-table-component";

import { StyleSheet, View, Text, Button } from "react-native";
import players from "../../store";
export default class ListPlayers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Name", "Sex", "Skills"],
      tableData: []
    };
  }
  componentWillMount() {
    this.formatPlayerList(players);
  }

  formatPlayerList = players => {
    const formattedPlayers = players.map(player => Object.values(player));
    this.setState(() => ({ tableData: formattedPlayers }));
  };

  filter = (key, term) => {
    const filteredData = players.filter((player) => {
        if(player[key] === term) {
            return player;
        }
    })
    this.formatPlayerList(filteredData);
  }

  render() {
    return (
      <View>
        <View>
        <View>
        <Text style={{ fontWeight: 'bold'}}> Filter by gender : </Text>
            <Button
            onPress={() => this.filter('sex', 'Male')}
            title="Male"
            />
            <Button
            onPress={() => this.filter('sex', 'Female')}
            title="Female"
            />

            <Text style={{ fontWeight: 'bold'}}> Filter by Skills : </Text>
            <Button
            onPress={() => this.filter('skill', 'Expert')}
            title="Expert"
            />
            <Button
            onPress={() => this.filter('skill', 'Intermediate')}
            title="Intermediate"
            />
            <Button
            onPress={() => this.filter('skill', 'Beginner')}
            title="Beginner"
            />
      </View>
        </View>
        <View style={styles.container}>
          <Table style={styles.table}>
            <Row
              data={this.state.tableHead}
              style={styles.head}
              textStyle={styles.text}
            />
            <Rows
              data={this.state.tableData}
              style={styles.row}
              textStyle={styles.text}
            />
          </Table>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  wrapper: { flexDirection: "row" },
  row: { height: 28 },
  text: { textAlign: "center" }
});
