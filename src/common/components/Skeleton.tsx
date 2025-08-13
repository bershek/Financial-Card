import classNames from "classnames";

interface SkeletonCardSectionProps {
  rows: number;
}

export const Skeleton: React.FC<SkeletonCardSectionProps> = ({ rows }) => {
  const rowArray = Array.from({ length: rows });

  return (
    <div className="p-4 border rounded bg-white animate-pulse" data-testid="skeleton-container">
      <div data-testid="skeleton-header" className="h-14 w-50 bg-gray-200 rounded mb-3" />
      <table className="w-full table-fixed border-collapse" data-testid="skeleton-table">
        <tbody>
          {rowArray.map((_, rowIndex) => (
            <tr key={rowIndex} data-testid={`skeleton-row-${rowIndex}`}>
              <td className="py-2">
                <div
                  data-testid={`skeleton-cell-${rowIndex}`}
                  className={classNames("h-4 bg-gray-200 rounded w-[100%]")}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
