import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { TableRow } from "@/common/components/TableRow";
import { TEXT_ALIGN } from "@/common/constants";

describe("TableRow", () => {
  it("renders the label correctly, replacing underscores", () => {
    render(
      <table>
        <tbody>
          <TableRow label="Test_Label" values={["Value1"]} />
        </tbody>
      </table>,
    );

    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("renders all values", () => {
    render(
      <table>
        <tbody>
          <TableRow label="Label" values={["Val1", "Val2", 3]} />
        </tbody>
      </table>,
    );

    expect(screen.getByText("Val1")).toBeInTheDocument();
    expect(screen.getByText("Val2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("applies correct text alignment classes", () => {
    const { container } = render(
      <table>
        <tbody>
          <TableRow label="Label" values={["Val"]} textAlign={TEXT_ALIGN.RIGHT} />
        </tbody>
      </table>,
    );

    const tds = container.querySelectorAll("td");
    expect(tds[1]).toHaveClass("text-right");
  });

  it("applies reversedStyle and withUnderLine classes correctly", () => {
    const { container } = render(
      <table>
        <tbody>
          <TableRow label="Label" values={["Val"]} reversedStyle withUnderLine />
        </tbody>
      </table>,
    );

    const tr = container.querySelector("tr");
    const tds = container.querySelectorAll("td");

    expect(tr).toHaveClass("border-b border-gray-300");
    expect(tds[1]).toHaveClass("text-blue-600");
    expect(tds[0]).not.toHaveClass("text-blue-600");
  });
});
