import { CardSection, Skeleton, TableRow } from "@/common/components";
import { RANKED_LABEL, TEXT_ALIGN } from "@/common/constants";
import { QuantRankingFooter } from "@/features/ratingsDashboard/components";
import { useQuantRanking } from "@/hooks";

export const QuantRankingCard = () => {
  const { data, isError, isLoading } = useQuantRanking();

  if (isError) {
    return <div className="text-red-500">Something went wrong</div>;
  }

  if (isLoading) {
    return <Skeleton rows={5} />;
  }

  const rankingKeys: Array<keyof typeof RANKED_LABEL> = data?.rankings
    ? (Object.keys(data.rankings) as Array<keyof typeof RANKED_LABEL>)
    : [];

  return (
    <CardSection title="Quant Ranking" footer={<QuantRankingFooter />}>
      <TableRow label="Sector" values={[data.sector]} reversedStyle textAlign={TEXT_ALIGN.RIGHT} withUnderLine />
      <TableRow label="Industry" values={[data.industry]} reversedStyle textAlign={TEXT_ALIGN.RIGHT} withUnderLine />
      {rankingKeys.map((key, index) => {
        const { rank, total } = data.rankings[key];
        const isLast = rankingKeys.length - 1 === index;
        const value = (
          <span>
            <b>{rank}</b> out of <b>{total}</b>
          </span>
        );

        return (
          <TableRow
            key={key}
            label={RANKED_LABEL[key]}
            values={[value]}
            reversedStyle
            textAlign={TEXT_ALIGN.RIGHT}
            withUnderLine={!isLast}
          />
        );
      })}
    </CardSection>
  );
};
