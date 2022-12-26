import React from 'react';
import Head from 'next/head';

const Heading: React.FC = () => {
  return (
    <Head>
      <title>Shelvin - developer and coffee drinker</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default Heading;
