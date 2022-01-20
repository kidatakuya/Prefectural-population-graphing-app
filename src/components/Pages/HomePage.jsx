import { Header, HomeMain } from '../index';

function HomePage() {
  document.getElementById('test');
  return (
    <>
      <Header isTitle={'都道府県別総人口推移グラフ'} />
      <HomeMain />
    </>
  );
}

export default HomePage;
