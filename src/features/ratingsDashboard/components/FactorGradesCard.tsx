import { CardSection, Skeleton, TableRow } from "@/common/components";
import { useFactorGrades } from "@/hooks";

const columns = ["", "Now", "3M ago", "6M ago"];

export const FactorGradesCard = () => {
  const { data, isError, isLoading } = useFactorGrades();

  if (isError) {
    return <div className="text-red-500">Something went wrong</div>;
  }

  if (isLoading) {
    return <Skeleton rows={5} />;
  }

  const factorGradesKeys = Object.keys(data);
  return (
    <CardSection title="Factor Grades" columns={columns}>
      {factorGradesKeys.map((key) => (
        <TableRow key={key} label={key} values={[data[key].now, data[key].threeM, data[key].sixM]} />
      ))}
    </CardSection>
  );
};
