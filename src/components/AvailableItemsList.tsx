
import React from 'react';

interface AvailableItemsListProps {
    availableItems: string[];
    inputValue: string;
    onItemClick: (item: string) => void;
    highlightedIndex: number | null;
}

const AvailableItemsList: React.FC<AvailableItemsListProps> = ({ availableItems, inputValue, onItemClick, highlightedIndex }) => (
    <ul className='max-h-72 fixed w-[50vw] overflow-y-auto border border-gray-300 rounded mt-2'>
        {availableItems
            .filter((item) => item.toLowerCase().includes(inputValue.toLowerCase()))
            .map((item, index) => (
                <li
                    key={index}
                    className={`p-2 cursor-pointer bg-gray-800 my-1 ${highlightedIndex === index ? 'bg-gray-100' : ''}`}
                    onClick={() => onItemClick(item)}
                >
                    {item}
                </li>
            ))}
    </ul>
);

export default AvailableItemsList;
