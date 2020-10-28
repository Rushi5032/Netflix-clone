import React from "react";
import { render } from "@testing-library/react";
import { Home } from "../../pages";

jest.mock("react-router-dom");

test("renders the homepage", () => {
  const { getByText, getAllByText, getAllByPlaceholderText } = render(<Home />);
  expect(getByText("Unlimited films and TV programmes and more.")).toBeTruthy();
  expect(getByText("Watch anywhere. Cancel at any time.")).toBeTruthy();
  expect(getAllByPlaceholderText("Email address")).toBeTruthy();
  expect(getAllByText("Try It Now")).toBeTruthy();
  expect(
    getAllByText(
      "Ready to watch? Enter your Email to create or renew your membership"
    )
  ).toBeTruthy();
});
