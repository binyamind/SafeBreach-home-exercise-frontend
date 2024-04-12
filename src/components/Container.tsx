type Props = {
  children?: Array<React.ReactNode> | React.ReactNode | null;
  className: string;
};

const Container = ({ children, className }: Props) => {
  return <div className={className}>{[children]}</div>;
};

export default Container;
