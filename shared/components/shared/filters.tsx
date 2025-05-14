'use client';

import React from "react";
import { Title } from './title';
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { FilterCheckbox } from "./filter-checkbox";
import { useFilters, useIngredients, useQueryFilters } from "@/shared/hooks";


interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();
useQueryFilters(filters); 


  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name, 
  }));


  const updatePrices = (prices: number[]) => {
    filters.setPrices("priceFrom", prices[0]);
    filters.setPrices("priceTo", prices[1]);
  };
  

  return (
    <div className={className}>
      <Title text="Фільтрація" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox name="readyToShip" text="Готове до відправки" value="1" />
        <FilterCheckbox name="newItems" text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Параметри ціни:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={20000}
            value={String(filters.prices.priceFrom ?? "")}
            onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            placeholder="20000"
            min={0}
            max={20000}
            value={String(filters.prices.priceTo ?? "")}
            onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={20000}
          step={50}
          value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 20000]}
          onValueChange={updatePrices}
          formatLabel={(val) => `${val} грн`}
        />
      </div>

      <CheckboxFiltersGroup
        className="mt-5"
        name="ingredients"
        title="Регіональна приналежність"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selectedIds={filters.selectedIngredients}
      />
    </div>
  );
};
