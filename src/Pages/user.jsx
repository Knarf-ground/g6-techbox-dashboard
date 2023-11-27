import React from "react";
import Title from "../../Component/Title";
import ContentNumber from "../../Component/ContentNumber";
import Card from "../../Component/Card";

function  Users() {
  return (
    <>
    <section className="contentPage">
        <Card apiUrl={"http://localhost:3000/api/user/allUser"} />
        </section>
    </>
  );
}

export default Users;