/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Buttonsecondarypressed(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="160px"
      height="42px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Buttonsecondarypressed")}
      {...rest}
    >
      <View
        width="160px"
        height="42px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        bottom="0px"
        left="0px"
        right="0px"
        border="1px SOLID rgba(9,142,223,1)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
      <Text
        fontFamily="Poppins"
        fontSize="13px"
        fontWeight="2009664512"
        color="rgba(9,142,223,1)"
        lineHeight="19.5px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="140px"
        height="22px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="23.81%"
        bottom="23.81%"
        left="6.25%"
        right="6.25%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Secondary button"
        {...getOverrideProps(overrides, "Secondary button")}
      ></Text>
    </View>
  );
}
