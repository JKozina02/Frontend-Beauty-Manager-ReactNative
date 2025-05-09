import { FlatList, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import ProductComponent from "../ui/ProductComponent";
import { HeadingComponent } from "../heading/HeadingComponent";

export const SalonsList = ({ data, title, onPress, tab }) => {
  if (!data || data.length === 0) {
    return <Text style={styles.emptyText}>No items to display</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapperTitle}>
        {title && <HeadingComponent children={title} level={3} color="#000000" />}
        <TouchableOpacity key={tab} style={[styles.tab]} onPress={onPress}>
          <Text style={[styles.tabText]}>{tab}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.salonId}
        renderItem={({ item }) => (
          <ProductComponent
            id={item.salonId}
            image={item.image}
            name={item.title}
            address={item.description}
            rating={item.rating || 0}
          />
        )}
        contentContainerStyle={styles.listContent}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    paddingHorizontal: 20,
  },
  listContent: {
    marginTop: 20,
  },
  emptyText: {
    textAlign: "center",
    color: "#888",
    fontSize: 16,
    marginVertical: 20,
  },
  tabText: {
    fontFamily: "KohSantepheap-Regular",
    fontSize: 15,
    color: "#E08573",
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
  wrapperTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
