import { useState } from "react";
import "./Card.css";
import { supabase } from "../client";
import { Link } from "react-router";

const Card = (props) => {
  const [count, setCount] = useState(props.betCount || 0);

  const updateCount = async (event) => {
    event.preventDefault();

    await supabase
      .from("Posts")
      .update({ betCount: count + 1 })
      .eq("id", props.id);

    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="Card">
      <Link to={"/edit/" + props.id}>
        <h3 className="title">{props.title}</h3>
      </Link>
      <p className="author">{props.author}</p>
      <p className="description">{props.description}</p>
      <button className="betButton" onClick={updateCount}>
        👍 Bet count: {count}
      </button>
    </div>
  );
};

export default Card;
