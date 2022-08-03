import "./ParticipantLayout.module.css";

import React, { useMemo, useState } from "react";

const MyCheckBoxList = [
  {
    Description: 0,
    Info: "Golf",
  },
  {
    Description: 1,
    Info: "Basketball",
  },
  {
    Description: 2,
    Info: "Soccer",
  },
  {
    Description: 3,
    Info: "Game",
  },
  {
    Description: 4,
    Info: "Restaurant",
  },
];

const Checkbox = ({ obj, onChange }) => {
  return (
    <>
      <input
        type="checkbox"
        id={`custom-checkbox-${obj.index}`}
        name={obj.name}
        value={obj.checked}
        onChange={() => onChange({ ...obj, checked: !obj.checked })}
      />
      {obj.name}
    </>
  );
};

function ParticipantLayout() {
  const [data, setData] = useState(
    MyCheckBoxList.sort((a, b) => a.order - b.order)
  );

  const isVerified = useMemo(() => {
    return data.every((d) => d.checked);
  }, [data]);

  return (
    <div className="App">
      {data.map((obj, index) => (
        <li key={index}>
          <Checkbox
            obj={obj}
            onChange={(item) => {
              setData(data.map((d) => (d.order === item.order ? item : d)));
            }}
          />
        </li>
      ))}
      <button disabled={!isVerified}>Submit</button>
    </div>
  );
}

export default ParticipantLayout;
