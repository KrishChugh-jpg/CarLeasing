import { useState } from 'react';

function PayDetailsForm({ prevStep }) {
  const [annualSalary, setAnnualSalary] = useState();
  const [payFrequency, setPayFrequency] = useState('Weekly');
  const [carAllowance, setCarAllowance] = useState(false);

  const handleSubmit = (e) => {
    alert(`Annual Salary: ${annualSalary}\nPay Frequency: ${payFrequency}\nCar Allowance: ${carAllowance}`);
    e.preventDefault();
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-4">Pay Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Annual Gross Salary</label>
            <input
              type="Number"
              value={annualSalary}
              onChange={(e) => setAnnualSalary(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Select your Pay Frequency</label>
            <div className="flex space-x-4 mt-1">
              <button
                type="button"
                onClick={() => setPayFrequency('Weekly')}
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${payFrequency === 'Weekly' ? 'bg-blue-600' : 'bg-gray-600'} hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                Weekly
              </button>
              <button
                type="button"
                onClick={() => setPayFrequency('Fortnightly')}
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${payFrequency === 'Fortnightly' ? 'bg-blue-600' : 'bg-gray-600'} hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                Fortnightly
              </button>
              <button
                type="button"
                onClick={() => setPayFrequency('Monthly')}
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${payFrequency === 'Monthly' ? 'bg-blue-600' : 'bg-gray-600'} hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                Monthly
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <input
                type="checkbox"
                checked={carAllowance}
                onChange={(e) => setCarAllowance(e.target.checked)}
                className="mr-2 leading-tight"
              />
              I have a car allowance
            </label>
          </div>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Back
          </button>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default PayDetailsForm;
