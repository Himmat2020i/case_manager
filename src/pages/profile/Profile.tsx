import React from "react";
import useProfile from "./hooks/useProfile";
import { Button, Form } from "react-bootstrap";
import { PROFILE } from "../../constants/profileConstants";
import TextInputController from "../../controller/TextInputController";

const Profile = () => {
  const { control } = useProfile();

  const renderItem = (i) => {
    return (
      <div className="row align-items-center">
        <div className="col-md-4">
          <Form.Label htmlFor="title">{i?.label}</Form.Label>
        </div>
        <div className="col-md-8 form-group">
          <TextInputController control={control} className={"form-control"} {...i} />
        </div>
      </div>
    );
  };

  const renderTitle = () => {
    return (
      <div className="row">
        <div className="col-md-4">
          <Form.Label htmlFor="title">Your Title</Form.Label>
        </div>
        <div className="col-md-8 form-group">
          <Form.Select
            type="select"
            id="title"
            name="title"
            placeholder="Your Title"
            className="form-control">
            <option value={""}>Please Select</option>
            <option>Mr</option>
            <option>Mrs</option>
            <option>Miss</option>
            <option>Rather Not Say</option>
          </Form.Select>
        </div>
      </div>
    );
  };

  const renderButton = () => {
    return (
      <div className="col-sm-12 d-flex justify-content-end">
        <Button className="shadow-lg float-end" type="submit">
          Save Profile
        </Button>
      </div>
    );
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Profile</h2>
      </div>
      <div className="card-body">
        <Form className="mb-3 mt-4" onSubmit={() => {}}>
          <div className="form-body">
            {renderTitle()}
            {PROFILE.map(renderItem)}
            {renderButton()}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
