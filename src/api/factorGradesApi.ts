import { apiClient } from "@/api/apiClient";
import { API } from "@/common/constants";
import { FactorValue } from "@/types";

export const factorGradesApi = {
  getFactorGradesAll: async (): Promise<Record<string, FactorValue>> => {
    const [nowRes, threeMRes, sixMRes] = await Promise.all([
      apiClient.get(API.FACTOR_GRADES.NOW),
      apiClient.get(API.FACTOR_GRADES["3M"]),
      apiClient.get(API.FACTOR_GRADES["6M"]),
    ]);

    const now = nowRes.data;
    const threeM = threeMRes.data;
    const sixM = sixMRes.data;

    const factors = Object.keys(now);

    const result: Record<string, FactorValue> = {};

    factors.forEach((factor) => {
      result[factor] = {
        now: now[factor]?.current ?? "",
        threeM: threeM[factor] ?? "",
        sixM: sixM?.data?.find((arr: [string, string]) => arr[0] === factor)?.[1] ?? "",
      };
    });

    return result;
  },
};
