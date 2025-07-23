import React, { useEffect } from "react";
import { Tabs } from "../components/export";
import ListViewLayout from "../layouts/ListView/ListViewLayout";
import { useNavigate } from "react-router-dom";

const ListView = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/list-view/category/mobile-accessories");
  }, []);
  return (
    <section>
      <div>
        <Tabs />
        <ListViewLayout />
      </div>
    </section>
  );
};

export default ListView;
