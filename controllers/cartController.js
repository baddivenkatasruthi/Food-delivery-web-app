import Cart from "../models/Cart.js";

export const addToCart = async (req, res) => {
  const { userId, foodId, name, price, quantity } = req.body;

  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = await Cart.create({
      userId,
      items: [{ foodId, name, price, quantity }]
    });
  } else {
    const itemIndex = cart.items.findIndex(
      item => item.foodId.toString() === foodId
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ foodId, name, price, quantity });
    }

    await cart.save();
  }

  res.json(cart);
};

export const getCart = async (req, res) => {
  const { userId } = req.params;
  const cart = await Cart.findOne({ userId });
  res.json(cart);
};

export const removeFromCart = async (req, res) => {
  const { userId, foodId } = req.body;

  const cart = await Cart.findOne({ userId });
  if (!cart) return res.status(404).json("Cart not found");

  cart.items = cart.items.filter(
    item => item.foodId.toString() !== foodId
  );

  await cart.save();
  res.json(cart);
};

export const clearCart = async (req, res) => {
  const { userId } = req.params;
  await Cart.findOneAndDelete({ userId });
  res.json({ message: "Cart cleared" });
};
