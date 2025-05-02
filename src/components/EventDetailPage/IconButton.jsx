import React from "react";
import { Button } from "./Button";

export const IconButton= ({content, icon,iconName, modifier}) =>{
    return<Button className="border-2 border-alpha-border bg-bright-blue hover:bg-blue-500 text-white rounded-full flex items-center gap-2">
    {content}
  <img src={icon} alt={iconName} className={modifier}/>
    </Button>
}