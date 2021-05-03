import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

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
      <p1>Página de inicio para La Kombi Growshop</p1>
      
    </main>
  );
}

export default Index;
