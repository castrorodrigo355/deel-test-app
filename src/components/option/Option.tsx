interface OptionProps {
  name: string;
  onClick: () => void;
}

export const Option = ({ name, onClick }: OptionProps): JSX.Element => (
  <li onClick={onClick}>{name}</li>
);

export default Option;
