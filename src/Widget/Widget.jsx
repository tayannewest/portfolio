import { openPopupWidget } from "react-calendly";

const CustomButton = ({ url, prefill, pageSettings, utm }) => {
  url = "https://calendly.com/tayanne-west"
  const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm });

  return <button onClick={onClick}>Calendly</button>;
};

export default CustomButton