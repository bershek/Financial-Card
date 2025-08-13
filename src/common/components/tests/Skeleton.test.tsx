import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Skeleton } from "@/common/components/Skeleton";

describe("Skeleton", () => {
  it("renders container and header", () => {
    render(<Skeleton rows={2} />);
    expect(screen.getByTestId("skeleton-container")).toBeInTheDocument();
    expect(screen.getByTestId("skeleton-header")).toBeInTheDocument();
  });

  it("renders correct number of rows", () => {
    const rows = 5;
    render(<Skeleton rows={rows} />);
    for (let i = 0; i < rows; i++) {
      expect(screen.getByTestId(`skeleton-row-${i}`)).toBeInTheDocument();
      expect(screen.getByTestId(`skeleton-cell-${i}`)).toBeInTheDocument();
    }
  });

  it("each cell has correct classes", () => {
    render(<Skeleton rows={3} />);
    for (let i = 0; i < 3; i++) {
      const cell = screen.getByTestId(`skeleton-cell-${i}`);
      expect(cell).toHaveClass("h-4", "bg-gray-200", "rounded", "w-[100%]");
    }
  });
});
