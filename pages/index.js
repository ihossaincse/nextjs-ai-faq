import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { scroller } from "react-scroll";
import Faq from '../components/Faq';
import Navbar from '../components/Navbar';

export default function Home() {
  const alanBtnInstance = useRef(null);
  const [index, setIndex] = useState(null);
  const [colorFlag, setColorFlag] = useState(false);
  
  useEffect(() => {
    const alanBtn = require('@alan-ai/alan-sdk-web');
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key: "3cca8b9d3c8f582073369fd1fdf3a8212e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: ({command, faqId}) => {
          if (command === 'gotoFaq') {
            scroller.scrollTo(`accordion-item-${faqId}`);
            setIndex(faqId - 1);
          } 
          else if (command === 'toggleColorMode') {
            setColorFlag(flag => !flag);
          }
        }
      });
    }
  }, []);
  
  return (
    <div>
      <Head>
        <title>Next.js AI - FAQ</title>
        <meta name="description" content="Next.js AI - FAQ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar colorFlag={colorFlag} />
        <Faq index={index} setIndex={setIndex} />
      </main>
    </div>
  )
}
