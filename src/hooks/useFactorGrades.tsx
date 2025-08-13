import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { factorGradesApi } from "@/api/factorGradesApi";
import { QUERY_KEYS } from "@/common/constants";
import { FactorGradesAll } from "@/types";

export const useFactorGrades = (): UseQueryResult<FactorGradesAll> =>
  useQuery<FactorGradesAll>({
    queryKey: QUERY_KEYS.factorGrades,
    queryFn: factorGradesApi.getFactorGradesAll,
  });
