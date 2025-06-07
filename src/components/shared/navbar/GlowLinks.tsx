export const GlowLinks = ({ href, text }: { href: string; text: string }) => {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition duration-300"
    >
      {text}
    </a>
  );
};
