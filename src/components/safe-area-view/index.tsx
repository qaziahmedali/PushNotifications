import React, { ReactNode } from "react";
import { View } from "react-native";
// styles
import styles from "./styles";

interface SafeAreaProps {
  children?: ReactNode;
}

const SafeArea: React.FC<SafeAreaProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export { SafeArea };
