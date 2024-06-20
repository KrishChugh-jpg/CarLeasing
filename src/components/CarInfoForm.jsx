import FormField from './FormField';

function CarInfoForm({ nextStep }) {
  const manufacturers = ["Select", "ABARTH", "ALFA ROMEO", "ALPINE", "ASTON MARTIN"];
  const models = ["Select", "Camry", "Civic", "Mustang"];
  const years = ["Select", "2021", "2022", "2023"];
  const bodyTypes = ["Select", "Sedan", "SUV", "Truck"];
  const series = ["Select", "Series 1", "Series 2", "Series 3"];

  const handleNextClick = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-4">Car Info</h2>
      <form>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <FormField label="Manufacturer" options={manufacturers} />
          <FormField label="Model" options={models} />
          <FormField label="Model Year" options={years} />
          <FormField label="Body Type" options={bodyTypes} />
          <FormField label="Series" options={series} />
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleNextClick}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default CarInfoForm;
