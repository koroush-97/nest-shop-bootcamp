import { ImagView } from "../../imag-view";
import { Rating } from "../../rating";
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";

interface Props {
  data: EntityType<ProductType>;
}

export function MinProductCard({ data }: Props) {
  const attr = data.attributes;

  if (!attr) {
    return <div> Loding .... </div>;
  }

  return (
    <div className="flex gap-3 lg:gap-5">
      <ImagView
        src={attr.thumbnail?.data?.attributes?.url ?? ""}
        width={120}
        height={120}
        alt={"product"}
      />
      <div className="flex flex-col justify-between">
        <div>
          <div className="text-heading6 text-blue-300 mb-1">{attr.title}</div>
          <Rating rate={attr.rate} />
        </div>

        {attr.sell_price ? (
          <div>
            <span className="text-heading5 text-green-200">
              ${attr.sell_price}
            </span>
            <span className="text-heading-sm line-through text-gray-500">
              ${attr.price}
            </span>
          </div>
        ) : (
          <span className="text-heading-sm line-through text-gray-500">
            ${attr.price}
          </span>
        )}
      </div>
    </div>
  );
}
