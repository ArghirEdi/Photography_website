function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-200 dark:bg-zinc-950 text-black dark:text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Raul Photography. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
