import { Container, ToggleLabel, ToggleSelector } from "./styles";

interface IToggleProps {
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  onChange(): void;
}

const Toggle = ({ labelRight, labelLeft, checked, onChange }: IToggleProps) => (
  <Container>
    <ToggleLabel>{labelLeft}</ToggleLabel>

    <ToggleSelector
      checked={checked}
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={onChange}
    />
    <ToggleLabel>{labelRight}</ToggleLabel>
  </Container>
);

export default Toggle;
