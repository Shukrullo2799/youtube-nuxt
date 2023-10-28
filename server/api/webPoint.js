export default defineEventHandler(async (event) => {
  // //handler query params
  // const { name } = getQuery(event);

  // // handler post body
  // const { age } = await readBody(event);

  // api call
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_cWTGWWBcsjoUubGldPtifsrPJ9aeyuSowql0N0J2npm"
  );
  console.log(data);

  // return {
  //   message: `Hello ${name}!, you are ${age} years old.`,
  // };
  return data;
});
