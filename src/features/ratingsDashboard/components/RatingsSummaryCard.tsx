import { CardSection, Skeleton, TableRow } from "@/common/components";
import { useRatingsSummary } from "@/hooks";

export const RatingsSummaryCard = () => {
  const { data, isError, isLoading } = useRatingsSummary();

  if (isError) {
    return <div className="text-red-500">Something went wrong</div>;
  }

  if (isLoading) {
    return <Skeleton rows={3} />;
  }

  return (
    <CardSection title="Ratings Summary">
      {(Object.keys(data) as string[]).map((key) => {
        const { rating, score } = data[key];
        const formattedScore = score.toFixed(2);

        return <TableRow key={key} label={key} values={[rating, formattedScore]} />;
      })}
    </CardSection>
  );
};
