import React, { useMemo } from "react";
import Design_elements_right from "../../assets/Elements/Design_elements-right.svg";
import Design_elements_left from "../../assets/Elements/Design_elements-left.svg";

function DesignElements() {
    const elements = useMemo(() => (
        <>

        {/* Right design Elements */}
            <img
                src={Design_elements_right}
                alt="Design Elements"
                className=" design-elements hidden lg:block xl:block sm:hidden md:hidden absolute bottom-[80px] -right-[3px] w-[25%]"
            />

             {/* left design Elements */}
            <img
                src={Design_elements_left}
                alt="Design Elements"
                className="hidden design-elements lg:block xl:block sm:hidden md:hidden absolute bottom-[60px] left-[0px] w-[25%]"
            />
        </>
    ), []);

    return elements;
}

export default DesignElements;
