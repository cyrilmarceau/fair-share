import { FlashList } from "@shopify/flash-list";
import { RefreshControl, StyleSheet, View } from "react-native";
import { Button, List, Text } from "react-native-paper";
import {
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
      <View style={styles.container}>
        <GlobalTitlePreview title="A recevoir" icon="arrow-up" />
        <GlobalTitlePreview title="A Payer" icon="arrow-down" />
      </View>

      <List.Subheader style={styles.dateHeader}>16 mars 2025</List.Subheader>

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
});

export default HomePage;
