export default defineEventHandler(async (event) => {
  const { code } = event.context.params;
  const { currency_key } = useRuntimeConfig(event);
  const url = `https://api.currencyapi.com/v3/latest?apikey=${currency_key}&currencies=${code}`;
  const { data } = await $fetch(url);
  return data;
});
