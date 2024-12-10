import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="font-poppins text-lg font-semi-bold">
        This uses the Poppins font with bold weight.
      </div>

      <div className="font-cairo text-xl text-primary font-medium">
        هذا النص بخط كايرو.
      </div>

      <div className="font-open-sans text-base font-light">
        This is Open Sans with light weight.
      </div>
    </>
  );
}
