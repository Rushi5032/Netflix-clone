import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { SignIn } from "../../pages";
import { FirebaseContext } from "../../context/firebase";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({}),
}));

const firebase = {
  auth: jest.fn(() => ({
    signInWithEmailAndPassword: jest.fn(() =>
      Promise.resolve("I am signed in!")
    ),
  })),
};

describe("<SignIn />", () => {
  it("renders the sign in page with a form submission", async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <SignIn />
        </FirebaseContext.Provider>
      </Router>
    );

    await act(async () => {
      await fireEvent.change(getByPlaceholderText("Enter your E-mail"), {
        target: { value: "borad@gmail.com" },
      });
      await fireEvent.change(getByPlaceholderText("Enter your password"), {
        target: { value: "123456" },
      });
      fireEvent.click(getByTestId("sign-in"));

      expect(getByPlaceholderText("Enter your E-mail").value).toBe(
        "borad@gmail.com"
      );
      expect(getByPlaceholderText("Enter your password").value).toBe("123456");
      expect(queryByTestId("error")).toBeFalsy();
    });
  });
});
