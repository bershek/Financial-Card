const makeQueryKey = <T extends string>(key: T) => [key] as const;

export const QUERY_KEYS = {
  user: makeQueryKey("user"),
  ratingsSummary: makeQueryKey("ratings-summary"),
  quantRanking: makeQueryKey("quant-ranking"),
  factorGrades: makeQueryKey("factor-grades"),
};
