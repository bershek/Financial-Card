import { apiClient } from "@/api/apiClient";
import { API } from "@/common/constants";
import { User } from "@/types";

export const userApi = {
  getUser: async (): Promise<User> => {
    const { data } = await apiClient.get(API.USER);

    return data;
  },
};
