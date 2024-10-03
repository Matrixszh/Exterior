// components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <section className="relative bg-cover bg-center" style={{ backgroundImage: "" }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white">
      <h1 className="text-4xl font-bold">Roofing, Siding & Window Company</h1>
      <p className="mt-4 max-w-xl">At Acosta Exteriors, we offer a variety of services with over 10 years of experience in the construction business.</p>
      <button className="mt-6 bg-orange-500 py-2 px-4 rounded-lg">Book Free Consultations</button>
    </div>
  </section>
  );
};

export default Header;
