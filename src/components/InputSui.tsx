import { ChangeEvent } from "react";
import "../styles/input.css";
import { SearchProps } from "semantic-ui-react";
import * as _ from "lodash";
import { Icon, Input } from "semantic-ui-react";

interface IProps {
  type?: string;
  id?: string;
  name?: string;
  label?: string;
  value?: string;
  className?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<any>, data: SearchProps) => void;
  disabled?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  handleSerach: () => void;
}

const InputSUI = ({
  value,
  onChange,
  placeholder,
  handleSerach,
}: IProps) => {
  return (
    <Input
      className="input__wrapper"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      action={{
        icon: <Icon name="search" inverted circular link />,
        onClick: handleSerach,
      }}
    />
  );
};
export default InputSUI;
