import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { SignUp } from "../../pages";
import { FirebaseContext } from "../../context/firebase";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({}),
}));

const firebase = {
  auth: jest.fn(() => ({
    createUserWithEmailAndPassword: jest.fn(() =>
      Promise.resolve({
        user: {
          updateProfile: jest.fn(() => Promise.resolve("I am signed up!")),
        },
      })
    ),
  })),
};

describe("<SignUp />", () => {
  it("renders the sign up page with a form submission", async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <SignUp />
        </FirebaseContext.Provider>
      </Router>
    );

    await act(async () => {
      await fireEvent.change(getByPlaceholderText("Enter your firstname"), {
        target: { value: "Myoyo" },
      });
      await fireEvent.change(getByPlaceholderText("Enter your E-mail"), {
        target: { value: "karl@gmail.com" },
      });
      await fireEvent.change(getByPlaceholderText("Enter your password"), {
        target: { value: "123456" },
      });
      fireEvent.click(getByTestId("sign-up"));

      expect(getByPlaceholderText("Enter your E-mail").value).toBe(
        "karl@gmail.com"
      );
      expect(getByPlaceholderText("Enter your password").value).toBe("123456");
      expect(queryByTestId("error")).toBeFalsy();
    });
  });
});
