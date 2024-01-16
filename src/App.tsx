import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { items } from "./items";
import SelectedChips from "./components/SelectedChips";
import AvailableItemsList from "./components/AvailableItemsList";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [availableItems, setAvailableItems] = useState<string[]>(items);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleBackspace = (event: any) => {
      if (event.key === "Backspace" && inputValue === "" && selectedItems.length > 0) {
        event.preventDefault();
        setHighlightedIndex(selectedItems.length - 1);
        removeChip(selectedItems.length - 1);
      }
    };

    document.addEventListener("keydown", handleBackspace);

    return () => {
      document.removeEventListener("keydown", handleBackspace);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, selectedItems]);

  /**
   * Handle input change events updating the input value and resetting the highlighted index
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setHighlightedIndex(null);
  };

  /**
   * Adds an item to the selected items list, removes it from the
   * available items list, and clears the input value.
   */
  const handleItemClick = (item: string) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
      setAvailableItems(availableItems.filter((availableItem) => availableItem !== item));
      setInputValue("");
    }
  };

  /**
   * Removes an item from the selectedItems array and adds it back to the
   * availableItems array.
   * The index parameter is the index of the item to be removed from the
   * selectedItems array.
   */
  const removeChip = (index: number) => {
    const newSelectedItems = [...selectedItems];
    const removedItem = newSelectedItems.splice(index, 1)[0];
    setSelectedItems(newSelectedItems);

    // Add the removed item back to the available items list
    if (removedItem) {
      setAvailableItems([...availableItems, removedItem]);
    }
  };

  return (
    <div className='container mx-auto -mt-40 p-4 min-w-full'>
      <SelectedChips selectedItems={selectedItems} onRemoveChip={removeChip} />

      <input
        ref={inputRef}
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        placeholder='Type here...'
        className='p-2 focus:border-yellow-500 border relative border-gray-300 min-w-[50vw] rounded focus:outline-none'
      />
      <AvailableItemsList
        availableItems={availableItems}
        inputValue={inputValue}
        onItemClick={handleItemClick}
        highlightedIndex={highlightedIndex}
      />
    </div>
  );
};

export default App;
