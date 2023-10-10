import { useLoaderData } from 'react-router-dom';

const Phone = () => {
  const phone = useLoaderData();
  console.log(phone);
  return (
    <div>
      <h2>{phone?.name}</h2>
      <img src={phone?.image} alt="phone_image"></img>
    </div>
  );
};

export default Phone;
