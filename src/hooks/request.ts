import { ref, UnwrapRef } from 'vue';
import { useQuery } from 'vue-query';
import { AxiosResponse } from 'axios';
import { HttpResponse } from '@/api/interceptor';
import useLoading from './loading';

export default function useRequest<T>(
  api: () => Promise<AxiosResponse<HttpResponse>>,
  isLoading = true
) {
  const { loading, setLoading } = useLoading(isLoading);
  const response = ref<T>();

  const fetchData = async () => {
    try {
      const res = await api();
      response.value = res.data as T;
    } catch (error) {
      console.error('请求出错：', error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, response };
}
