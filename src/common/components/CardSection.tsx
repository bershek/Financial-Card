import { Children } from "react";

interface CardSectionProps {
  title: string;
  children: React.ReactNode;
  columns?: string[];
  footer?: React.ReactNode;
}

export const CardSection: React.FC<CardSectionProps> = ({ title, children, columns = [], footer = null }) => {
  return (
    <div className="max-w-[400px] w-full p-4 rounded bg-white">
      <h2 className="text-[1.5rem] font-semibold text-[#9e9e9ed9] m-0 mb-3">{title}</h2>
      <table className="w-full table-fixed border-collapse">
        {columns.length > 0 && (
          <thead>
            <tr>
              {columns.map((title, index) => (
                <th key={index} className="text-[0.75rem] text-[#9e9e9ed9]">
                  {title}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>{Children.toArray(children)}</tbody>
      </table>
      {footer}
    </div>
  );
};
