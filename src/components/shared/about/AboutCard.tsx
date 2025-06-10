import { Separator } from "@/components/ui/separator";

type AboutCardProps = {
  title: string;
  items: string[];
};

export const AboutCard = ({ title, items }: AboutCardProps) => {
  return (
    <div className="border-2 p-5 rounded-lg border-gray-600">
      <h3 className="NSWFont font-bold text-xl">{title}</h3>
      <Separator className="bg-gray-600 mt-2" />
      <ol className="list-disc list-inside mt-4 flex flex-col gap-3">
        {items.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ol>
    </div>
  );
};
