import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { ratingsSummaryApi } from "@/api/ratingsSummaryApi";
import { QUERY_KEYS } from "@/common/constants";
import { RatingsSummary } from "@/types";

export const useRatingsSummary = (): UseQueryResult<RatingsSummary> =>
  useQuery({
    queryKey: QUERY_KEYS.ratingsSummary,
    queryFn: ratingsSummaryApi.getRatingsSummary,
  });
