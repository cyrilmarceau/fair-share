import { Feather } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

type EmptyListProps = {
  onRefresh: () => void;
};

const EmptyList = ({ onRefresh }: EmptyListProps) => {
  return (
    <View style={styles.emptyContainer}>
      <Feather name="inbox" size={64} color="#9e9e9e" />
      <Text style={styles.emptyTitle}>Aucune transaction</Text>
      <Text style={styles.emptySubtitle}>
        Vous n'avez pas encore de transactions à afficher.
      </Text>
      <Button
        mode="contained"
        onPress={onRefresh}
        style={styles.refreshButton}
        icon="plus"
      >
        Créer une transaction
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
    color: "#424242",
  },
  emptySubtitle: {
    fontSize: 16,
    color: "#757575",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 24,
  },
  refreshButton: {
    marginTop: 12,
  },
});

export default EmptyList;
