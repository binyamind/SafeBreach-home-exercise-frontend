import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta,
  Image,
} from "semantic-ui-react";

interface IProps {
  name: string;
  age: string;
  phone: string;
  address: string;
  portrait: string;
}

const CardItem = ({ name, age, phone, address, portrait }: IProps) => {
  return (
    <Card className="">
      <CardContent>
        <CardHeader>{name.toUpperCase()}</CardHeader>
        <CardMeta>
          <strong>AGE: </strong>
          {age}
        </CardMeta>
        <CardMeta>
          {" "}
          <strong>PHONE: </strong>
          {phone}
        </CardMeta>
        <strong>ADDRESS: </strong>
        <CardDescription>{address}</CardDescription>
        <Image src={`../../assets/images/${portrait}`} wrapped ui={false} />
      </CardContent>
    </Card>
  );
};
export default CardItem;
