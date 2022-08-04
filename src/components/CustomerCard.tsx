import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";
import { addFoodToCustomer } from "../features/customerSlice";
import { RootState } from "../app/store";

interface CustomerCardType {
  id: string;
  name: string;
  food: string[];
}

function CustomerCard({ id, name, food }: CustomerCardType) {
  const [meal, setMeal] = useState("");

  const dispatch = useDispatch();
  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((meal, index) => {
            return <p key={index}> {meal}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input value={meal} onChange={(e) => setMeal(e.target.value)} />
          <button
            onClick={() => {
              if (!meal) {
                return;
              }
              dispatch(
                addFoodToCustomer({
                  id,
                  food: meal,
                })
              );
              setMeal("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
