import React from "react";

interface AvailableItemsListProps {
    availableItems: string[];
    inputValue: string;
    onItemClick: (item: string) => void;
    highlightedIndex: number | null;
    isInputFocused: boolean;
}

const AvailableItemsList: React.FC<AvailableItemsListProps> = ({
    availableItems,
    inputValue,
    onItemClick,
    highlightedIndex,
    isInputFocused,
}) => (
    <ul className={`max-h-72 fixed w-[50vw] overflow-y-auto border-gray-300 rounded mt-2 ${availableItems.length > 0 ? 'border' : ''} ${isInputFocused ? "visible" : "opacity-0 invisible"}`}>
        {availableItems
            .filter((item) => item.toLowerCase().includes(inputValue.toLowerCase()))
            .map((item, index) => (
                <li
                    key={index}
                    className={`p-2 cursor-pointer bg-gray-800 hover:bg-gray-600 duration-200 my-1 ${highlightedIndex === index ? "bg-gray-100" : ""
                        }`}
                    onClick={() => onItemClick(item)}
                >
                    {item}
                </li>
            ))}
    </ul>

);

export default AvailableItemsList;
