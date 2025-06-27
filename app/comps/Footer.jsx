// app/comps/Footer.tsx

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black  text-sm text-white py-4 border-t flex justify-between px-5 mt-40">
      <p>Quotes of the day</p>
      <div className="flex flex-col">
        <p>© {new Date().getFullYear()} </p>
        <p>Invest with H6FIT.</p>
      </div>
      <div className="flex flex-col">
        <p>Contact Info:</p>
        <p>h6fit@gmail.com</p>
        <p>wellness@gmail.com</p>
      </div>
      <p>Tags</p>
    </footer>
  );
}
