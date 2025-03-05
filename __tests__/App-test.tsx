import { render } from "@testing-library/react-native";
import Page from "~/app";

describe("<Page />", () => {
  test("Text renders correctly on HomeScreen", () => {
    const { getByText } = render(<Page />);

    getByText("Welcome!");
  });
});
