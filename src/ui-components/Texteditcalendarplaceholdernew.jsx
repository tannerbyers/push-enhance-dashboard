/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import Iconcontactschedule from "./Iconcontactschedule";
export default function Texteditcalendarplaceholdernew(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="302px"
      height="48px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Texteditcalendarplaceholdernew")}
      {...rest}
    >
      <Text
        fontFamily="Poppins"
        fontSize="13px"
        fontWeight="400"
        color="rgba(50,60,71,1)"
        lineHeight="19.5px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="264px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        bottom="7px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Office meet-up"
        {...getOverrideProps(overrides, "Office meet-up")}
      ></Text>
      <View
        width="302px"
        height="1px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        bottom="0px"
        left="0px"
        right="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(211,216,221,1)"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
      <Iconcontactschedule
        width="20px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="20px"
        right="4px"
        padding="0px 0px 0px 0px"
        opacity="0.5"
        {...getOverrideProps(overrides, "icon/contact/schedule")}
      ></Iconcontactschedule>
    </View>
  );
}