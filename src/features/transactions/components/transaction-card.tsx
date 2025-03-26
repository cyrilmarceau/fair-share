import { StyleSheet, View } from "react-native";
import {
  Avatar,
  Divider,
  Surface,
  Text,
  TouchableRipple,
  useTheme,
} from "react-native-paper";
import type { Transaction } from "../types";
import { useRouter } from "expo-router";

type TransactionCardProps = Omit<Transaction, "created_at" | "updated_at">;

const TransactionCard = ({
  id,
  direction,
  title,
  amount,
  category,
  to,
  due_date,
}: TransactionCardProps) => {
  const theme = useTheme();
  const isReceive = direction === "to_receive";

  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableRipple
        style={styles.ripple}
        borderless={true}
        onPress={() =>
          router.navigate({
            pathname: "(app)/(transaction)/[id]",
            params: { id },
          })
        }
      >
        <Surface style={styles.transactionCard} elevation={3}>
          <View style={styles.cardHeader}>
            <View style={styles.cardHeaderLeft}>
              <Avatar.Icon
                size={40}
                style={{
                  backgroundColor: isReceive
                    ? theme.colors.primary
                    : theme.colors.error,
                  marginRight: 12,
                }}
                color="white"
                icon={isReceive ? "arrow-up" : "arrow-down"}
              />
              <View>
                <Text variant="titleMedium" style={styles.cardTitle}>
                  {title}
                </Text>
                <Text
                  variant="bodySmall"
                  style={{ color: theme.colors.outline }}
                >
                  {due_date}
                </Text>
              </View>
            </View>
            <Text
              variant="titleMedium"
              style={{
                color: isReceive ? theme.colors.primary : theme.colors.error,
                fontWeight: "bold",
              }}
            >
              {isReceive ? "+" : "-"} {amount} €
            </Text>
          </View>

          <Divider style={styles.cardDivider} />

          <View style={styles.cardDetails}>
            <View style={styles.detailRow}>
              <Text variant="bodySmall" style={styles.detailLabel}>
                Catégorie:
              </Text>
              <Text variant="bodyMedium">{category}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text variant="bodySmall" style={styles.detailLabel}>
                Avec:
              </Text>
              <Text variant="bodyMedium">{to}</Text>
            </View>
          </View>
        </Surface>
      </TouchableRipple>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
  },
  ripple: {
    borderRadius: 13,
  },
  transactionCard: {
    borderRadius: 12,
    overflow: "hidden",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  cardHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardTitle: {
    fontWeight: "500",
  },
  cardDivider: {
    height: 1,
  },
  cardDetails: {
    padding: 16,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  detailLabel: {
    width: 80,
    color: "gray",
  },
});

export default TransactionCard;
