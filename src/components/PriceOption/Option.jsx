import PropTypes from "prop-types";
import { FaRegCheckCircle } from "react-icons/fa";

const Option = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="flex flex-col space-y-4 bg-slate-700 rounded-2xl p-6  text-white">
      <h2 className="text-center">
        <span className="text-7xl font-extrabold ">{price} $</span>
        <span className="text-2xl font-medium">/mon</span>
      </h2>
      <h4 className="text-4xl font-semibold text-center">{name}</h4>
      <div className="flex-grow">
        {features.map((feature, idx) => (
          <p key={idx} className="font-bold flex flex-row items-center text-left text-zinc-300"><FaRegCheckCircle className="mr-5"/> {feature}</p>
        ))}
      </div>
      <button className="bg-slate-100 text-slate-700 hover:text-slate-200 text-2xl font-bold hover:bg-slate-400 w-full py-4 rounded-xl">Buy Now</button>
    </div>
  );
};

Option.propTypes = {
  option: PropTypes.object.isRequired,
};

export default Option;
