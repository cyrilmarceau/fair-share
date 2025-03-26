import { FlashList } from "@shopify/flash-list";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { FAB, List } from "react-native-paper";
import {
  EmptyList,
  GlobalTitlePreview,
  TransactionCard,
} from "~/features/transactions/components";
import { useTransaction } from "~/features/transactions/hooks";

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
            id={transaction.id}
            direction={transaction.direction}
            title={transaction.title}
            amount={transaction.amount}
            category={transaction.category}
            to={transaction.to}
            due_date={transaction.due_date}
          />
        )}
        estimatedItemSize={200}
        ListEmptyComponent={
          <EmptyList
            onRefresh={(): void => router.push("(app)/(transaction)/create")}
          />
        }
      />

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={(): void => router.push("(app)/(transaction)/create")}
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
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default HomePage;
