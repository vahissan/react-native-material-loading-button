import React, { PureComponent } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Ripple from 'react-native-material-ripple';
import PropTypes from 'prop-types';
import styles from './styles';

export default class MaterialButton extends PureComponent {
  
  getButtonStyle() {
    switch (true) {
      case this.props.flat && !this.props.disabled:
        return [styles.btn, this.props.style];

      case this.props.flat && this.props.disabled:
        return [styles.btn, { opacity: 0.3 }, this.props.style];

      case !this.props.flat && !this.props.disabled:
        return [styles.btn, styles.raised, { backgroundColor: this.props.color }, this.props.style];

      case !this.props.flat && this.props.disabled:
        return [styles.btn, styles.raised, { backgroundColor: this.props.color, opacity: 0.3 }, this.props.style];
    }
  }

  getTextStyle() {
    if (this.props.flat) {
      return [styles.text, { color: this.props.color }, this.props.textStyle];
    } else {
      return [styles.text, this.props.textStyle];
    }
  }

  render() {
    return (
      <Ripple onPress={this.props.onPress} disabled={this.props.disabled}>
        <View style={this.getButtonStyle()}>
          <Text style={this.getTextStyle()}>{this.props.text.toUpperCase()}</Text>
        </View>
      </Ripple>
    );
  }

}

MaterialButton.propTypes = {
  flat: PropTypes.bool,
  text: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.number || PropTypes.object,
  textStyle: PropTypes.number || PropTypes.object,
  disabled: PropTypes.bool
};

MaterialButton.defaultProps = {
  flat: false,
  text: 'Button',
  color: '#039be5',
  disabled: false
};