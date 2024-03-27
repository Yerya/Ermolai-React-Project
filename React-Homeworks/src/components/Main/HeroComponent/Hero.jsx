import FoodCard from "../../FoodCard/FoodCard";
import { foodList } from "../../../__mocks__/testData";
import Button from "../../Buttons/Buttons";
import "./Hero.css";

function Hero() {
  const foodContent = foodList.map((burger) => {
    return (
      <FoodCard
        key={burger.id}
        title={burger.title}
        subTitle={burger.subTitle}
        price={burger.price}
        imgUrl={burger.imgUrl}
      />
    );
  });
  return (
    <section className="hero flex-elem">
      <div className="hero__food-list">
      {foodContent}
      </div>
      <Button buttonInfo={"See more"} className={"button-blue"} />
    </section>
  );
}

export default Hero;
