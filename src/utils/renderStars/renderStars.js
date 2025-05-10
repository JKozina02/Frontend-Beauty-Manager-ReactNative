import FractionalStar from "../../components/ui/FractionalStar";
import Icon from "react-native-vector-icons/MaterialIcons";

export const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const decimal = rating - fullStars;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Icon key={`full-${i}`} name="star" size={20} color="#FFD700" />);
  }

  if (decimal > 0) {
    stars.push(<FractionalStar key="fractional" fill={decimal} />);
  }

  const totalStars = fullStars + (decimal > 0 ? 1 : 0);

  for (let i = totalStars; i < 5; i++) {
    stars.push(<Icon key={`empty-${i}`} name="star-border" size={20} color="#FFD700" />);
  }

  return stars;
};
