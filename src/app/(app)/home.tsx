import { FlashList } from "@shopify/flash-list";
import { StyleSheet, View, Text } from "react-native";
import { List, Button } from "react-native-paper";
import {
  GlobalTitlePreview,
  TransactionCard,
} from "~/features/transactions/components";
import { useTransaction } from "~/features/transactions/hooks";
import { Feather } from "@expo/vector-icons";

type EmptyListComponentProps = {
  onRefresh: () => void;
};

const EmptyListComponent = ({ onRefresh }: EmptyListComponentProps) => {
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
        icon="refresh"
      >
        Rafraîchir
      </Button>
    </View>
  );
};

const HomePage = () => {
  const {
    transactions: { data, refetch, isRefetching },
  } = useTransaction();

  return (
    <>
      {data && data?.total > 0 && (
        <>
          <View style={styles.container}>
            <GlobalTitlePreview title="A recevoir" icon="arrow-up" />
            <GlobalTitlePreview title="A Payer" icon="arrow-down" />
          </View>

          <List.Subheader style={styles.dateHeader}>
            16 mars 2025
          </List.Subheader>
        </>
      )}

      <FlashList
        refreshing={isRefetching}
        onRefresh={refetch}
        data={data?.items}
        renderItem={({ item: transaction }) => (
          <TransactionCard
            direction={transaction.direction}
            title={transaction.title}
            amount={transaction.amount}
            category={transaction.category}
            to={transaction.to}
            due_date={transaction.due_date}
          />
        )}
        estimatedItemSize={200}
        ListEmptyComponent={<EmptyListComponent onRefresh={refetch} />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 20,
    paddingHorizontal: 16,
    gap: 12,
  },
  dateHeader: {
    marginTop: 16,
  },
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

export default HomePage;
