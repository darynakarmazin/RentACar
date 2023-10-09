import Select from "react-select";

const MySelectMakeFav = ({ selectedMake, setSelectedMake, makes }) => {
  const options = [
    { value: null, label: "Enter the text" },
    ...makes.map((make, index) => ({
      value: make,
      label: make,
    })),
  ];

  const handleChange = (selectedOption) => {
    setSelectedMake(selectedOption ? selectedOption.value : "");
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "320px",
      display: "block",
      border: "none",
      borderRadius: "14px",
      background: "#f7f7fb",
      height: "54px",
      color: "#121417",
      fontFamily: "Manrope",
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "1.11",
      paddingRight: "4px",
      svg: {
        color: "#121417",
      },
      "&:hover": {
        borderColor: "#aaa",
      },
      input: {
        display: "none",
      },
    }),
    indicatorSeparator: (provided, state) => ({
      display: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#121417" : "rgba(18, 20, 23, 0.20)",
      backgroundColor: "transparent",
      "&:hover": {
        color: "#121417",
        backgroundColor: "transparent",
      },
    }),
    menu: (provided) => ({
      ...provided,
      height: "272px",
      zIndex: 9999,
      borderRadius: "14px",
      border: "1px solid rgba(18, 20, 23, 0.05)",
      background: "#FFFFFF",
      boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
    }),
    menuList: (provided) => ({
      ...provided,
      width: "320px",
      height: "272px",
      zIndex: 9999,
      display: "flex",
      flexDirection: "column",
      borderRadius: "14px",
      padding: "14px 8px 14px 18px",
      border: "1px solid rgba(18, 20, 23, 0.05)",
      background: "#FFFFFF",
      boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
    }),
    clearIndicator: (provided) => ({
      ...provided,
    }),
  };

  const displayValue =
    selectedMake !== null ? { selectedMake } : "Enter the text";

  return (
    <div>
      <Select
        className="basic-single"
        styles={customStyles}
        value={
          selectedMake !== null
            ? {
                value: selectedMake,
                label: selectedMake ? selectedMake : "Enter the text",
              }
            : null
        }
        placeholder={displayValue}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};

export default MySelectMakeFav;
