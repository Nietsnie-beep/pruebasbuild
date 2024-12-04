import * as React from "react";
import { FlatList, Image } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  StyleService,
  TopNavigation,
  useStyleSheet,
} from "@ui-kitten/components";
import { Container } from "components";
import { RootStackParamList } from "navigation/navigation-types";
import ButtonSpash, { ButtonSpashProps } from "./ButtonSpash";
import Images from "assets/images";
import { waitUtil } from "utils/waitUtil";

const SplashScreen = React.memo(() => {
  const styles = useStyleSheet(themedStyles);
  const refFlatList = React.useRef<FlatList>(null);
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const [activeIndex, setActiveIndex] = React.useState<number>(-1);

  const data: ButtonSpashProps[] = [
    {
      title: "Onboarding (10)",
      data: [
        {
          name: "Onboarding 01",
          navigate: () => navigate("Onboarding", { screen: "Onboarding01" }),
        },
        {
          name: "Onboarding 02",
          navigate: () => navigate("Onboarding", { screen: "Onboarding02" }),
        },
        {
          name: "Onboarding 03",
          navigate: () => navigate("Onboarding", { screen: "Onboarding03" }),
        },
        {
          name: "Onboarding 04",
          navigate: () => navigate("Onboarding", { screen: "Onboarding04" }),
        },
        {
          name: "Onboarding 05",
          navigate: () => navigate("Onboarding", { screen: "Onboarding05" }),
        },
        {
          name: "Onboarding 06",
          navigate: () => navigate("Onboarding", { screen: "Onboarding06" }),
        },
        {
          name: "Onboarding 07",
          navigate: () => navigate("Onboarding", { screen: "Onboarding07" }),
        },
        {
          name: "Onboarding 08",
          navigate: () => navigate("Onboarding", { screen: "Onboarding08" }),
        },
        {
          name: "Onboarding 09",
          navigate: () => navigate("Onboarding", { screen: "Onboarding09" }),
        },
        {
          name: "Onboarding 10",
          navigate: () => navigate("Onboarding", { screen: "Onboarding10" }),
        },
      ],
    },
    {
      title: "Authentication (10)",
      data: [
        {
          name: "SignIn 01",
          navigate: () => navigate("Auth", { screen: "SignIn01" }),
        },
        {
          name: "SignIn 02",
          navigate: () => navigate("Auth", { screen: "SignIn02" }),
        },
        {
          name: "SignIn 03",
          navigate: () => navigate("Auth", { screen: "SignIn03" }),
        },
        {
          name: "SignUp 01",
          navigate: () => navigate("Auth", { screen: "SignUp01" }),
        },
        {
          name: "SignUp 02",
          navigate: () => navigate("Auth", { screen: "SignUp02" }),
        },
        {
          name: "SignUp 03",
          navigate: () => navigate("Auth", { screen: "SignUp03" }),
        },
        {
          name: "Forgot Password",
          navigate: () => navigate("Auth", { screen: "ForgotPassword" }),
        },
        {
          name: "Verify",
          navigate: () => navigate("Auth", { screen: "Verify" }),
        },
        {
          name: "Create Account",
          navigate: () => navigate("Auth", { screen: "CreateAccount" }),
        },
        {
          name: "Authenticate",
          navigate: () => navigate("Auth", { screen: "Authenticate" }),
        },
      ],
    },
    {
      title: "Social (10)",
      data: [
        {
          name: "01. New Feed",
          navigate: () => navigate("Social", { screen: "Social01" }),
        },
        {
          name: "02. Search",
          navigate: () => navigate("Social", { screen: "Social02" }),
        },
        {
          name: "03. Home - View photo, video",
          navigate: () => navigate("Social", { screen: "Social03" }),
        },
        {
          name: "04. Home - Raise",
          navigate: () => navigate("Social", { screen: "Social04" }),
        },
        {
          name: "05. View 24h story",
          navigate: () => navigate("Social", { screen: "Social05" }),
        },
        {
          name: "06. Find friend",
          navigate: () => navigate("Social", { screen: "Social06" }),
        },
        {
          name: "07. Message - Contact",
          navigate: () => navigate("Social", { screen: "Social07" }),
        },
        {
          name: "08. Messenger - Conversation",
          navigate: () => navigate("Social", { screen: "Social08" }),
        },
        {
          name: "09. Messenger - Send photo, voice",
          navigate: () => navigate("Social", { screen: "Social09" }),
        },
        {
          name: "10. Messenger - Video call",
          navigate: () => navigate("Social", { screen: "Social10" }),
        },
      ],
    },
    {
      title: "Profile (10)",
      data: [
        {
          name: "Profile 01",
          navigate: () => navigate("Profile", { screen: "Profile01" }),
        },
        {
          name: "Profile 02",
          navigate: () => navigate("Profile", { screen: "Profile02" }),
        },
        {
          name: "Profile 03",
          navigate: () => navigate("Profile", { screen: "Profile03" }),
        },
        {
          name: "Profile 04",
          navigate: () => navigate("Profile", { screen: "Profile04" }),
        },
        {
          name: "Profile 05",
          navigate: () => navigate("Profile", { screen: "Profile05" }),
        },
        {
          name: "Profile 06",
          navigate: () => navigate("Profile", { screen: "Profile06" }),
        },
        {
          name: "Profile 07",
          navigate: () => navigate("Profile", { screen: "Profile07" }),
        },
        {
          name: "Profile 08",
          navigate: () => navigate("Profile", { screen: "Profile08" }),
        },
        {
          name: "Profile 09",
          navigate: () => navigate("Profile", { screen: "Profile09" }),
        },
        {
          name: "Profile 10",
          navigate: () => navigate("Profile", { screen: "Profile10" }),
        },
      ],
    },
    {
      title: "Food Delivery (10)",
      data: [
        {
          name: "01. Home",
          navigate: () =>
            navigate("FoodDelivery", { screen: "FoodDelivery01" }),
        },
        {
          name: "02. Food & Drink",
          navigate: () =>
            navigate("FoodDelivery", { screen: "FoodDelivery02" }),
        },
        {
          name: "03. Food Details",
          navigate: () =>
            navigate("FoodDelivery", { screen: "FoodDelivery03" }),
        },
        {
          name: "04. Restaurent",
          navigate: () =>
            navigate("FoodDelivery", { screen: "FoodDelivery04" }),
        },
        {
          name: "05. Restaurent Details",
          navigate: () =>
            navigate("FoodDelivery", { screen: "FoodDelivery05" }),
        },
        {
          name: "06. My Order",
          navigate: () =>
            navigate("FoodDelivery", { screen: "FoodDelivery06" }),
        },
        {
          name: "07. My Order Details",
          navigate: () =>
            navigate("FoodDelivery", { screen: "FoodDelivery07" }),
        },
        {
          name: "08. Payment",
          navigate: () =>
            navigate("FoodDelivery", { screen: "FoodDelivery08" }),
        },
        {
          name: "09. Success",
          navigate: () =>
            navigate("FoodDelivery", { screen: "FoodDelivery09" }),
        },
        {
          name: "10. Tracking Order",
          navigate: () =>
            navigate("FoodDelivery", { screen: "FoodDelivery10" }),
        },
      ],
    },
    {
      title: "Finance (13)",
      data: [
        {
          name: "Finance 01",
          navigate: () => navigate("Finance", { screen: "Finance01" }),
        },
        {
          name: "Finance 02",
          navigate: () => navigate("Finance", { screen: "Finance02" }),
        },
        {
          name: "Finance 03",
          navigate: () => navigate("Finance", { screen: "Finance03" }),
        },
        {
          name: "Finance 04",
          navigate: () => navigate("Finance", { screen: "Finance04" }),
        },
        {
          name: "Finance 05",
          navigate: () => navigate("Finance", { screen: "Finance05" }),
        },
        {
          name: "Finance 06",
          navigate: () => navigate("Finance", { screen: "Finance06" }),
        },
        {
          name: "Finance 07",
          navigate: () => navigate("Finance", { screen: "Finance07" }),
        },
        {
          name: "Finance 08",
          navigate: () => navigate("Finance", { screen: "Finance08" }),
        },
        {
          name: "Finance 09",
          navigate: () => navigate("Finance", { screen: "Finance09" }),
        },
        {
          name: "Finance 10",
          navigate: () => navigate("Finance", { screen: "Finance10" }),
        },
        {
          name: "Finance 11",
          navigate: () => navigate("Finance", { screen: "Finance11" }),
        },
        {
          name: "Finance 12",
          navigate: () => navigate("Finance", { screen: "Finance12" }),
        },
        {
          name: "Finance 13",
          navigate: () => navigate("Finance", { screen: "Finance13" }),
        },
      ],
    },

    {
      title: "E-Commerce (10)",
      data: [
        {
          name: "01. Home-01",
          navigate: () => {
            navigate("ECommerce", { screen: "ECommerce01" });
          },
        },
        {
          name: "02. Home-02",
          navigate: () => {
            navigate("ECommerce", { screen: "ECommerce02" });
          },
        },
        {
          name: "03. Grid Product",
          navigate: () => {
            navigate("ECommerce", { screen: "ECommerce03" });
          },
        },
        {
          name: "04. List Product",
          navigate: () => {
            navigate("ECommerce", { screen: "ECommerce04" });
          },
        },
        {
          name: "05. Product Details",
          navigate: () => {
            navigate("ECommerce", { screen: "ECommerce05" });
          },
        },
        {
          name: "06. Shop-Reviews",
          navigate: () => {
            navigate("ECommerce", { screen: "ECommerce06" });
          },
        },
        {
          name: "07. Add to cart",
          navigate: () => {
            navigate("ECommerce", { screen: "ECommerce07" });
          },
        },
        {
          name: "08. Checkout",
          navigate: () => {
            navigate("ECommerce", { screen: "ECommerce08" });
          },
        },
        {
          name: "09. Order tracking",
          navigate: () => {
            navigate("ECommerce", { screen: "ECommerce09" });
          },
        },
        {
          name: "10. View cart",
          navigate: () => {
            navigate("ECommerce", { screen: "ECommerce10" });
          },
        },
      ],
    },
    {
      title: "Reading (10)",
      data: [
        {
          name: "01. Home Reading",
          navigate: () => navigate("Reading", { screen: "Reading01" }),
        },
        {
          name: "02. List Book",
          navigate: () => navigate("Reading", { screen: "Reading02" }),
        },
        {
          name: "03. Book Details",
          navigate: () => navigate("Reading", { screen: "Reading03" }),
        },
        {
          name: "04. Question",
          navigate: () => navigate("Reading", { screen: "Reading04" }),
        },
        {
          name: "05. Listen Book",
          navigate: () => navigate("Reading", { screen: "Reading05" }),
        },
        {
          name: "06. Bookmark Collection",
          navigate: () => navigate("Reading", { screen: "Reading06" }),
        },
        {
          name: "07. Bookmark List",
          navigate: () => navigate("Reading", { screen: "Reading07" }),
        },
        {
          name: "08. Checkout",
          navigate: () => navigate("Reading", { screen: "Reading08" }),
        },
        {
          name: "09. Order Tracking",
          navigate: () => navigate("Reading", { screen: "Reading09" }),
        },
        {
          name: "10. Home-Book",
          navigate: () => navigate("Reading", { screen: "Reading10" }),
        },
      ],
    },
    {
      title: "Fitness (10)",
      data: [
        {
          name: "01. Home Fitness",
          navigate: () => navigate("Fitness", { screen: "Fitness01" }),
        },
        {
          name: "02. Select Gender",
          navigate: () => navigate("Fitness", { screen: "Fitness02" }),
        },
        {
          name: "03. Workout Plans",
          navigate: () => navigate("Fitness", { screen: "Fitness03" }),
        },
        {
          name: "04. Running",
          navigate: () => navigate("Fitness", { screen: "Fitness04" }),
        },
        {
          name: "05. Muscles Condition Heatmap",
          navigate: () => navigate("Fitness", { screen: "Fitness05" }),
        },
        {
          name: "06. Workout List",
          navigate: () => navigate("Fitness", { screen: "Fitness06" }),
        },
        {
          name: "07. Tranning Count",
          navigate: () => navigate("Fitness", { screen: "Fitness07" }),
        },
        {
          name: "08. Set Plan",
          navigate: () => navigate("Fitness", { screen: "Fitness09" }),
        },
        {
          name: "09. Achievement",
          navigate: () => navigate("Fitness", { screen: "Fitness09" }),
        },
        {
          name: "10. Activity",
          navigate: () => navigate("Fitness", { screen: "Fitness10" }),
        },
      ],
    },
    {
      title: "Health (10)",
      data: [
        {
          name: "01. Home Health",
          navigate: () => navigate("Health", { screen: "Health01" }),
        },
        {
          name: "02. Update Weight",
          navigate: () => navigate("Health", { screen: "Health02" }),
        },
        {
          name: "03. Water Goal",
          navigate: () => navigate("Health", { screen: "Health03" }),
        },
        {
          name: "04. Add Food",
          navigate: () => navigate("Health", { screen: "Health04" }),
        },
        {
          name: "05. Food Information",
          navigate: () => navigate("Health", { screen: "Health05" }),
        },
        {
          name: "06. Add Food List",
          navigate: () => navigate("Health", { screen: "Health06" }),
        },
        {
          name: "07. Repcies",
          navigate: () => navigate("Health", { screen: "Health07" }),
        },
        {
          name: "08. Set Plan",
          navigate: () => navigate("Health", { screen: "Health08" }),
        },
        {
          name: "09. Plan Details",
          navigate: () => navigate("Health", { screen: "Health09" }),
        },
        {
          name: "10. Activity",
          navigate: () => navigate("Health", { screen: "Health10" }),
        },
      ],
    },
    {
      title: "Crypto (10)",
      data: [
        {
          name: "01. Home Crypto",
          navigate: () => navigate("Crypto", { screen: "Crypto01" }),
        },
        {
          name: "02. List Coin Price",
          navigate: () => navigate("Crypto", { screen: "Crypto02" }),
        },
        {
          name: "03. Wallet",
          navigate: () => navigate("Crypto", { screen: "Crypto03" }),
        },
        {
          name: "04. Pool Lottery",
          navigate: () => navigate("Crypto", { screen: "Crypto04" }),
        },
        {
          name: "05. Overview",
          navigate: () => navigate("Crypto", { screen: "Crypto05" }),
        },
        {
          name: "06. Raise IDO",
          navigate: () => navigate("Crypto", { screen: "Crypto06" }),
        },
        {
          name: "07. Overview",
          navigate: () => navigate("Crypto", { screen: "Crypto07" }),
        },
        {
          name: "08. Swap",
          navigate: () => navigate("Crypto", { screen: "Crypto08" }),
        },
        {
          name: "09. Pool List",
          navigate: () => navigate("Crypto", { screen: "Crypto09" }),
        },
        {
          name: "10. Farm",
          navigate: () => navigate("Crypto", { screen: "Crypto10" }),
        },
      ],
    },
    {
      title: "Menu Navigation (10)",
      data: [
        { name: "01", navigate: () => navigate("Menu", { screen: "Menu01" }) },
        { name: "02", navigate: () => navigate("Menu", { screen: "Menu02" }) },
        { name: "03", navigate: () => navigate("Menu", { screen: "Menu03" }) },
        { name: "04", navigate: () => navigate("Menu", { screen: "Menu04" }) },
        { name: "05", navigate: () => navigate("Menu", { screen: "Menu05" }) },
        { name: "06", navigate: () => navigate("Menu", { screen: "Menu06" }) },
        { name: "07", navigate: () => navigate("Menu", { screen: "Menu07" }) },
        { name: "08", navigate: () => navigate("Menu", { screen: "Menu08" }) },
        { name: "09", navigate: () => navigate("Menu", { screen: "Menu09" }) },
        { name: "10", navigate: () => navigate("Menu", { screen: "Menu10" }) },
      ],
    },
    {
      title: "Price Plan (10)",
      data: [
        {
          name: "01. PricePlan 01",
          navigate: () => navigate("PricePlan", { screen: "PricePlan01" }),
        },
        {
          name: "01. PricePlan 02",
          navigate: () => navigate("PricePlan", { screen: "PricePlan02" }),
        },
        {
          name: "01. PricePlan 03",
          navigate: () => navigate("PricePlan", { screen: "PricePlan03" }),
        },
        {
          name: "01. PricePlan 04",
          navigate: () => navigate("PricePlan", { screen: "PricePlan04" }),
        },
        {
          name: "01. PricePlan 05",
          navigate: () => navigate("PricePlan", { screen: "PricePlan05" }),
        },
        {
          name: "01. PricePlan 06",
          navigate: () => navigate("PricePlan", { screen: "PricePlan06" }),
        },
        {
          name: "01. PricePlan 07",
          navigate: () => navigate("PricePlan", { screen: "PricePlan07" }),
        },
        {
          name: "01. PricePlan 08",
          navigate: () => navigate("PricePlan", { screen: "PricePlan08" }),
        },
        {
          name: "01. PricePlan 09",
          navigate: () => navigate("PricePlan", { screen: "PricePlan09" }),
        },
        {
          name: "01. PricePlan 10",
          navigate: () => navigate("PricePlan", { screen: "PricePlan10" }),
        },
      ],
    },
    {
      title: "Be Strong (13)",
      data: [
        {
          name: "01. Onboarding",
          navigate: () => navigate("BeStrong", { screen: "Onboarding" }),
        },
        {
          name: "02. SignIn",
          navigate: () => navigate("BeStrong", { screen: "SignIn" }),
        },
        {
          name: "03. Menu",
          navigate: () => navigate("BeStrong", { screen: "Menu" }),
        },
        {
          name: "04. Categories",
          navigate: () => navigate("BeStrong", { screen: "Categories" }),
        },
        {
          name: "05. QuotesDetails",
          navigate: () => navigate("BeStrong", { screen: "QuotesDetails" }),
        },
        {
          name: "06. Categories 01",
          navigate: () => navigate("BeStrong", { screen: "Categories1" }),
        },
        {
          name: "07. HomePage",
          navigate: () => navigate("BeStrong", { screen: "HomePage" }),
        },
        {
          name: "08. Author",
          navigate: () => navigate("BeStrong", { screen: "Author" }),
        },
        {
          name: "09. QuotesDetails 01",
          navigate: () => navigate("BeStrong", { screen: "Quotes_Details" }),
        },
        {
          name: "10. Categories 02",
          navigate: () => navigate("BeStrong", { screen: "Categories2" }),
        },
        {
          name: "11. Categories 03",
          navigate: () => navigate("BeStrong", { screen: "Categories3" }),
        },
        {
          name: "12. UpgradePremium",
          navigate: () => navigate("BeStrong", { screen: "UpgradePremium" }),
        },
        {
          name: "13. Success",
          navigate: () => navigate("BeStrong", { screen: "Success" }),
        },
      ],
    },
  ];

  React.useEffect(() => {
    if (activeIndex >= 0) {
      waitUtil(350).then(() => {
        refFlatList.current?.scrollToIndex({
          index: activeIndex,
          viewOffset: 0.1,
          viewPosition: 0.1,
          animated: true,
        });
      });
    }
  }, [activeIndex]);

  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryLeft={() => <Image source={Images.logo} />}
        // accessoryRight={() => (
        //   <Button children={"120+ screens"} style={styles.headerButton} />
        // )}
      />
      <FlatList
        ref={refFlatList}
        data={data}
        contentContainerStyle={styles.content}
        renderItem={({ item, index }) => {
          return (
            <ButtonSpash
              title={item.title}
              data={item.data}
              open={activeIndex === index}
              onPress={() => {
                if (activeIndex === index) {
                  setActiveIndex(-1);
                } else {
                  setActiveIndex(index);
                }
              }}
              style={
                index === 0 &&
                styles.firstButton &&
                index === data.length - 1 &&
                styles.lastButton
              }
            />
          );
        }}
      />
    </Container>
  );
});

export default SplashScreen;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  button: {
    marginBottom: 24,
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 16,
  },
  content: {
    paddingBottom: 40,
    paddingTop: 24,
    borderRadius: 16,
  },
  lastButton: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  firstButton: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  headerButton: {
    borderRadius: 99,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
});
