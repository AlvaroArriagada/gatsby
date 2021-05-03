import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';
import { navigate } from "gatsby"
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';


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
      <Link href="https://lakombigrowshop.cl/" target="_blank">
        <Button size="medium" variant="contained" color="primary">
          Frutillar
        </Button>
        <Button size="medium" variant="contained" color="primary">
          Santiago
        </Button>
      </Link>
    </main>
  );
}

export default Index;
