/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Buttontertiarypressed(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="160px"
      height="20px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Buttontertiarypressed")}
      {...rest}
    >
      <Text
        fontFamily="Poppins"
        fontSize="13px"
        fontWeight="2009488384"
        color="rgba(9,142,223,1)"
        lineHeight="19.5px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="160px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Tertiary button"
        {...getOverrideProps(overrides, "Tertiary button")}
      ></Text>
    </View>
  );
}
