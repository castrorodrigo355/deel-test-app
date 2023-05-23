interface CleanIconProps {
  onClick: () => void;
}

export const CleanIcon = ({ onClick }: CleanIconProps): JSX.Element => (
  <button onClick={onClick}>+</button>
);

export default CleanIcon;
