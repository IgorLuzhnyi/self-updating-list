import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { MALE_COLOR, FEMALE_COLOR } from "../constants/constants";

const Contract = ({ candidate }) => {
  const { firstName, lastName, phone, gender, avatarImg } = candidate;
  return (
    <div className="contract-wrapper">
      <div className="avatar-wrapper">
        <img src={avatarImg} className="avatar-img" alt="avatar" />
      </div>
      <div className="candidate-data">
        <p className="full-name">
          {firstName} {lastName}
        </p>
        <p className="phone">{phone}</p>
        <p
          className="gender"
          style={
            gender === "male" ? { color: MALE_COLOR } : { color: FEMALE_COLOR }
          }
        >
          {gender === "male" ? (
            <BsGenderMale />
          ) : gender === "female" ? (
            <BsGenderFemale />
          ) : (
            ""
          )}
        </p>
      </div>
    </div>
  );
};

export default Contract;
