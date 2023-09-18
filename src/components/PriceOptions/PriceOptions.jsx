import PriceOption from "../PriceOption/PriceOption"


const PriceOptions = () => {

    const priceOptions = [
        {
          "id": 1,
          "name": "Premium Membership",
          "price": "$59.99",
          "features": [
            "Cardio Equipment",
            "Personal Training",
            "Sauna and Steam Room",
            "Group Fitness Classes",
            "Nutrition Counseling"
          ]
        },
        {
          "id": 2,
          "name": "Platinum Membership",
          "price": "$69.99",
          "features": [
            "Free Weights",
            "Indoor Swimming Pool",
            "Yoga Classes",
            "Massage Therapy",
            "Smoothie Bar"
          ]
        },
        {
          "id": 3,
          "name": "Basic Membership",
          "price": "$49.99",
          "features": [
            "Locker Rooms with Showers",
            "Mindfulness Workshops",
            "Chiropractic Services",
            "Retail Pro Shop",
            "Member Social Events"
          ]
        }
      ]
      

    return (
        <div className="mx-20 my-5">
            <h2 className="text-5xl font-semibold py-5 text-center">Best Price in the Town</h2>
            <div className="grid grid-cols-3 gap-8">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;