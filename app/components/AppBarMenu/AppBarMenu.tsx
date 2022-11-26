import React from "react";
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function AppBarMenu() {
  return (
    <AppBar
      title="HOME"
      leading={(props) => (
        <IconButton
          icon={(props) => <Icon name="menu" {...props} />}
          {...props}
        />
      )}
      trailing={(props) => (
        <HStack>
          <IconButton
            icon={(props) => <Icon name="magnify" {...props} />}
            {...props}
          />
          <IconButton
            icon={(props) => <Icon name="dots-vertical" {...props} />}
            {...props}
          />
        </HStack>
      )}
    />
  );
}
