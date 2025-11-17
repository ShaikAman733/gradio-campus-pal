import { format, isToday, isYesterday } from "date-fns";

interface DateSeparatorProps {
  date: Date;
}

export const DateSeparator = ({ date }: DateSeparatorProps) => {
  const getDateLabel = (date: Date) => {
    if (isToday(date)) return "Today";
    if (isYesterday(date)) return "Yesterday";
    return format(date, "MMMM d, yyyy");
  };

  return (
    <div className="flex items-center justify-center my-6">
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-xs font-medium text-muted-foreground px-3 py-1 rounded-full bg-muted/50">
          {getDateLabel(date)}
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>
    </div>
  );
};
