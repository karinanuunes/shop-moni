import React, { useState, useEffect } from "react";
import { Range, getTrackBackground } from "react-range";

interface PriceFilterProps {
  min: number;
  max: number;
  step: number;
  onChange: (values: number[]) => void;
  hidePriceFilter: boolean;
}

const PriceFilter: React.FC<PriceFilterProps> = ({
  min,
  max,
  step,
  onChange,
  hidePriceFilter,
}) => {
  const [values, setValues] = useState([min, max]);

  useEffect(() => {
    onChange(values);
  }, [values, onChange]);

  const handleChange = (values: number[]) => {
    setValues(values);
  };

  return (
    <div className={`w-full px-4 ${hidePriceFilter ? "hidden" : ""}`}>
      <Range
        values={values}
        step={step}
        min={min}
        max={max}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="w-full h-2 bg-gray-300 rounded"
            style={{
              background: getTrackBackground({
                values,
                colors: ["#ccc", "#000", "#ccc"],
                min,
                max,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            className={`w-5 h-5 bg-black rounded-full focus:outline-none ${
              isDragged ? "shadow-lg" : ""
            }`}
            key={props.key}
          />
        )}
      />
      <div className="flex justify-between mt-4">
        <span className="font-medium">R${values[0]}</span>
        <span className="font-medium">R${values[1]}</span>
      </div>
    </div>
  );
};

export default PriceFilter;
