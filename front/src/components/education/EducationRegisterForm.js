import React, { useState } from "react";

import { Form, Button } from "react-bootstrap";
import * as Api from "../../api";
import { useRecoilState } from "recoil";
import addEducationState from "../../atom/addEducationState";
import educationListState from "../../atom/educationListState";

// + 버튼을 눌렀을 때 나타나는 학력 추가 컴포넌트 입니다.
// 사용자에게 입력받은 학력 내용을 추가해주는 기능을 합니다.
const EducationRegisterForm = () => {
  const [, setEducationList] = useRecoilState(educationListState);
  const [, setIsAddEducation] = useRecoilState(addEducationState);
  const [isDuplicate, setIsDuplicate] = useState(false); // 학력 중복을 확인하기 위한 state

  const grades = ["재학 중", "학사 졸업", "석사 졸업", "박사 졸업"];

  // 사용자의 입력을 받아 저장하기 위한 state입니다.
  const [inputs, setInputs] = useState({
    school: "",
    major: "",
    position: "",
  });

  // 학교 이름, 전공, 졸업 상태의 입력 여부를 확인
  const isSchoolValid = inputs.school.length > 0;
  const isMajorValid = inputs.major.length > 0;
  const isPositionValid = inputs.position !== "";
  const isFormValid = isSchoolValid && isMajorValid && isPositionValid;

  // 확인 버튼을 눌렀을 때 실행되는 함수로, 입력받은 정보가 저장된 inputs를
  // POST 요청으로 db에 저장합니다.
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Api.post("education/create", inputs);
      setEducationList((cur) => {
        return [...cur, response.data];
      });
      setIsAddEducation(false);
    } catch (e) {
      setIsDuplicate(true);
    }
  };

  // input 창, radio 버튼을 통한 사용자 입력을 inputs에 저장하는 함수입니다.
  const onChange = (e) => {
    setIsDuplicate(false);
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <Form.Group>
      <Form.Group className="mt-3">
        <Form.Control
          name="school"
          defaultValue={inputs.school}
          onChange={onChange}
          className="m-2"
          type="text"
          placeholder="학교 이름"
        />
        {!isSchoolValid && (
          <Form.Text className="text-success">필수 입력사항입니다.</Form.Text>
        )}
        {isDuplicate && (
          <Form.Text className="text-success">중복된 학적입니다.</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Control
          name="major"
          defaultValue={inputs.major}
          onChange={onChange}
          className="m-2"
          type="text"
          placeholder="전공"
        />
        {!isMajorValid && (
          <Form.Text className="text-success">필수 입력사항입니다.</Form.Text>
        )}
      </Form.Group>
      <Form.Group key=" inline-radio" className="mt-3 mb-2">
        {grades.map((grade, idx) => (
          <Form.Check
            inline
            key={`inline-radio-${idx}`}
            label={grade}
            name="position"
            type="radio"
            id={`inline-radio-${idx}`}
            onChange={onChange}
            defaultValue={grade}
          />
        ))}
      </Form.Group>
      {!isPositionValid && (
        <Form.Text className="text-success">필수 선택사항입니다.</Form.Text>
      )}

      <div style={{ textAlign: "center" }} className="mb-3">
        <Button
          onClick={onSubmit}
          variant="primary"
          type="submit"
          disabled={!isFormValid}
          style={{ marginRight: "10px" }}
        >
          확인
        </Button>
        <Button
          onClick={() => setIsAddEducation(false)}
          variant="secondary"
          type="submit"
          style={{ marginLeft: "10px" }}
        >
          취소
        </Button>
      </div>
    </Form.Group>
  );
};

export default EducationRegisterForm;
