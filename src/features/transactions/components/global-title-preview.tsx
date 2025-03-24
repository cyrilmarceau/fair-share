import { Avatar, Card, Text, useTheme } from "react-native-paper";

type GlobalTitlePreviewProps = {
  title: string;
  icon: string;
};

const GlobalTitlePreview = ({ title, icon }: GlobalTitlePreviewProps) => {
  const theme = useTheme();

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
            style={{ backgroundColor: theme.colors.primary }}
            color="white"
            icon={icon}
          />
        )}
      />
      <Card.Content>
        <Text variant="titleLarge">+ 200$</Text>
      </Card.Content>
    </Card>
  );
};

export default GlobalTitlePreview;
