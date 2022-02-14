import { ReactComponent as CreateAccount } from "../../images/CreateAccount.svg";
import { ReactComponent as Deposit } from "../../images/Deposit.svg";
import { ReactComponent as Group } from "../../images/Group.svg";

const mockData = [
  {
    title: "Create an account",
    description: ["Download the Structure Mobile App and create your account."],
    image: <CreateAccount />,
  },
  {
    title: "Deposit crypto",
    description: ["Deposit crypto to your Structure Mobile App."],
    image: <Deposit />,
  },
  {
    title: "Start trading",
    description: ["You’re ready to start trading crypto and stocks."],
    image: <Group />,
  },
];

export default mockData;
