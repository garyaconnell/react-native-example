const { View, StyleSheet, Text } = require("react-native");

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textOneStyle}></View>
      <View style={styles.textTwoStyle}></View>
      <View style={styles.textThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "red",
    height: 200,
  },
  textOneStyle: {
    backgroundColor: "red",
    height: 100,
    width: 100,
    position: "absolute",
    top: 0,
    left: 0,
  },
  textTwoStyle: {
    backgroundColor: "green",
    height: 100,
    width: 100,
    position: "absolute",
    top: 100,
    left: "38%",
  },
  textThreeStyle: {
    backgroundColor: "purple",
    height: 100,
    width: 100,
    position: "absolute",
    top: 0,
    right: 0,
  },
});

export default BoxScreen;
