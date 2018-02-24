import React, { PureComponent } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Ripple from 'react-native-material-ripple';
import PropTypes from 'prop-types';
import styles from './styles';

export default class MaterialButton extends PureComponent {
  
  getButtonStyle() {
    let disabled = this.props.disabled || this.props.isLoading;
    let opacity = this.props.isLoading ? 0.6 : 0.3;
    switch (true) {
      case this.props.flat && !disabled:
        return [styles.btn, this.props.style];

      case this.props.flat && disabled:
        return [styles.btn, { opacity: opacity }, this.props.style];

      case !this.props.flat && !disabled:
        return [styles.btn, styles.raised, { backgroundColor: this.props.color }, this.props.style];

      case !this.props.flat && disabled:
        return [styles.btn, styles.raised, { backgroundColor: this.props.color, opacity: opacity }, this.props.style];
    }
  }

  getTextStyle() {
    let defaultStyle = [styles.text];
    if (this.props.isLoading) {
      defaultStyle.push(styles.loadingText);
    }
    if (this.props.flat) {
      return [...defaultStyle, { color: this.props.color }, this.props.textStyle];
    } else {
      return [...defaultStyle, this.props.textStyle];
    }
  }

  renderLoadingAnim() {
    if (this.props.isLoading) {
      let color = this.props.flat ? this.props.color : '#ffffff';
      return <ActivityIndicator color={color} style={styles.loading}/>;
    }
    return null;
  }

  renderText() {
    if (this.props.isLoading && this.props.loadingText) {
      return <Text style={this.getTextStyle()}>{this.props.loadingText.toUpperCase()}</Text>;
    }
    return <Text style={this.getTextStyle()}>{this.props.text.toUpperCase()}</Text>;
  }

  render() {
    return (
      <Ripple onPress={this.props.onPress} disabled={this.props.disabled || this.props.isLoading}>
        <View style={this.getButtonStyle()}>
          {this.renderLoadingAnim()}
          {this.renderText()}
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
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  loadingText: PropTypes.string
};

MaterialButton.defaultProps = {
  flat: false,
  text: 'Button',
  color: '#039be5',
  disabled: false,
  isLoading: false,
  loadingText: ''
};