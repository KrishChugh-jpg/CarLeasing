// FormField.js
function FormField({ label, options }) {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          {options.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
      </div>
    );
  }
  
  export default FormField;
  