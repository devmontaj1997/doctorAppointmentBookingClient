/* eslint-disable react/prop-types */
const FormInput = ({type,name, value, onchangeEvent,lable }) => {
  return (
    <>
      <div className="inputArea flex flex-col">
        <label className="font-outfit  font-[400] text-base text-ptag-color mb-1"> {lable} </label>
        <input className="border border-boder outline-none rounded-lg p-2 mb-2" type={type} name={name} value={value} onChange={onchangeEvent} />
      </div>
    </>
  );
};

export default FormInput

// export const FormInputSelect = ({ name, value, options, onChangeEvent, label }) => {
//   return (
//     <div className="inputArea flex flex-col">
//       <label className="font-outfit font-[400] text-base text-ptag-color mb-1">{label}</label>
//       <select
//         className="border border-border outline-none rounded-lg p-2 mb-2"
//         name={name}
//         value={value}
//         onChange={onChangeEvent}
//       >
//         <option value="" disabled>
//           Select an option
//         </option>
//         {options.map((option, index) => (
//           <option key={index} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };
