const ProductCard = (props) => {
  return (
    <li key={props.id}>
      <a href={`/product/${props.id}`}>
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-sm shadow-sm h-[400px]">
          <div className="flex justify-center items-center overflow-hidden">
            <img
              class="w-full h-80 object-cover md:object-contain"
              src={props.image}
              alt={props.name}
            />
          </div>
          <div class="px-5 p-2">
            <p href="#">
              <h5 class="text-sm md:text-md font-semibold tracking-tight text-gray-900">
                {props.name}
              </h5>
            </p>
            <div class="flex items-center justify-between">
              <span class="text-md md:text-lg font-bold text-gray-900">
                ${props.price} MXN
              </span>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
};

export default ProductCard;
