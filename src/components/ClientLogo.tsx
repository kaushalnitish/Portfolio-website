export function PassionCapitalLogo() {
  return (
    <div className="flex flex-col items-center justify-center font-sans tracking-tight text-[#111111]">
      <span className="text-2xl font-black leading-[0.9] tracking-tighter lowercase select-none">passion</span>
      <span className="text-[10px] font-bold tracking-[0.28em] text-[#111111]/70 leading-none uppercase mt-1 select-none mr-[-0.28em]">capital</span>
    </div>
  );
}

export function HeapsgoodLogo() {
  return (
    <div className="font-sans font-black text-2xl tracking-[0.04em] text-[#111111] uppercase flex items-center gap-0.5 select-none">
      <span>HEAPSGOOD</span>
    </div>
  );
}

export function SquarePegLogo() {
  return (
    <div className="flex items-center gap-1.5 font-sans font-extrabold text-xl text-[#111111] select-none">
      <span>Square Peg</span>
      <div className="w-3 h-3 border-[2.5px] border-[#111111] rotate-45 transform flex-shrink-0" />
    </div>
  );
}

export function WavepistonLogo() {
  return (
    <div className="flex flex-col items-center justify-center select-none text-[#111111]">
      <div className="relative w-24 h-5 flex flex-col items-center justify-center">
        <svg className="w-full h-3 mb-1" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M0,10 Q25,0 50,10 T100,10" />
        </svg>
        <div className="absolute top-[3px] w-[1px] h-3 bg-[#111111]" />
      </div>
      <span className="text-[10px] font-mono tracking-[0.24em] font-black uppercase pl-[0.24em] mt-0.5">WAVEPISTON</span>
    </div>
  );
}

export function BtLogo() {
  return (
    <div className="font-sans text-4xl font-extrabold text-[#111111] tracking-tighter flex items-end select-none">
      <span>bt</span>
      <span className="w-2.5 h-2.5 rounded-full bg-[#111111] ml-0.5 mb-[6px]" />
    </div>
  );
}

export function RippleLogo() {
  return (
    <div className="flex items-center gap-2 font-sans font-extrabold text-xl tracking-tight text-[#111111] select-none">
      <svg className="w-6 h-6 text-[#111111] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" strokeDasharray="3 2" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
      <span>Ripple</span>
    </div>
  );
}

export function AirtreeLogo() {
  return (
    <div className="flex items-center gap-2.5 font-sans font-extrabold text-xl text-[#111111] tracking-tight select-none">
      <svg className="w-6 h-6 text-[#111111] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="22" x2="12" y2="4" />
        <path d="M12 17c-2.5 0-4-1.5-4-3s1.5-1.5 4-1.5" />
        <path d="M12 13c2.5 0 4-1.5 4-3s-1.5-1.5-4-1.5" />
        <circle cx="12" cy="4" r="1" fill="currentColor" opacity="0.9" />
        <circle cx="8" cy="14" r="1" fill="currentColor" opacity="0.9" />
        <circle cx="16" cy="10" r="1" fill="currentColor" opacity="0.9" />
      </svg>
      <span>AirTree</span>
    </div>
  );
}

export function BereevLogo() {
  return (
    <div className="flex items-center gap-2 font-sans font-extrabold text-xl text-[#111111] lowercase tracking-tight select-none">
      <svg className="w-5 h-5 text-[#111111] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5zm1.5-3.5c0 1.38-1.12 2.5-2.5 2.5S9.5 13.88 9.5 12.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5zm1-4.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5.224-.5.5-.5.5.224.5.5z" />
      </svg>
      <span className="font-sans font-bold">bereev</span>
    </div>
  );
}

interface ClientLogoProps {
  logoType: string;
}

export default function ClientLogo({ logoType }: ClientLogoProps) {
  switch (logoType) {
    case 'passion-capital':
      return <PassionCapitalLogo />;
    case 'heapsgood':
      return <HeapsgoodLogo />;
    case 'square-peg':
      return <SquarePegLogo />;
    case 'wavepiston':
      return <WavepistonLogo />;
    case 'bt':
      return <BtLogo />;
    case 'ripple':
      return <RippleLogo />;
    case 'airtree':
      return <AirtreeLogo />;
    case 'bereev':
      return <BereevLogo />;
    default:
      return <span className="font-mono text-xs uppercase tracking-widest text-[#111111]">{logoType}</span>;
  }
}
