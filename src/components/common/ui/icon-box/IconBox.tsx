interface Props {
  icon: string;
  size?: number;
}

export function IconBox({ icon, size = 22 }: Props) {
  return <i className={` ${icon} text-[${size}px] `} />;
}
