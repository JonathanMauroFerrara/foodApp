import React from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type TIconButton = {
  iconType: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  color: string;
};

function IconButton({ onPress, iconType, color }: TIconButton) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={iconType} size={24} color={color} />
    </Pressable>
  );
}

export default IconButton;
