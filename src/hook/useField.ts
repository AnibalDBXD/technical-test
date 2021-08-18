import { useState } from "react";

interface IUseFieldProps {
    placeholder?: string;
    type: string;
}

interface IUseFieldReturn extends IUseFieldProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const useField = ({ placeholder, type }: IUseFieldProps): IUseFieldReturn => {
  const [value, setValue] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (type === "checkbox") {
      return setValue(String(event.target.checked));
    }
    setValue(event.target.value);
  };

  return {
    placeholder,
    type,
    value,
    onChange
  };
};

export default useField;