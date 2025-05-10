import Link from "next/link";
import { ImagView } from "../../imag-view";
import { Badge, IconBox } from "../../ui";
import { Rating } from "../../rating";

interface Props {
  data: {
    title: string;
    image: string;
    category: string;
    rate: number;
    weight: number;
    unit: string;
    sale_price: number;
    price: number;
    label: string;
  };
}

export function SimpleProductCard({ data }: Props) {
  return (
    <div className="group border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] h-full">
      {/* <div className="badge badge--off absolute left-0 top-0 lg:top-5 rounded-tl-[10px] lg:rounded-tl-none">
        -17%
      </div> */}
      <Badge
        badge={data.label}
        price={data.price}
        sale_price={data.sale_price}
      />
      <div className="mt-8 hidden group-hover:flex rounded-[5px] border-[1px] border-green-200 w-max absolute top-[100px] left-[50%] translate-x-[-50%] bg-white productAction cursor-pointer">
        <div className="p-2.5 border-r-[1px] border-r-green-200 hover:bg-green-150">
          <IconBox icon="icon-heart text-brand1" size={15} />
        </div>
        <div className="p-2.5 border-r-[1px] border-r-green-200 hover:bg-green-150">
          <IconBox icon="icon-shuffle text-brand1" size={15} />
        </div>
        <div className="p-2.5 hover:bg-green-150">
          <IconBox icon="icon-eye text-brand1" size={15} />
        </div>
      </div>

      <ImagView
        className="m-auto w-full aspect-[3/2] mb-[28px]"
        src={data.image}
        alt="product"
        height={168}
        width={210}
      />
      <div className="flex flex-col gap-2">
        <div className="text-gray-500 text-xsmall">{data.category}</div>
        <Link href={"#"}>
          <h3 className="text-heading-sm text-blue-300 max-h-[50px] overflow-hidden">
            {data.title}
          </h3>
        </Link>
        <div className="flex gap-4">
          <Rating rate={data.rate} />
        </div>
        <div className="font-lato text-xsmall text-gray-500">
          {data.weight} {data.unit}
        </div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div>
          <span className="text-heading5 text-green-200">
            $ ${data.sale_price}
          </span>
          <span className="text-heading-sm line-through text-gray-500">
            ${data.price}
          </span>
        </div>
        <div className="add-product">
          <button className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">
            Adds +
          </button>
          <div className="input-product__container hidden border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px]">
            <input
              type="number"
              defaultValue={1}
              className="input-product h-[24px] w-[50px] border-0 focus:outline-none text-center"
            />
            <div className="flex flex-col justify-between">
              <IconBox icon="up icon-angle-small-up" size={10} />

              <IconBox icon="down icon-angle-small-down" size={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
