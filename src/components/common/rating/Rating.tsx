import { IconBox } from "../ui";

interface Props {
  rate: number;
}

export function Rating({ rate }: Props) {
  let star = [];
  let notstar = [];

  for (let i = 0; i < rate; i++) {
    star.push(
      <li className="flex">
        <IconBox icon="icon-star-full text-brand1" size={12} />
      </li>
    );
  }

  for (let i = rate; i < 5; i++) {
    notstar.push(
      <li className="flex">
        <IconBox icon="icon-star-empty text-brand1" size={12} />
      </li>
    );
  }

  return (
    <>
      <ul className="flex gap-1">
        {star}
        {notstar}
      </ul>
      <div className="text-xsmall text-gray-500 font-lato text-nowrap">
        ( {rate} )
      </div>
    </>
  );
}
