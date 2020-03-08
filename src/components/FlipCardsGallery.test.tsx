import React from "react";
import { render, waitForElement, fireEvent } from "@testing-library/react";
import axios from "../utils/axios";
import { FlipCardsGallery } from "./FlipCardsGallery";
import MockAdapter from "axios-mock-adapter";
const mockAxios = new MockAdapter(axios);
import { cards } from "../fixture/japanese";

describe("FlipCards", () => {
  beforeEach(() => {
    mockAxios.reset();

    mockAxios.onGet("/flipcards").reply(200, cards);
  });
  it("should render the Component", async () => {
    const { getByTestId } = render(<FlipCardsGallery />);

    await waitForElement(() => getByTestId("flip-card"));
    expect(getByTestId("flip-cards")).toBeInTheDocument();
  });

  it("should render 1 card", async () => {
    const { getAllByTestId, getByTestId } = render(<FlipCardsGallery />);

    await waitForElement(() => getByTestId("flip-card"));
    expect(getAllByTestId("flip-card")).toHaveLength(1);
  });

  it("should render font of card", async () => {
    const { getByText, getByTestId } = render(<FlipCardsGallery />);

    await waitForElement(() => getByTestId("flip-card"));
    expect(getByText(/といあわせる/)).toBeInTheDocument();
  });

  it("should render back of card if defaultFrontValue is false", async () => {
    const { getByText, getByTestId } = render(
      <FlipCardsGallery defaultSide={false} />,
    );

    await waitForElement(() => getByTestId("flip-card"));
    expect(getByText(/Inquire/)).toBeInTheDocument();
  });

  it("should render back of card when clicked", async () => {
    const { getByText, getByTestId } = render(<FlipCardsGallery />);

    await waitForElement(() => getByTestId("flip-card"));
    const flipCard = getByTestId("flip-card");

    fireEvent.click(flipCard);
    expect(getByText(/Inquire/)).toBeInTheDocument();
  });
});
