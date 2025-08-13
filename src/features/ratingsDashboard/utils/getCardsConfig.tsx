import type { ReactNode } from "react";

import { FactorGradesCard, QuantRankingCard, RatingsSummaryCard } from "@/features/ratingsDashboard/components";

export interface CardConfig {
  show: boolean;
  component: ReactNode;
}

export const getCardsConfig = (premium?: boolean): CardConfig[] => [
  {
    show: !!premium,
    component: <RatingsSummaryCard />,
  },
  {
    show: !!premium,
    component: <FactorGradesCard />,
  },
  {
    show: true,
    component: <QuantRankingCard />,
  },
];
