import React from "react";

import { MDBDataTable } from "mdbreact";

import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function Datatable(props) {
  console.log(props.data);
  const newdata = props.data.results;
  console.log(newdata);

  let itemToRender;
  if (newdata) {
    console.log("newdata ");
    console.log(newdata);
    itemToRender = newdata.map((item) => {
      return (
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.air_date}</td>
          <td>{item.episode}</td>
        </tr>
      );
    });
    console.log("itemToRender ");
    console.log(itemToRender);
  }
  const data = {
    columns: [
      { label: "Id", field: "id", sort: "asc", width: "150" },
      { label: "Name", field: "name", sort: "asc", width: "150" },
      { label: "Date", field: "air_date", sort: "asc", width: "150" },
      { label: "Episode", field: "episode", sort: "asc", width: "150" },
    ],
    rows: newdata,
  };

  return (
    <>
      <table className="table table-striped"></table>
      <MDBDataTable striped bordered small data={data} />
    </>
  );
}

export default Datatable;
