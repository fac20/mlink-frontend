import React from "react";

import { ColumnSection, RowSection, Subtitle } from "./Dashboard.styles";

export default function Dashboard() {
  const [totalCount, setTotalCount] = React.useState("");
  return <Subtitle>You have {totalCount} existing mlinks</Subtitle>;
}
