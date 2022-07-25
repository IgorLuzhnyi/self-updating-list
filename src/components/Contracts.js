import { useState, useEffect } from "react";
import { MALE_COLOR, FEMALE_COLOR, DARK_GREY } from "../constants/constants";
import { BsGenderFemale, BsGenderMale, BsQuestionLg } from "react-icons/bs";
import contacts from "../constants/constants";
import Contract from "./Contract";

function Contracts() {
  const [candidates, setCandidates] = useState(contacts);
  const [search, setSearch] = useState("");

  const [maleCheck, setMaleCheck] = useState(true);
  const [femaleCheck, setFemaleCheck] = useState(true);
  const [nogenderCheck, setNogenderCheck] = useState(true);

  const handleSearchChange = (e) => setSearch(e.target.value);

  useEffect(() => {
    const chosenGenders = [];
    maleCheck && chosenGenders.push("male");
    femaleCheck && chosenGenders.push("female");

    const filterGender = contacts.filter((item) => {
      if (
        chosenGenders.some((gender) => gender === item.gender) ||
        (nogenderCheck && !item.gender)
      ) {
        return item;
      }
    });

    const match = filterGender.filter((person) =>
      `${person.lastName} ${person.firstName} ${person.phone}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    setCandidates(match);
  }, [search, maleCheck, femaleCheck, nogenderCheck]);

  return (
    <div className="candidates-wrapper">
      <h1>
        Кандидати, які подали резюме на позицію Trainee Frontend Developer
      </h1>
      <div className="input-wrapper">
        <input
          value={search}
          className="list-input"
          type="text"
          autoFocus="autofocus"
          placeholder="шукати..."
          onChange={handleSearchChange}
        />
      </div>
      <div className="gender-options">
        <div className="gender-option-wrapper">
          <input
            type="checkbox"
            name="male-gender"
            checked={maleCheck}
            onChange={() =>
              maleCheck ? setMaleCheck(false) : setMaleCheck(true)
            }
          />
          <label htmlFor="male-gender" style={{ color: MALE_COLOR }}>
            <BsGenderMale />
          </label>
        </div>

        <div className="gender-option-wrapper">
          <input
            type="checkbox"
            name="female-gender"
            checked={femaleCheck}
            onChange={() =>
              femaleCheck ? setFemaleCheck(false) : setFemaleCheck(true)
            }
          />
          <label htmlFor="female-gender" style={{ color: FEMALE_COLOR }}>
            <BsGenderFemale />
          </label>
        </div>

        <div className="gender-option-wrapper">
          <input
            type="checkbox"
            name="no-gender"
            checked={nogenderCheck}
            onChange={() =>
              nogenderCheck ? setNogenderCheck(false) : setNogenderCheck(true)
            }
          />
          <label htmlFor="no-gender" style={{ color: DARK_GREY }}>
            <BsQuestionLg />
          </label>
        </div>
      </div>

      {candidates.map((person) => (
        <Contract key={person.id} candidate={person} />
      ))}
    </div>
  );
}

export default Contracts;
