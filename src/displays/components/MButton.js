import React from 'react';

/**
 * MButton (MenuButton) Functional Component.
 */
function MButton(props) {
  let dropDownMenu;

  // Create Dropdown menu.
  if (props.dropDowns) {
    // Create each option.
    let options = props.dropDowns.map((option, index) => (
      <MButton key={index}
        label={option.label}
        onClick={option.onClick}
        clickType={props.dropDownType}
      />
    ));
    
    // Calculate width of drop down.
    let perWidth = ((1.0 / props.widthDivisor) * 100) + "%";

    // Create drop down.
    dropDownMenu = (
      <div className="dropdown" style={{width : perWidth}}>
        {options}
      </div>
    );
  }

  // Create container class name.
  let conatinerClassName = "buttonContainer";

  // If specified, make button flexible.
  if (props.flexible) {
    conatinerClassName = "flexible " + conatinerClassName;
  }

  // Create button class name.
  let paneClassName = props.clickType + " slow buttonPane";

  /*
   * Here specifiy if the given button is a parent or not.
   *
   * An MButton should be marked as a parent if it holds a nonempty dropdown 
   * menu. When the mouse is hovering over an MButton's dropdown menu, the 
   * MButton should  be styled as if it itself is being hovered over as well.
   */
  if (dropDownMenu) {
    paneClassName = "parent " + paneClassName;
  }

  return (
    <span className={conatinerClassName}>
      <div className={paneClassName} onClick={props.onClick}>
        {props.label}
      </div>
      {dropDownMenu}
    </span>
  );
}

export default MButton;