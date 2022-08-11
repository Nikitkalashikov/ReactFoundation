import React from "react";

type DropdownContextType = {
    isOpen: boolean;
    setIsDropdownOpen: (isOpen: boolean) => void;
}

export const dropdownContext = React.createContext<DropdownContextType>({
    isOpen: false,
    setIsDropdownOpen: () => {},
});