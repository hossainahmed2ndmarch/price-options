import Option from "./../PriceOption/Option";
const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 29.99,
      features: [
        "Access to gym equipment",
        "Locker access",
        "1 free guest pass per month",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 49.99,
      features: [
        "Access to gym equipment",
        "Locker access",
        "5 free guest passes per month",
        "Access to group classes",
        "1 personal training session per month",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 79.99,
      features: [
        "Access to gym equipment",
        "Locker access",
        "Unlimited guest passes",
        "Access to group classes",
        "4 personal training sessions per month",
        "Sauna and spa access",
      ],
    },
    {
      id: 4,
      name: "VIP Plan",
      price: 99.99,
      features: [
        "Access to gym equipment",
        "Locker access",
        "Unlimited guest passes",
        "Access to all group classes",
        "8 personal training sessions per month",
        "Private locker",
        "Sauna and spa access",
        "Nutrition and wellness consultation",
      ],
    },
    {
      id: 5,
      name: "Day Pass",
      price: 15.0,
      features: ["One-day access to gym equipment", "Locker access"],
    },
  ];

  return (
    <div className="my-10">
      <h2 className="text-7xl font-bold text-center">Best Prices</h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <Option key={option.id} option={option}></Option>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
