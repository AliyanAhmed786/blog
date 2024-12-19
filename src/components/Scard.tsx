import React from 'react';

type ScardProps = {
  author?: string;  
  date?: string;    
  content?: string; 
  extraText?: string;  // New optional text field
  color?: string;      // Make color optional
};

const Scard: React.FC<ScardProps> = ({ author, date, content, extraText, color }) => {
  return (
    <div
      className={`mx-3 my-10 p-5 shadow-lg ${color ? `bg-[${color}]` : 'bg-white'}`} // Apply color if provided, otherwise default to bg-slate-500
    >
      <p>
        {author && <span className="font-semibold">{author}</span>}
        {author && date && <span className="mx-2">|</span>}
        {date && <span>{date}</span>}
      </p>
      {content && <p className='text-2xl font-bold'>{content}</p>}
      {extraText && <p className='text-2xl font-bold'>{extraText}</p>}  {/* Render extraText if provided */}
    </div>
  );
};

export default Scard;
