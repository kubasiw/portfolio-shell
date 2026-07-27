import './Stamp.css';

interface StampProps {
  main: string;
  sub: string;
  className?: string;
}

export function Stamp({ main, sub, className = '' }: StampProps) {
  return (
    <div className={`stamp ${className}`}>
      <div className="stamp__main">{main}</div>
      <div className="stamp__sub">{sub}</div>
    </div>
  );
}
