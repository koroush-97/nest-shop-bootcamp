import Link from "next/link";
import { ImagView } from "../../imag-view";
import { Badge, IconBox } from "../../ui";
import { Rating } from "../../rating";
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";
import { ProductCardBottom } from "./ProductCardBottom";
interface Props {
  data: EntityType<ProductType>;
}

//TODO bepors dar bareh y shart ha braye ertefa

export function SimpleProductCard({ data }: Props) {
  return (
    <div className="group border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-3 md:p-4 xl:px-5 xl:pb-5 lg:pt-[65px] min-h-[500px] max-h-[500px] flex flex-col justify-between">
      {data?.attributes?.label && (
        <Badge
          badge={data.attributes.label}
          price={data.attributes.price}
          sale_price={data.attributes.sell_price}
        />
      )}

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
        src={data?.attributes?.thumbnail?.data?.attributes.url ?? ""}
        alt="product"
        height={168}
        width={210}
      />
      <div className="flex flex-col justify-between max-h-[90px] min-h-[90px] ">
        {data?.attributes?.categories?.data[0] && (
          <div className="text-gray-500 text-xsmall flex-1">
            {data.attributes.categories?.data[0].attributes.title}
          </div>
        )}
        <Link href={"#"}>
          <h3 className="text-heading-sm text-blue-300 h-[70px]  overflow-hidden ">
            {data.attributes?.title}
          </h3>
        </Link>
        <div className="flex gap-4 flex-1 items-center">
          <Rating rate={data.attributes?.rate} />
        </div>
        <div className="font-lato text-xsmall text-gray-500 flex flex-1 justify-between">
          {data.attributes?.weight} {data.attributes?.unit}
        </div>
      </div>
      {data.attributes?.total && data.attributes?.sold ? (
        <>
          <div>
            <div className="flex items-center justify-between mt-3">
              {data.attributes?.sell_price ? (
                <div>
                  <span className="text-heading5 text-green-200">
                    ${data.attributes?.sell_price}{" "}
                  </span>
                  <span className="text-heading-sm line-through text-gray-500">
                    ${data.attributes?.sell_price}
                  </span>
                </div>
              ) : (
                <span className="text-heading-sm line-through text-gray-500">
                  ${data.attributes?.price}
                </span>
              )}
              <div>
                <span className="text-heading5 text-green-200">
                  ${data.attributes?.sell_price}{" "}
                </span>
                <span className="text-heading-sm line-through text-gray-500">
                  ${data.attributes?.price}
                </span>
              </div>
            </div>
            <div className="mt-[15px] bg-gray-200 h-[4px] w-full rounded-[2px]">
              <div
                style={{
                  width: `${
                    (data.attributes?.sold / data.attributes?.total) * 100
                  }%`,
                }}
                className={`bg-green-200 h-[4px] rounded-[2px]`}
              />
            </div>
            <div className="mt-2.5 font-lato text-blue-300 text-xsmall">
              Sold: {data.attributes?.sold}/{data.attributes?.total}
            </div>
            <div className="mt-[23px]">
              <button className="flex justify-center items-center gap-2 xl:text-heading-sm text-white border-[1px] w-full rounded-[4px] bg-green-200 hover:bg-yellow-100 px-2 py-2 lg:py-[14px]">
                <i className="icon-shopping-cart text-[22px]" />
                <span className="text-heading-sm">Add To Card</span>
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex  items-center justify-between mt-3">
          <div>
            {data.attributes?.sell_price ? (
              <div>
                <span className="text-heading5 text-green-200">
                  ${data.attributes?.sell_price}{" "}
                </span>
                <span className="text-heading-sm line-through text-gray-500">
                  ${data.attributes?.price}
                </span>
              </div>
            ) : (
              <span className="text-heading-sm line-through text-gray-500">
                ${data.attributes?.price}
              </span>
            )}
          </div>
          <ProductCardBottom productData={data} />
        </div>
      )}
    </div>
  );
}
