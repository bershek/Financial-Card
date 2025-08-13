import { apiClient } from "@/api/apiClient";
import { API } from "@/common/constants";
import { QuantRanking } from "@/types";

export const quantRankingApi = {
  getQuantRanking: async (): Promise<QuantRanking> => {
    const { data } = await apiClient.get(API.QUANT_RANKING);

    return data;
  },
};
