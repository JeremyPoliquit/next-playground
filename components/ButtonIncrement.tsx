"use client"
import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

const ButtonIncrement = () => {
    const { count, increment, decrement, reset } = useCounter(0);
  return (
    <div>
      <p className="text-center text-xl">{count}</p>
      <div className="flex gap-4">
        <button type="button" onClick={increment} className="btn btn-primary text-white btn-wide">Increment</button>
        <button type="button" onClick={decrement} className="btn btn-warning text-white btn-wide">Decrement</button>
        <button type="button" onClick={reset} className="btn btn-error text-white btn-wide">Reset</button>
      </div>
    </div>
  );
};

export default ButtonIncrement;
