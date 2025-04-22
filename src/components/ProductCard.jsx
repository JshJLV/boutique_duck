const ProductCard = (props) => {
  return (
    <li key={props.id}>
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
        <a
          href="#"
          className="flex justify-center items-center overflow-hidden"
        >
          <img
            class="object-cover h-80 w-full"
            src={props.image}
            alt={props.name}
          />
        </a>
        <div class="px-5 p-2">
          <a href="#">
            <h5 class="text-md font-semibold tracking-tight text-gray-900">
              {props.name}
            </h5>
          </a>
          <div class="flex items-center justify-between">
            <span class="text-xl font-bold text-gray-900">${props.price}</span>
            <a
              href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Agregar al carrito
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
