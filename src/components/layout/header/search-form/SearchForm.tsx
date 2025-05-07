import { IconBox } from "@/components/common";

export function SearchForm() {
  // TODO should be inperiment form

  return (
    <div className="border-2 border-green-150 rounded-[5px] max-w-[700px] w-full mx-[15px] px-[15px] hidden lg:inline-block">
      <form
        name="search-form"
        action="#"
        method="post"
        className="flex items-center"
      >
        <input
          type="text"
          name="search_text"
          placeholder="Search for items"
          className="text-xsmall text-gray-400 border-gray-300 w-full py-[15px] focus:outline-none"
        />
        <button type="submit">
          <IconBox icon={"icon-search"} />
        </button>
      </form>
    </div>
  );
}
