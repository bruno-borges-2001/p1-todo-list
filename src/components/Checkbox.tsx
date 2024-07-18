import { CheckboxChecked, CheckboxUnchecked } from "../assets"

interface CheckboxProps {
  checked: boolean,
  onChange: (value: boolean) => void
}

export default function Checkbox({ checked, onChange }: CheckboxProps) {
  return (
    <button onClick={() => onChange(!checked)}>
      {checked ? <CheckboxChecked /> : <CheckboxUnchecked />}
    </button>
  )
}