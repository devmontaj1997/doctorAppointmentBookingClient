/* eslint-disable react/prop-types */

const FormInputSelect = ({name,options =[], value, onchangeEvent,lable}) => {
  return (
    <div> <div className="inputArea flex flex-col">
    <label className="font-outfit  font-[400] text-base text-ptag-color mb-1"> {lable} </label>
    <select
    className="border border-border outline-none rounded-lg p-2 mb-2"
    name={name}
    value={value}
    onChange={onchangeEvent}
  >
    <option value="" disabled>
      Select an option
    </option>
    {options?.map((option, index) => (
      <option key={index} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
  </div>
</div>
  )
}

export default FormInputSelect
