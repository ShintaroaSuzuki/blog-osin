const Footer = () => {
  return (
    <footer className="mt-20 mb-10 flex flex-col items-center">
      <span className="text-sm text-slate-600">{`© ${new Date().getFullYear()} Osin.`}</span>
    </footer>
  );
};

export default Footer;
