import { useState } from "react";
import { useGetOrders, useAddOrder } from "../services/ordersApi"; 

function OrdersPage() {
  const { data: orders, isLoading, isError, error } = useGetOrders();
  const { mutate: addOrder, isPending } = useAddOrder();
  const [nom, setNom] = useState("");
  const [narxi, setNarxi] = useState("");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nom.trim() || !narxi ) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }

    addOrder(
      {
        nom,
        narxi: Number(narxi),
        
      },
      {
        onSuccess: () => {
    
          setNom("");
          setNarxi("");
        
        },
      }
    );
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded-xl shadow-md space-y-4 border border-gray-100"
      >
        <h2 className="text-xl font-bold text-gray-800">Yangi zakaz qo'shish</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Zakaz nomi"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Narxi"
            value={narxi}
            onChange={(e) => setNarxi(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
       
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg disabled:bg-gray-400 transition-colors"
        >
          {isPending ? "Qo'shilmoqda..." : "Saqlash"}
        </button>
      </form>

      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-800 border-b pb-2">Zakazlar</h1>

        {isLoading && <p className="text-gray-500">Yuklanmoqda...</p>}
        {isError && (
          <p className="text-red-500">Xatolik: {(error as Error)?.message}</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {orders?.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={order.rasmi}
                alt={order.nom}
                className="w-full h-44 object-cover"
              />
              <div className="p-4 space-y-1">
                <h3 className="text-lg font-bold text-gray-800">{order.nom}</h3>
                <p className="text-md font-semibold text-blue-600">
                  {order.narxi.toLocaleString()} so'm
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;