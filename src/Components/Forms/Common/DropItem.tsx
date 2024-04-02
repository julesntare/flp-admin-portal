import React from 'react'
import { FormFeedback, Label } from 'reactstrap'
import Select, { ActionMeta, SingleValue } from 'react-select';
import { LooksGood } from '../../../Utils/Constants';
import { DropItemChangeProp, DropItemProps, Option } from '../../../Types/FormType';
import { options } from '../../../Data/Forms/FormControlsData';

export default function DropItem({ selectedOption, setSelectedOption, validate, tip, colClass, className }: DropItemProps) {
  const handleChange: DropItemChangeProp = (newValue, actionMeta) => {
    if (actionMeta.action === 'select-option' || actionMeta.action === 'clear') {
      const newSelectedOption = newValue as Option;
      setSelectedOption(newSelectedOption?.value || null);
    }
  };
  
  return (
    <div className={colClass}>
      <Label htmlFor="state">{'State'}</Label>
      <Select id="state" options={options} value={options.find(option => option.value === selectedOption)}
        onChange={handleChange} className={className} />
      {validate && !selectedOption && (<FormFeedback tooltip={tip}>{'Please select a valid state.'}</FormFeedback>)}
      {validate && selectedOption && (<FormFeedback tooltip={tip} valid>{LooksGood}</FormFeedback>)}
    </div>
  )
}
