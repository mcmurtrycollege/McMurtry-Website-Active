import React from 'react';
import MButton from './MButton';

/*
 * These are the settings for the preset menu bar.
 * This object contains onClick handlers (hence why it is not in its
 * own JSON file).
 */
const defaultMenuBar = {
  clickType : "clickable1",
  dropDownType : "clickable2",
  options : [
    {
      label : "About"
    }, 
    {
      label : "Events",
      dropDowns : [
        {
          label : "Events"
        },
        {
          label : "Arts Events"
        },
        {
          label : "Contacts"
        }
      ]
    }, 
    {
      label : "Leadership"
    },
    {
      label : "Academics"
    },
    {
      label : "Wellbeing"
    },
    {
      label : "Documents"
    },
    {
      label : "O-Week"
    },
    {
      label : "Resources"
    },
    {
      label : "Contact"
    }
  ]
}

/**
 * Menu Bar Functional Component.
 */
function MBar(props) {
  if (props.default) {
    return (
      <MBar
        options={defaultMenuBar.options}
        clickType={defaultMenuBar.clickType}
        dropDownType={defaultMenuBar.dropDownType} 
      />
    );
  }

  // Load buttons.
  let buttons;
  
  if (props.options) {
    // Create each option.
    buttons = props.options.map((option, index) => (
      <MButton flexible
        key={index}
        label={option.label} 
        onClick={option.onClick}
        clickType={props.clickType}
        widthDivisor={props.options.length}
        dropDowns={option.dropDowns}
        dropDownType={props.dropDownType} 
      />
    ));
  } 

  return (
    <div className="flexDisplay">
      {buttons}
    </div>
  );
}

export default MBar;