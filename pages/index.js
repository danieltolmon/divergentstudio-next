// import styles from 'styles/Home.module.css';

import OurProcess from 'components/OurProcess';
import Banner from 'components/Banner';
import OurProjects from 'components/OurProjects';

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Banner />
        <OurProcess />
        <OurProjects />;
      </main>
    </div>
  );
}
