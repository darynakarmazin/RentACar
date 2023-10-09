import Select from "react-select";

const options = [
  { value: null, label: "To $" },
  ...[...Array(21).keys()].map((price) => ({
    value: (price + 1) * 10,
    label: `$${(price + 1) * 10}`,
  })),
];

const MySelect = ({ selectedPrice, setSelectedPrice }) => {
  const handleChange = (selectedOption) => {
    setSelectedPrice(selectedOption ? selectedOption.value : null);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "136px",
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
      height: "188px",
      zIndex: 9999,
      borderRadius: "14px",
      border: "1px solid rgba(18, 20, 23, 0.05)",
      background: "#FFFFFF",
      boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
    }),
    menuList: (provided) => ({
      ...provided,
      width: "136px",
      height: "188px",
      zIndex: 9999,
      display: "flex",
      flexDirection: "column",
      borderRadius: "14px",
      padding: "14px 8px 14px 18px",
      border: "1px solid rgba(18, 20, 23, 0.05)",
      background: "#FFFFFF",
      boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
    }),
  };

  const displayValue = selectedPrice !== null ? `To ${selectedPrice}$` : " ";

  return (
    <div>
      <Select
        className="basic-single"
        styles={customStyles}
        value={
          selectedPrice !== null
            ? { value: selectedPrice, label: `To ${selectedPrice}$` }
            : null
        }
        placeholder={`To ${displayValue}$`}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};

export default MySelect;
