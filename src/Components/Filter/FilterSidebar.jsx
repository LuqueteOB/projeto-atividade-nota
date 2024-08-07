import React, { useState } from "react";
import "./ListadeProdutos2.css"; // Importe seu arquivo de estilo

const FilterSidebar = () => {
  const brands = ["Adidas", "Balenciaga", "K-Swiss", "Nike", "Puma"];
  const categories = ["Esporte e lazer", "Casual", "Utilitário", "Corrida"];
  const genders = ["Masculino", "Feminino", "Unisex"];
  const conditions = ["Novo", "Usado"];

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedConditions, setSelectedConditions] = useState([]);

  const handleCheckboxChange = (e, setSelected, selected) => {
    const value = e.target.value;
    setSelected((prev) =>
      e.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };

  return (
    <section className="bg-white ml-6">
      <div className="w-64 p-2">
        <h3 className="text-lg font-semibold">Filtrar por</h3>
        <hr size="1" />

        <div className="mt-4 mr-8 flex flex-column align-items-start">
          <h4 className="text-md font-medium">Marca</h4>
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center mt-2 checkbox-custom"
              style={{ marginBottom: "0.5rem" }}
            >
              <input
                type="checkbox"
                id={`brand-${index}`}
                value={brand}
                onChange={(e) =>
                  handleCheckboxChange(e, setSelectedBrands, selectedBrands)
                }
                checked={selectedBrands.includes(brand)}
              />
              <label htmlFor={`brand-${index}`} className="ml-2 ">
                {brand}
              </label>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <h4 className="text-md font-medium">Categoria</h4>
          {categories.map((category, index) => (
            <div key={index} className="flex items-center mt-2 checkbox-custom">
              <input
                type="checkbox"
                id={`category-${index}`}
                value={category}
                onChange={(e) =>
                  handleCheckboxChange(
                    e,
                    setSelectedCategories,
                    selectedCategories
                  )
                }
                checked={selectedCategories.includes(category)}
              />
              <label htmlFor={`category-${index}`} className="ml-2">
                {category}
              </label>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <h4 className="text-md font-medium">Gênero</h4>
          {genders.map((gender, index) => (
            <div key={index} className="flex items-center mt-2 checkbox-custom">
              <input
                type="checkbox"
                id={`gender-${index}`}
                value={gender}
                onChange={(e) =>
                  handleCheckboxChange(e, setSelectedGenders, selectedGenders)
                }
                checked={selectedGenders.includes(gender)}
              />
              <label htmlFor={`gender-${index}`} className="ml-2">
                {gender}
              </label>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <h4 className="text-md font-medium">Estado</h4>
          {conditions.map((condition, index) => (
            <div key={index} className="flex items-center mt-2 checkbox-custom">
              <input
                type="checkbox"
                id={`condition-${index}`}
                value={condition}
                onChange={(e) =>
                  handleCheckboxChange(
                    e,
                    setSelectedConditions,
                    selectedConditions
                  )
                }
                checked={selectedConditions.includes(condition)}
              />
              <label htmlFor={`condition-${index}`} className="ml-2">
                {condition}
              </label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterSidebar;
