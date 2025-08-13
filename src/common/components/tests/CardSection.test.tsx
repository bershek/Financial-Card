import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { CardSection } from "@/common/components/CardSection";

describe("CardSection", () => {
  it("renders title", () => {
    render(<CardSection title="Test Title">Content</CardSection>);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders children", () => {
    render(<CardSection title="Test Title">Child Content</CardSection>);
    expect(screen.getByText("Child Content")).toBeInTheDocument();
  });

  it("renders columns if provided", () => {
    const columns = ["Col1", "Col2"];

    render(
      <CardSection title="Test Title" columns={columns}>
        Content
      </CardSection>,
    );

    columns.forEach((col) => {
      expect(screen.getByText(col)).toBeInTheDocument();
    });
  });

  it("does not render thead if no columns", () => {
    const { container } = render(<CardSection title="Title">Content</CardSection>);
    expect(container.querySelector("thead")).toBeNull();
  });

  it("renders footer if provided", () => {
    render(
      <CardSection title="Title" footer={<div>Footer Content</div>}>
        Content
      </CardSection>,
    );
    expect(screen.getByText("Footer Content")).toBeInTheDocument();
  });
});
