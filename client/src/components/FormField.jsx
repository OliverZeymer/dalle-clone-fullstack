const FormField = (props) => {
  const { labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe } = props;
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <label htmlFor={name} className="block text-sm font-medium text-gray-900">
          {labelName}
        </label>
        {isSurpriseMe && (
          <button type="button" onClick={handleSurpriseMe} className="rounded-md border-none bg-[#ECECF1] py-2 px-4 text-sm font-semibold text-black outline-none">
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="block w-full rounded-lg border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 outline-none focus:border-[#4649ff] focus:ring-[#4649ff]"
      />
    </div>
  );
};

export default FormField;
