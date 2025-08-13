export interface User {
  premium: boolean;
}

export interface RatingItem {
  rating: string;
  score: number;
}

export type RatingsSummary = {
  [key in string]: RatingItem;
};

export interface RankInfo {
  rank: number;
  total: number;
}

export type Rankings = {
  [key in string]: RankInfo;
};

export interface QuantRanking {
  industry: string;
  sector: string;
  rankings: Rankings;
}

export interface FactorValue {
  now: string;
  threeM: string;
  sixM: string;
}

export type FactorGradesAll = {
  [key in string]: FactorValue;
};
