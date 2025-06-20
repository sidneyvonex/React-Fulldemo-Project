import { AiFillDelete } from "react-icons/ai"
import { FiEdit } from "react-icons/fi"

interface Order {
  id: number;
  meal: string;
  price: number;
  date: string;
  status: "Completed" | "Pending" | "Canceled";
  image: string;
  special?: string;
}

const orders: Order[] = [
  {
    id: 1,
    meal: "Seafood Paella",
    price: 300,
    date: "18/06/2025",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    special: "Special",
  },
  {
    id: 2,
    meal: "Seafood Paella",
    price: 230,
    date: "18/06/2025",
    status: "Canceled",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    special: "Special",
  },
  {
    id: 3,
    meal: "Seafood Paella",
    price: 500,
    date: "18/06/2025",
    status: "Pending",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    special: "Special",
  },
];

export const Orders = () => {
  return (
    <div>
      <div className="text-2xl font-bold text-center mb-4 text-orange-400">
        My Orders Page
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Meal</th>
              <th>Price</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={order.image} alt={order.meal} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{order.meal}</div>
                      <div className="text-sm opacity-50">{order.special}</div>
                    </div>
                  </div>
                </td>
                <td>KSH: {order.price}</td>
                <td>{order.date}</td>
                <td>
                  <div
                    className={`badge badge-outline ${
                      order.status === "Completed"
                        ? "badge-success"
                        : order.status === "Pending"
                        ? "badge-warning"
                        : "badge-error"
                    }`}
                  >
                    {order.status}
                  </div>
                </td>
                <td>
                  {order.status === "Pending" ? (
                    <button className="text-blue-700 hover:text-blue-500 btn btn-sm btn-outline">
                      <FiEdit />
                    </button>
                  ) : (
                    <button className="btn btn-sm btn-outline text-red-500 ml-1 hover:bg-red-700">
                      <AiFillDelete />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
