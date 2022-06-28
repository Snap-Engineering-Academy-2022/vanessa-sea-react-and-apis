import React from "react";

export default function CompPractice1(props) {
  return (
    <div>
      <p>Let's see if I understand this.</p>
      <p>My name is: {props.name}</p>
      <p>And I'm {props.age}!</p>
    </div>
  );
}
