import { Avatar, Card, Text, useTheme } from "react-native-paper";
import { useTransaction } from "../hooks";

type GlobalTitlePreviewProps = {
  title: string;
  icon: string;
  direction?: "to_receive" | "to_pay";
};

const GlobalTitlePreview = ({
  title,
  icon,
  direction,
}: GlobalTitlePreviewProps) => {
  const theme = useTheme();

  const {
    amount: { data, isRefetching, error },
  } = useTransaction();

  const isReceive = direction === "to_receive";
  const amount = isReceive
    ? `+ ${data?.total_to_receive} €`
    : `- ${data?.total_to_pay} €`;

  return (
    <Card
      elevation={0}
      style={{
        flex: 1,
        borderColor: theme.colors.primary,
        borderWidth: 1,
        marginRight: 10,
      }}
    >
      <Card.Title
        leftStyle={{ width: 25 }}
        title={title}
        titleStyle={{ height: 15 }}
        titleVariant="labelSmall"
        left={(props) => (
          <Avatar.Icon
            {...props}
            size={25}
            color="white"
            icon={icon}
            style={{
              backgroundColor: isReceive
                ? theme.colors.primary
                : theme.colors.error,
              marginRight: 12,
            }}
          />
        )}
      />
      <Card.Content>
        <Text variant="titleLarge">{amount}</Text>
      </Card.Content>
    </Card>
  );
};

export default GlobalTitlePreview;
