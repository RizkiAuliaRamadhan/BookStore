import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Baner1, Baner2} from '../../../assets';
import {SliderBox} from 'react-native-image-slider-box';
import {responsiveHeight, responsiveWidth, Colors} from '../../../utils';

export default class BannerSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [Baner1, Baner2],
    };
  }

  render() {
    return (
      <View style = {styles.container}>
        <SliderBox
          images={this.state.images}
          autoplay
          circleLoop
          sliderBoxHeight={responsiveHeight(140)}
          ImageComponentStyle={styles.slider}
          dotStyle={styles.dotStyle}
          dotColor={Colors.primary}
          imageLoadingColor={Colors.primary}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        marginTop: responsiveHeight(10)
    },
    slider: {
        borderRadius: 10,
        width: responsiveWidth(354),
    },
    dotStyle: {
        width: 10,
        height: 5,
        borderRadius: 5
    }
});
