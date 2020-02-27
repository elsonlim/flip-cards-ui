import React from "react";
import { render, waitForElement, act } from "@testing-library/react";
import axios from "../utils/axios";
import FlipCards from "./FlipCards";
import MockAdapter from "axios-mock-adapter";
const mockAxios = new MockAdapter(axios);
import { cards } from "../fixture/japanese";

describe("FlipCards", () => {
  beforeEach(() => {
    mockAxios.reset();

    mockAxios.onGet("/flipcards").reply(200, cards);
  });
  it("should render the Component", async () => {
    const { getByTestId } = render(<FlipCards />);

    await waitForElement(() => getByTestId("flip-card"));
    expect(getByTestId("flip-cards")).toBeInTheDocument();
  });

  it("should render 1 card", async () => {
    const { getAllByTestId, getByTestId } = render(<FlipCards />);

    await waitForElement(() => getByTestId("flip-card"));
    expect(getAllByTestId("flip-card")).toHaveLength(1);
  });
});
