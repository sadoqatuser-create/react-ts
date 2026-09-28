import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export type Category = {
  nom: string;
  id?: string;
};

export function useGetCategories() {
  const { data, isLoading, isError, isSuccess, error } = useQuery<Category[]>({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:8000/category");
      return res.data;
    },
  });

  return {
    data,
    isLoading,
    isError,
    isSuccess,
    error,
  };
}

export function useAddCategories() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationKey: ["category"],
    mutationFn: async (body: Category) => {
      const res = await axios.post("http://localhost:8000/category", body);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
      alert("Muvaffaqiyatli qo'shildi!");
    },
  });
}