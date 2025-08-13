import { apiClient } from "@/api/apiClient";
import { API } from "@/common/constants";
import { RatingsSummary } from "@/types";

export const ratingsSummaryApi = {
  getRatingsSummary: async (): Promise<RatingsSummary> => {
    const { data } = await apiClient.get(API.RATINGS_SUMMARY);

    return data;
  },
};
