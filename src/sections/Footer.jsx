const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2 text-lg">
        <p>Conditions d&apos;utilisation</p>
        <p>|</p>
        <p>Politique de confidentialité</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://github.com/yanssou"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon w-1/2 h-1/2 flex justify-center items-center"
          >
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-full h-full object-contain"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/yanis-ikhenoussene-1aa404230/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon w-1/2 h-1/2 flex justify-center items-center"
          >
            <img
              src="/assets/linkedin.svg"
              alt="linkedin"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
      </div>

      <p className="text-white-500 text-lg">
        © 2024 Yanis Ikhenoussene. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
