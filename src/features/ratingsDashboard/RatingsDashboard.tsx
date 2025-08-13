import { FC } from "react";

import { getCardsConfig } from "@/features/ratingsDashboard/utils/getCardsConfig";
import { useUser } from "@/hooks";

export const RatingsDashboard: FC = () => {
  const { data, isError, isLoading } = useUser();

  if (isError) {
    return <div className="text-red-500">Something went wrong</div>;
  }

  if (isLoading) {
    return <div className="text-grey-500">Loading dashboard...</div>;
  }

  const cards = getCardsConfig(data?.premium);

  return (
    <div className="flex flex-col justify-around max-w-[440px] bg-[#ececec] p-4 gap-4">
      {cards.map(({ show, component }) => (show ? component : null))}
    </div>
  );
};
