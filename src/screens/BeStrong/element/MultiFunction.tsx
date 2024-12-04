import { Icon, StyleService, useStyleSheet } from "@ui-kitten/components";
import { HStack } from "components";
import React from "react";
import { TouchableOpacity} from "react-native";


const MultiFunction = React.memo(()=>{
    const styles = useStyleSheet(themedStyles);
    return(
<HStack mt={24} mb={12} itemsCenter justify="space-between">
            <HStack style={{ width: 145, height: 24 }}>
              <TouchableOpacity activeOpacity={0.8}>
                <Icon name="share" pack="assets" />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <Icon name="arrow_down" pack="assets" />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <Icon name="copy" pack="assets" />
              </TouchableOpacity>
            </HStack>
            <HStack>
              <TouchableOpacity activeOpacity={0.8} style={styles.buttonedit}>
                <Icon name="textT" pack="assets" />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.buttonedit}>
                <Icon name="copy" pack="assets" />
              </TouchableOpacity>
            </HStack>
          </HStack>
    )
})
export default MultiFunction;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    position: "relative",
  },
  button: {
    heigh: 64,
    borderRadius: 12,
    backgroundColor: "color-corn-100",
  },
  buttonedit: {
    justifyContent: "center",
    alignItems: "center",
    width: 48,
    height: 48,
    marginLeft: 12,
    borderRadius: 99,
    backgroundColor: "color-basic-1000",
  },
});


