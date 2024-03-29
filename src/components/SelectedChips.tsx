import React from "react";

interface SelectedChipsProps {
    selectedItems: string[];
    onRemoveChip: (index: number) => void;
}

const SelectedChips: React.FC<SelectedChipsProps> = ({ selectedItems, onRemoveChip }) => (
    <div className='flex flex-wrap gap-2 ml-1 -mb-6 mt-[5px] z-10 max-w-[50%] absolute'>
        {selectedItems.map((item, index) => (
            <div
                key={item}
                className={`bg-blue-300 text-black px-3 py-1 rounded-full flex items-center`}
            >
                {item}
                <span
                    className='ml-3 text-red-700 hover:text-blue-800 duration-150 font-bold focus:outline-none cursor-pointer'
                    onClick={() => onRemoveChip(index)}
                >
                    X
                </span>
            </div>
        ))}
    </div>
);

export default SelectedChips;
