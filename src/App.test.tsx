import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render header", () => {
    const { getByTestId } = render(<App />);
    const header = getByTestId("header");
    expect(header).toBeInTheDocument();
  });

  describe("login", () => {
    it("should be able to login and logout", () => {
      const { getByText } = render(<App loginFeature={true}/>);
      const login = getByText("Login");
      expect(login).toBeInTheDocument();

      fireEvent.click(login);
      const logout = getByText("Logout");
      expect(logout).toBeInTheDocument();

      fireEvent.click(logout);
      expect(getByText("Login")).toBeInTheDocument();
    });
  });
});
