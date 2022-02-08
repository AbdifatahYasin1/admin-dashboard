import React, { useState } from "react";
import { uniqueId } from "lodash";
import Icon from "@mdi/react";
import {
  mdiDog,
  mdiPalmTree,
  mdiCat,
  mdiCalendar,
  mdiAccountMultiple
} from "@mdi/js";
import "./styles.css";

const glyphs = [
  { term: "vacation", icon: mdiPalmTree },
  { term: "dog", icon: mdiDog },
  { term: "cat", icon: mdiCat }
];

function FancyInput() {
  const [nameId] = useState(uniqueId("name-"));
  const [icon, setIcon] = useState(mdiCalendar);

  function handleInputChange({ target: { value } }) {
    const match = glyphs.find(glyph => {
      const reg = new RegExp(`(^|\\s)${glyph.term}(\\s|$)`);
      if (value.match(reg)) {
        return true;
      }
      return false;
    });
    setIcon(match ? match.icon : mdiCalendar);
  }

  return (
    <div class="fancy-input">
      <label for={nameId}>Event Name</label>
      <Icon path={icon} title="Dog" size={1} />
      <input id={nameId} type="text" onChange={handleInputChange} />
    </div>
  );
}

export default function App() {
  const [userId] = useState(uniqueId("user-"));

  return (
    <div className="App">
      <h1>Fancy Icon Form</h1>
      <p>
        Type <code>cat</code>, <code>dog</code>, or <code>vacation</code>.
      </p>
      <FancyInput />
      <div class="fancy-input">
        <label for={userId}>Invite People</label>
        <Icon path={mdiAccountMultiple} title="Dog" size={1} />
        <input id={userId} type="text" />
      </div>
    </div>
  );
}
