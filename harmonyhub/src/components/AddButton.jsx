import React from "react";
/* import { Link } from "react-router-dom";
 */
const AddButton = () => {
  return (
    <a href="/AddMusic">
      <div class="centered ">
        <div class="plus" id="plus">
          <div class="plus__line plus__line--v">Add music</div>
          <div class="plus__line plus__line--h"></div>
        </div>
      </div>
    </a>
  );
};
export default AddButton;
