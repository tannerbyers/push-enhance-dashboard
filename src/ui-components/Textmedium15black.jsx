/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Textmedium15black(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="200px"
      height="23px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Textmedium15black")}
      {...rest}
    >
      <Text
        fontFamily="Poppins"
        fontSize="15px"
        fontWeight="500"
        color="rgba(25,42,62,1)"
        lineHeight="22.5px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="200px"
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
        children="Contact name <center>"
        {...getOverrideProps(overrides, "Contact name <center>")}
      ></Text>
    </View>
  );
}
