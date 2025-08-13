import type { ReactElement } from "react";
import { describe, expect, it } from "vitest";

import { FactorGradesCard, QuantRankingCard, RatingsSummaryCard } from "@/features/ratingsDashboard/components";
import { getCardsConfig } from "@/features/ratingsDashboard/utils/getCardsConfig";

describe("getCardsConfig", () => {
  it("should return all cards with correct show flags for premium user", () => {
    const config = getCardsConfig(true);

    expect(config).toHaveLength(3);
    expect(config[0].show).toBe(true);
    expect(config[1].show).toBe(true);
    expect(config[2].show).toBe(true);

    expect((config[0].component as ReactElement).type).toBe(RatingsSummaryCard);
    expect((config[1].component as ReactElement).type).toBe(FactorGradesCard);
    expect((config[2].component as ReactElement).type).toBe(QuantRankingCard);
  });

  it("should hide premium-only cards for non-premium user", () => {
    const config = getCardsConfig(false);

    expect(config).toHaveLength(3);
    expect(config[0].show).toBe(false);
    expect(config[1].show).toBe(false);
    expect(config[2].show).toBe(true);
  });

  it("should treat undefined premium as non-premium", () => {
    const config = getCardsConfig();

    expect(config[0].show).toBe(false);
    expect(config[1].show).toBe(false);
    expect(config[2].show).toBe(true);
  });
});
