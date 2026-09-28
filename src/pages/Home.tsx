import { useGetCategories, useAddCategories } from "../services/prosductsApi";
import type { Category } from "../services/prosductsApi";

function Home() {
  const { data, isLoading, isError, error } = useGetCategories();
  const { mutate: addCategory, isPending } = useAddCategories();

  const handleAdd = () => {
    addCategory({ nom: "Yangi kategoriya" });
  };

  const renderCategories = () => {
    if (isLoading) return <h1 className="text-gray-500">Yuklanmoqda...</h1>;
    if (isError) return <h1 className="text-red-500">Xatolik: {(error as Error)?.message}</h1>;

    if (data && data.length > 0) {
      return (
        <ul className="space-y-2 mt-4">
          {data.map((category: Category) => (
            <li
              key={category.id || category.nom}
              className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-gray-700 font-medium"
            >
              {category.nom}
            </li>
          ))}
        </ul>
      );
    }

    return <p className="text-gray-400 mt-4">Kategoriyalar mavjud emas</p>;
  };

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-xl shadow-md border border-gray-100 mt-10 space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">Home sahifa</h1>

      <button
        onClick={handleAdd}
        disabled={isPending}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg disabled:bg-gray-400 transition-colors"
      >
        {isPending ? "Qo'shilmoqda..." : "Kategoriya qo'shish"}
      </button>

      {renderCategories()}
    </div>
  );
}

export default Home;