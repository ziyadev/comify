import heropreview from "#/public/sky.png"
import apppreview from "#/public/app-preview.jpg"
import Image from 'next/image';
export default function HeroPreview() {
  return (
    <div className="container mx-auto px-10">
      <div className="relative rounded-2xl  aspect-[16/10] overflow-hidden flex justify-center items-center">
        <Image src={heropreview} alt="Hero Preview" fill objectFit="cover" />
        <div className=" h-142 sm:h-auto sm:w-304 relative aspect-[var(--width)/var(--height)] [--radius:var(--radius-xl)]">
          <div className="absolute -inset-(--padding) rounded-[calc(var(--radius)+var(--padding))] shadow-xs ring-1 ring-black/5 [--padding:--spacing(2)]" />
          <Image
            alt=""
            src={apppreview}
            height={1200}
            width={1800}
            objectFit="cover"
            className="h-full rounded-(--radius) shadow-2xl ring-1 ring-black/10 "
          />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 w-full h-[60%] bg-gradient-to-t from-background via-background/95 to-transparent"></div>
      </div>

    </div>
  );
}
