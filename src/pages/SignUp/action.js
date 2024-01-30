export const action = async ({ request }) => {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData);
  console.log(payload);
  return null;
};
