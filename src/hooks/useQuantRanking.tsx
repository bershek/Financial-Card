import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { quantRankingApi } from "@/api/quantRankingApi";
import { QUERY_KEYS } from "@/common/constants";
import { QuantRanking } from "@/types";

export const useQuantRanking = (): UseQueryResult<QuantRanking> =>
  useQuery<QuantRanking>({
    queryKey: QUERY_KEYS.quantRanking,
    queryFn: quantRankingApi.getQuantRanking,
  });
