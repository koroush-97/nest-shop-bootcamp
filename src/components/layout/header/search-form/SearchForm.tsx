// api
import { getAllProductsApiCall } from "@/api/Product";

// components
import { IconBox } from "@/components/common";

// types
import { EntityType } from "@/types";
import { ProductType } from "@/types/api/Product";

// hooks
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  inputClassName?: string;
}

export function SearchForm({ inputClassName }: Props) {
  // TODO should be inperiment form

  const [resultData, setResultData] = useState<Array<EntityType<ProductType>>>(
    []
  );

  interface FormInput {
    search_text: string;
  }

  interface FilteData {
    title: {
      $containsi: string;
    };
  }

  const { register, handleSubmit } = useForm<FormInput>();

  const mutation = useMutation({
    mutationFn: (data: FilteData) => getAllProductsApiCall({ filters: data }),
  });

  const onSubmit = (data: FormInput) => {
    mutation.mutate(
      {
        title: {
          $containsi: data.search_text,
        },
      },
      {
        onSuccess: (response) => {
          setResultData(response.data);
        },
      }
    );
  };

  return (
    <div className={"relative"}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        name="search-form"
        action="#"
        method="post"
        className="flex items-center"
      >
        <input
          type="text"
          {...register("search_text")}
          placeholder="Search for items"
          className={`text-xsmall text-gray-400 border-gray-300 w-full ${inputClassName} focus:outline-none`}
        />
        <button type="submit">
          <IconBox icon={"icon-search"} />
        </button>
      </form>
      {resultData && (
        <div className={" absolute bg-white w-full left-0 right-0 top-14 "}>
          <ul>
            {resultData.map((item: EntityType<ProductType>, index) => {
              return (
                <li
                  className={
                    "p-4 hover:bg-green-200 hover:text-white cursor-pointer"
                  }
                >
                  {item.attributes.title}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
