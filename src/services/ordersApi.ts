import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export type Order = {
  id?: string;
  nom: string;
  narxi: number;
  rasmi: string;
};

export function useGetOrders() {
  const { data, isLoading, isError, error } = useQuery<Order[]>({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:8000/orders");
      return res.data;
    },
  });

  return { data, isLoading, isError, error };
}

export function useAddOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["orders"],
    mutationFn: async (newOrder: Order) => {
      const res = await axios.post("http://localhost:8000/orders", newOrder);
      return res.data;
    },
    onSuccess: () => {
    
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
}