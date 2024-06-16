import React from "react";
import { Text } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import LinearGradient from "react-native-linear-gradient";

const GradientText = (props: any) => {

  const { itemColor } = props
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={itemColor}>
        <Text {...props} style={[props.style, { opacity: 0 }]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;