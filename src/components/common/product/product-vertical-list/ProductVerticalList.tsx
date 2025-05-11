import { MinProductCard } from "../product-card";

interface Props {
  title: string;
  data: Array<any>;
}

export function ProductVerticalList({ title, data }: Props) {
  return (
    <div>
      <h3 className="text-heading6 md:text-heading5 lg:text-heading4 xl:text-heading3 text-blue-300 mb-[30px]">
        {title}
      </h3>
      <div className="flex flex-col gap-6">
        {data.map((item, index) => {
          return <MinProductCard key={index} data={item} />;
        })}
      </div>
    </div>
  );
}
