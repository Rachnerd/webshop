import {
  ProductInStock,
  AddToCartEvent,
} from "components/molecules/product-in-stock/product-in-stock";
import { createComponent } from "@lit-labs/react";
import React from "react";
import type { EventName } from "@lit-labs/react";
import {
  DecrementEvent,
  IncrementEvent,
} from "components/molecules/quantity/quantity";

export const OvProductInStock = createComponent(
  React,
  "ov-product-in-stock",
  ProductInStock,
  {
    onAddToCart: "add-to-cart" as EventName<AddToCartEvent>,
    onIncrement: "increment" as EventName<IncrementEvent>,
    onDecrement: "decrement" as EventName<DecrementEvent>,
  }
);
