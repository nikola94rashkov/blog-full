import { trimAndCamelCase } from '../../../services';
import type { Select as SelectInterface } from '../../../types';

export const Select = ({ label, type, testId, name, options, changeHandler }: SelectInterface) => {
  return (
    <div className="formRow">
      <label htmlFor={name}>{label}</label>

      <select name={name} id={name} data-testid={testId} onChange={changeHandler}>
        {options.map((item, index) => (
          <option key={item + index} value={item + index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
