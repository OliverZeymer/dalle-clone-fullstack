const FormField = (props) => {
  const { labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe } = props;
  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <label htmlFor={name} className="block font-medium text-light">
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="rounded-md border-none bg-black py-2 px-4 text-sm font-semibold text-light outline-none transition-colors hover:bg-[#272727]">
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
        className="block w-full rounded-lg border border-gray-text bg-[#272727] p-3 text-sm text-light outline-none focus:border-primary focus:ring-primary"
      />
    </div>
  );
};

export default FormField;
