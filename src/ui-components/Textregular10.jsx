/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Textregular10(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="149px"
      height="16px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Textregular10")}
      {...rest}
    >
      <Text
        fontFamily="Poppins"
        fontSize="10px"
        fontWeight="400"
        color="rgba(25,42,62,1)"
        lineHeight="15px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="149px"
        height="16px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Closed deals"
        {...getOverrideProps(overrides, "Closed deals")}
      ></Text>
    </View>
  );
}
