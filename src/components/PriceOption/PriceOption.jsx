import Features from "../Features/Features";


const PriceOption = ({option}) => {
    const {name, id, price, features} = option;
    return (
        <div className="flex flex-col bg-green-100 p-4 rounded-md shadow-lg text-center">
            <h2>
                <span className="text-5xl font-bold">{price}</span>
                <span className="text-lg font-medium">/Month</span>
            </h2>
            <h4 className="text-2xl font-semibold py-3">{name}</h4>
            <h5 className="flex-grow pb-8">
                {
                    features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
                }
            </h5>
            <button className="w-full bg-green-500 hover:bg-orange-500 text-white text-lg font-semibold px-8 py-2 rounded-md">Buy Now</button>
        </div>
    );
};

export default PriceOption;