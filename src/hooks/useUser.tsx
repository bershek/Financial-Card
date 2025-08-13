import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { userApi } from "@/api/userApi";
import { QUERY_KEYS } from "@/common/constants";
import { User } from "@/types";

export const useUser = (): UseQueryResult<User> => useQuery({ queryKey: QUERY_KEYS.user, queryFn: userApi.getUser });
