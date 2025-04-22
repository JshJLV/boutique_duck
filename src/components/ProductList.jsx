import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ allProducts }) => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Función para obtener los parámetros de la URL
  const getParamsFromUrl = () => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    return {
      category: params.category || "all",
      searchQuery: params.q || "",
    };
  };

  useEffect(() => {
    // Obtener los parámetros iniciales de la URL
    const { category, searchQuery } = getParamsFromUrl();
    setCategory(category);
    setSearchQuery(searchQuery);
  }, []);

  useEffect(() => {
    // Escuchar cambios en la URL
    const handleUrlChange = () => {
      const { category, searchQuery } = getParamsFromUrl();
      setCategory(category);
      setSearchQuery(searchQuery);
    };

    window.addEventListener("popstate", handleUrlChange);

    return () => {
      window.removeEventListener("popstate", handleUrlChange);
    };
  }, []);

  useEffect(() => {
    let products = allProducts;

    // Filtrar por categoría
    if (category !== "all") {
      products = products.filter((product) => product.category === category);
    }

    // Filtrar por búsqueda
    if (searchQuery) {
      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(products);
  }, [category, searchQuery, allProducts]);

  return (
    <div>
      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border p-2 rounded"
      />

      {/* Botones de categorías */}
      <div>
        <button onClick={() => setCategory("all")}>Todos</button>
        <button onClick={() => setCategory("accesorios")}>Accesorios</button>
        <button onClick={() => setCategory("calzado")}>Calzado</button>
        <button onClick={() => setCategory("pantalones")}>Pantalones</button>
        <button onClick={() => setCategory("vestidos")}>Vestidos</button>
      </div>

      {/* Lista de productos */}
      <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
