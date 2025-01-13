import { render, screen } from "@testing-library/react";
import Card from "../Card";
import nextImage from "../../../public/next.svg";
import '@testing-library/jest-dom'

describe("CardComponent", () => {
  const mockProps = {
    name: "Next.js",
    description: "A React framework for production.",
    image: nextImage,
  };

  it("renders the card with the correct name, description, and image", () => {
    render(<Card {...mockProps} />);

    expect(screen.getByText(mockProps.name)).toBeInTheDocument();

    expect(screen.getByText(mockProps.description)).toBeInTheDocument();

    const image = screen.getByAltText(mockProps.name);
    expect(image).toBeInTheDocument();
  });

  it("applies the correct styling and classes", () => {
    render(<Card {...mockProps} />);

    const card = screen.getByRole("img", { name: mockProps.name }).parentElement;

    expect(card).toHaveClass("hover:shadow-xl");
    expect(card).toHaveStyle("width: 300px");
  });
});
