import { TiTick } from "react-icons/ti";

const Features = ({feature}) => {
    return (
        <div className="flex gap-4 items-center px-5">
            <TiTick className="text-2xl text-green-500"></TiTick> <p className="text-xl">{feature}</p>
        </div>
    );
};

export default Features;