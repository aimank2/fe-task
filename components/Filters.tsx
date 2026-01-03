"use client";

import { SelectValue } from "@radix-ui/react-select";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";
interface FilterProps {
  setCategory: (category: string) => void;
  category: string;
  setPriceRange: (priceRange: string) => void;
  priceRange: string;
}
const Filters = ({
  setCategory,
  category,
  priceRange,
  setPriceRange,
}: FilterProps) => {
  const CATEGORIES = ["All", "Tech", "Clothing"];
  const PRICE_RANGES = ["All", "<100", "100-500", ">500"];
  return (
    <div className="flex flex-row justify-between py-4">
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((c, index) => (
          <Button
            key={index}
            onClick={() => setCategory(c)}
            className={` hover:bg-gray-400 bg-white border text-black ${
              c === category && `bg-gray-300`
            }`}
          >
            {c}
          </Button>
        ))}
      </div>
      <div>
        <Select onValueChange={setPriceRange} value={priceRange}>
          <SelectTrigger>
            <SelectValue placeholder="Price Range">{priceRange}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {PRICE_RANGES.map((priceRange, index) => (
              <SelectItem value={priceRange} key={index}>
                {priceRange}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Filters;
