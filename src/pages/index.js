import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';
import { navigate } from "gatsby"

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>La Kombi Growshop</title>
      </Helmet>
      <h1>La Kombi GrowShop</h1>
      <button onClick={()=>{navigate("https:://lakombigrowshop.com")}}>Page button</button>
      <button onClick={()=>{navigate("/lakombi")}}>Page button</button>
    </main>
  );
}

export default Index;
