let orders = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ orders });
  } else if (req.method === "POST") {
    const { items, total, customer_name, customer_email, customer_phone, customer_city } = req.body;

    if (!items || !total) {
      return res.status(400).json({ message: "Invalid order data" });
    }

    const newOrder = {
      id: Date.now().toString(),
      items,
      total,
      status: "Pending",
      customer_name,
      customer_email,
      customer_phone,
      customer_city
    };

    orders.push(newOrder);
    res.status(201).json({ order: newOrder });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
